"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MIN_CONTENTS_FONT_SIZE = 11;
const MAX_CONTENTS_FONT_SIZE = 16;
// Headroom for engines that round line boxes differently from getBoundingClientRect.
const CONTENTS_FIT_SAFETY_PX = 2;

export interface EssayContentsItem {
  targetId: string;
  href: string;
  label: string;
  slug: string | null;
  sectionNumber: string | null;
  parentNumber: string | null;
  grouped: boolean;
}

export function EssayContentsNav({
  items,
}: {
  items: readonly EssayContentsItem[];
}) {
  const pathname = usePathname();
  const isContinuousEssay = pathname === "/" || pathname === "/original";
  const [activeTargetId, setActiveTargetId] = useState("introduction");
  const linkElements = useRef(new Map<string, HTMLAnchorElement>());
  const navRef = useRef<HTMLElement>(null);

  // Largest font size at which the real rendered lines (wrapped titles included) fit the sidebar.
  // Set on the header so the masthead meta row shares it. The sidebar is non-scrollable in CSS;
  // scrolling is re-enabled only when the list cannot fit even at the minimum size.
  useLayoutEffect(() => {
    const nav = navRef.current;
    const header = nav?.parentElement;
    if (!nav || !header) {
      return;
    }

    const desktop = window.matchMedia("(min-width: 761px)");

    const reset = () => {
      header.style.removeProperty("--contents-font-size");
      header.style.removeProperty("overflow-y");
    };

    const fit = () => {
      reset();
      if (!desktop.matches) {
        return;
      }

      header.scrollTop = 0;

      const fits = (size: number) => {
        header.style.setProperty("--contents-font-size", `${size}px`);
        const contentBottom = nav.getBoundingClientRect().bottom - header.getBoundingClientRect().top;
        return contentBottom <= header.clientHeight - CONTENTS_FIT_SAFETY_PX;
      };

      if (fits(MAX_CONTENTS_FONT_SIZE)) {
        return;
      }

      let low = MIN_CONTENTS_FONT_SIZE;
      let high = MAX_CONTENTS_FONT_SIZE;
      for (let step = 0; step < 8; step += 1) {
        const middle = (low + high) / 2;
        if (fits(middle)) {
          low = middle;
        } else {
          high = middle;
        }
      }

      // Too short a window even at the minimum size: allow scrolling as a last resort.
      if (!fits(low)) {
        header.style.overflowY = "auto";
      }
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(header);
    desktop.addEventListener("change", fit);
    document.fonts.ready.then(fit);

    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", fit);
      reset();
    };
  }, [items]);

  const exactActiveItem =
    isContinuousEssay
      ? items.find((item) => item.targetId === activeTargetId) ?? null
      : items.find(
          (item) =>
            item.slug !== null && pathname === `/sections/${item.slug}`,
        ) ?? null;

  const activeTargetIds = new Set<string>();
  if (exactActiveItem) {
    activeTargetIds.add(exactActiveItem.targetId);

    if (exactActiveItem.parentNumber) {
      const rootParent = items.find(
        (item) =>
          item.sectionNumber === exactActiveItem.parentNumber &&
          !item.parentNumber,
      );
      if (rootParent) {
        activeTargetIds.add(rootParent.targetId);
      }
    }
  }

  useEffect(() => {
    if (!isContinuousEssay) {
      return;
    }

    let animationFrame: number | null = null;

    const measureActiveSection = () => {
      const activationLine = window.innerHeight * 0.5;
      let nextTargetId: string | null = null;
      let lastExistingTargetId: string | null = null;

      for (const item of items) {
        const section = document.getElementById(item.targetId);
        if (!section) {
          continue;
        }

        lastExistingTargetId = item.targetId;
        if (section.getBoundingClientRect().top <= activationLine) {
          nextTargetId = item.targetId;
        }
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 1
      ) {
        nextTargetId = lastExistingTargetId;
      }

      if (nextTargetId) {
        setActiveTargetId((currentTargetId) =>
          currentTargetId === nextTargetId ? currentTargetId : nextTargetId,
        );
      }
    };

    const scheduleMeasurement = () => {
      if (animationFrame !== null) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = null;
        measureActiveSection();
      });
    };

    scheduleMeasurement();
    window.addEventListener("scroll", scheduleMeasurement, { passive: true });
    window.addEventListener("resize", scheduleMeasurement);

    return () => {
      window.removeEventListener("scroll", scheduleMeasurement);
      window.removeEventListener("resize", scheduleMeasurement);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [items, pathname, isContinuousEssay]);

  useEffect(() => {
    if (
      !exactActiveItem ||
      !window.matchMedia("(min-width: 761px)").matches
    ) {
      return;
    }

    const activeLink = linkElements.current.get(exactActiveItem.targetId);
    const siteHeader = activeLink?.closest<HTMLElement>(".site-header");
    const masthead = siteHeader?.querySelector<HTMLElement>(".masthead");
    if (!activeLink || !siteHeader || !masthead) {
      return;
    }

    const linkBounds = activeLink.getBoundingClientRect();
    const headerBounds = siteHeader.getBoundingClientRect();
    const topBoundary = masthead.getBoundingClientRect().bottom + 8;
    const bottomBoundary = headerBounds.bottom - 8;

    if (linkBounds.top < topBoundary) {
      siteHeader.scrollTop += linkBounds.top - topBoundary;
    } else if (linkBounds.bottom > bottomBoundary) {
      siteHeader.scrollTop += linkBounds.bottom - bottomBoundary;
    }
  }, [exactActiveItem]);

  return (
    <nav
      ref={navRef}
      className={`contents${exactActiveItem || pathname === "/version-log" ? " contents--tracking" : ""}`}
      aria-label="Essay sections"
    >
      <ol className="contents__list">
        {items.map((item) => {
          const isExactActive = item.targetId === exactActiveItem?.targetId;
          const isActive = activeTargetIds.has(item.targetId);

          return (
            <li
              key={item.targetId}
              className={item.grouped ? "contents__group" : undefined}
            >
              <Link
                ref={(element) => {
                  if (element) {
                    linkElements.current.set(item.targetId, element);
                  } else {
                    linkElements.current.delete(item.targetId);
                  }
                }}
                className={`contents__link${isActive ? " contents__link--active" : ""}`}
                href={pathname === "/original" ? `/original#${item.targetId}` : item.href}
                aria-current={isExactActive ? "location" : undefined}
                onClick={() => setActiveTargetId(item.targetId)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
