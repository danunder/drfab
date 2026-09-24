import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps the browser's scroll position across navigations, so reset it on route change
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const targetId = hash.slice(1);
    const scrollToTarget = (behavior) => {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior, block: "start" });
    };

    scrollToTarget("smooth");

    // On a fresh page (navigating from another route), images above the target
    // are still loading and shift the layout, so the initial scroll lands short.
    // Re-correct as each of those images finishes loading.
    const pendingImages = Array.from(document.images).filter(
      (img) => !img.complete,
    );

    const handleImageLoad = () => scrollToTarget("auto");
    pendingImages.forEach((img) =>
      img.addEventListener("load", handleImageLoad),
    );

    return () => {
      pendingImages.forEach((img) =>
        img.removeEventListener("load", handleImageLoad),
      );
    };
  }, [pathname, hash]);

  return null;
}
