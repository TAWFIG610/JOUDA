import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";

interface ModalProps {
  onClose: () => void;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Fixed action area under the scrolling body. */
  footer?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Dialog shell (render it only while open): bottom sheet on phones,
 * centred on larger screens.
 * Only the body scrolls, so the rounded corners never show a scrollbar
 * and the dialog always fits the screen.
 */
export const Modal: React.FC<ModalProps> = ({ onClose, title, subtitle, footer, children }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    document.body.classList.add("scroll-locked");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("scroll-locked");
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade-in items-end justify-center bg-ink/55 sm:items-center sm:p-4"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className="flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-xl bg-white outline-none sm:max-h-[min(680px,88vh)] sm:rounded-xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-line px-5 pb-3 pt-5">
          <div>
            <h2 id="dialog-title" className="text-lg">
              {title}
            </h2>
            {subtitle && <p className="mt-0.5 text-sm text-muted">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={lang === "ar" ? "إغلاق" : "Close"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-muted hover:bg-tint"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-5 [scrollbar-width:thin]">{children}</div>
        {footer && <div className="border-t border-line px-5 pb-5 pt-3">{footer}</div>}
      </div>
    </div>
  );
};
