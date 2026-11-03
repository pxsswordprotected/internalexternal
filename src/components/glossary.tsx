"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { GLOSSARY_BY_ID } from "@/lib/glossary";

interface OpenBox {
  key: string;
  termId: string;
  anchor: HTMLElement;
}

interface GlossaryActions {
  showPreview: (key: string, termId: string, anchor: HTMLElement) => void;
  hidePreview: (key: string) => void;
  togglePin: (key: string, termId: string, anchor: HTMLElement) => void;
}

const HOVER_DELAY_MS = 200;
const BOX_GAP = 6;
const MAX_STACK_ITERATIONS = 50;

// Split so hover previews do not re-render every term; only click changes the pinned set.
const GlossaryActionsContext = createContext<GlossaryActions | null>(null);
const GlossaryPinnedContext = createContext<ReadonlySet<string>>(new Set());

interface PlacedRect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export function GlossaryProvider({ children }: { children: ReactNode }) {
  const [pinned, setPinned] = useState<OpenBox[]>([]);
  const [preview, setPreview] = useState<OpenBox | null>(null);
  const [layoutTick, setLayoutTick] = useState(0);
  const pinnedRef = useRef<OpenBox[]>([]);
  const boxRefs = useRef(new Map<string, HTMLDivElement>());

  const updatePinned = useCallback((next: OpenBox[]) => {
    pinnedRef.current = next;
    setPinned(next);
  }, []);

  const showPreview = useCallback((key: string, termId: string, anchor: HTMLElement) => {
    if (pinnedRef.current.some((box) => box.key === key)) return;
    setPreview({ key, termId, anchor });
  }, []);

  const hidePreview = useCallback((key: string) => {
    setPreview((current) => (current?.key === key ? null : current));
  }, []);

  const togglePin = useCallback(
    (key: string, termId: string, anchor: HTMLElement) => {
      const current = pinnedRef.current;
      if (current.some((box) => box.key === key)) {
        updatePinned(current.filter((box) => box.key !== key));
        return;
      }
      updatePinned([...current, { key, termId, anchor }]);
      setPreview((existing) => (existing?.key === key ? null : existing));
    },
    [updatePinned],
  );

  const closeAll = useCallback(() => {
    updatePinned([]);
    setPreview(null);
  }, [updatePinned]);

  const actions = useMemo<GlossaryActions>(
    () => ({ showPreview, hidePreview, togglePin }),
    [showPreview, hidePreview, togglePin],
  );

  const pinnedKeys = useMemo<ReadonlySet<string>>(
    () => new Set(pinned.map((box) => box.key)),
    [pinned],
  );

  const boxes = useMemo<OpenBox[]>(
    () => (preview && !pinnedKeys.has(preview.key) ? [...pinned, preview] : pinned),
    [pinned, preview, pinnedKeys],
  );
  const hasBoxes = boxes.length > 0;

  // Close on outside pointer / Escape.
  useEffect(() => {
    if (!hasBoxes) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (target?.closest?.(".glossary-term, .glossary-box")) return;
      closeAll();
    };
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [hasBoxes, closeAll]);

  // Re-layout on viewport / body size changes (sidebar font fitting, late font loads).
  useEffect(() => {
    if (!hasBoxes) return;

    const relayout = () => setLayoutTick((tick) => tick + 1);
    window.addEventListener("resize", relayout);
    const observer = new ResizeObserver(relayout);
    observer.observe(document.body);
    return () => {
      window.removeEventListener("resize", relayout);
      observer.disconnect();
    };
  }, [hasBoxes]);

