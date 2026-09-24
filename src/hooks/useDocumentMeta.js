import { useEffect } from "react";

const SITE_NAME = "drfab";

/**
 * Sets document.title and the meta description tag for the current page.
 * Restores the previous values on unmount so route changes don't leak state.
 */
export default function useDocumentMeta({ title, description }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    let meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta?.getAttribute("content") ?? null;

    if (description) {
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    return () => {
      document.title = prevTitle;
      if (meta && prevDescription !== null) {
        meta.setAttribute("content", prevDescription);
      }
    };
  }, [title, description]);
}
