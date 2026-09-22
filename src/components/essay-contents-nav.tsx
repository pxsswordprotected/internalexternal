"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const [activeTargetId, setActiveTargetId] = useState("introduction");
  const linkElements = useRef(new Map<string, HTMLAnchorElement>());

  const exactActiveItem =
    pathname === "/"
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
    if (pathname !== "/") {
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
  }, [items, pathname]);

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
      className={`contents${exactActiveItem ? " contents--tracking" : ""}`}
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
                href={item.href}
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