  // Position boxes in document coordinates so they scroll with their word.
  useLayoutEffect(() => {
    if (!hasBoxes) return;

    const disconnected = boxes.filter((box) => !box.anchor.isConnected);
    if (disconnected.length > 0) {
      const gone = new Set(disconnected.map((box) => box.key));
      updatePinned(pinnedRef.current.filter((box) => !gone.has(box.key)));
      setPreview((current) => (current && gone.has(current.key) ? null : current));
    }

    const placed: PlacedRect[] = [];
    for (const box of boxes) {
      const el = boxRefs.current.get(box.key);
      if (!el || !box.anchor.isConnected) continue;

      const rects = box.anchor.getClientRects();
      const r = rects[rects.length - 1];
      if (!r) continue;

      const width = el.offsetWidth;
      const height = el.offsetHeight;
      let top = r.bottom + window.scrollY + BOX_GAP;
      let left = r.left + window.scrollX;

      const main = box.anchor.closest("main");
      if (main) {
        const mainRect = main.getBoundingClientRect();
        const minLeft = mainRect.left + window.scrollX;
        const maxLeft = mainRect.right + window.scrollX - width;
        left = Math.max(minLeft, Math.min(left, maxLeft));
      }

      for (let i = 0; i < MAX_STACK_ITERATIONS; i += 1) {
        const candidate = { left, top, right: left + width, bottom: top + height };
        const hit = placed.find(
          (other) =>
            candidate.left < other.right &&
            candidate.right > other.left &&
            candidate.top < other.bottom &&
            candidate.bottom > other.top,
        );
        if (!hit) break;
        top = hit.bottom + BOX_GAP;
      }

      el.style.top = `${top}px`;
      el.style.left = `${left}px`;
      placed.push({ left, top, right: left + width, bottom: top + height });
    }
  }, [boxes, hasBoxes, layoutTick, updatePinned]);

  const setBoxRef = useCallback(
    (key: string) => (el: HTMLDivElement | null) => {
      if (el) boxRefs.current.set(key, el);
      else boxRefs.current.delete(key);
    },
    [],
  );

  return (
    <GlossaryActionsContext.Provider value={actions}>
      <GlossaryPinnedContext.Provider value={pinnedKeys}>
        {children}
        {/* Boxes only exist after a user interaction, so the portal never renders during SSR/hydration. */}
        {hasBoxes
          ? createPortal(
              boxes.map((box) => {
                const entry = GLOSSARY_BY_ID[box.termId];
                if (!entry) return null;
                const isPinned = pinnedKeys.has(box.key);
                return (
                  <div
                    key={box.key}
                    className={`glossary-box${isPinned ? " glossary-box--pinned" : ""}`}
                    role="note"
                    aria-label={entry.label}
                    ref={setBoxRef(box.key)}
                  >
                    <div className="glossary-box__header">
                      <p className="glossary-box__term">{entry.label}</p>
                      <button
                        type="button"
                        className="glossary-box__close"
                        aria-label={`Close ${entry.label} glossary box`}
                        onClick={() => {
                          updatePinned(pinnedRef.current.filter((item) => item.key !== box.key));
                          hidePreview(box.key);
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          aria-hidden="true"
                        >
                          <path d="m3 3 6 6M9 3 3 9" />
                        </svg>
                      </button>
                    </div>
                    <p className="glossary-box__definition">{entry.definition}</p>
                    {entry.definedIn ? (
                      <p className="glossary-box__source">Defined in section {entry.definedIn}</p>
                    ) : null}
                  </div>
                );
              }),
              document.body,
            )
          : null}
      </GlossaryPinnedContext.Provider>
    </GlossaryActionsContext.Provider>
  );
}

export function GlossaryTerm({ termId, children }: { termId: string; children?: ReactNode }) {
  const actions = useContext(GlossaryActionsContext);
  const pinnedKeys = useContext(GlossaryPinnedContext);
  const key = useId();
  const timer = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  useEffect(() => clearTimer, [clearTimer]);

  if (!actions) return <>{children}</>;

  const isPinned = pinnedKeys.has(key);

  const onMouseEnter = (event: MouseEvent<HTMLSpanElement>) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const el = event.currentTarget;
    clearTimer();
    timer.current = window.setTimeout(() => {
      timer.current = null;
      actions.showPreview(key, termId, el);
    }, HOVER_DELAY_MS);
  };

  const onMouseLeave = () => {
    clearTimer();
    actions.hidePreview(key);
  };

  const onFocus = (event: FocusEvent<HTMLSpanElement>) => {
    if (event.currentTarget.matches(":focus-visible")) {
      actions.showPreview(key, termId, event.currentTarget);
    }
  };

  const onClick = (event: MouseEvent<HTMLSpanElement>) => {
    clearTimer();
    actions.togglePin(key, termId, event.currentTarget);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      actions.togglePin(key, termId, event.currentTarget);
    }
  };

  return (
    <span
      className={`glossary-term${isPinned ? " glossary-term--open" : ""}`}
      role="button"
      tabIndex={0}
      aria-expanded={isPinned}
      data-term={termId}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={() => actions.hidePreview(key)}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </span>
  );
}
