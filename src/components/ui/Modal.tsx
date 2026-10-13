import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  labelledBy: string;
  children: React.ReactNode;
  maxWidth?: string;
}

/**
 * Shared dialog shell: dimmed backdrop, bottom sheet on phones, centred card
 * on larger screens. Focus moves into the dialog on open and returns after.
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  labelledBy,
  children,
  maxWidth = "sm:max-w-xl",
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    return () => previous?.focus?.();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade-in items-end justify-center overflow-y-auto bg-ink/70 backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`relative max-h-[94dvh] w-full animate-sheet-in overflow-y-auto rounded-t-3xl bg-white p-5 text-slate-900 shadow-2xl outline-none sm:my-8 sm:max-h-[90vh] sm:rounded-3xl sm:p-8 ${maxWidth}`}
      >
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-slate-200 sm:hidden" aria-hidden="true" />

        <button
          type="button"
          onClick={onClose}
          className="absolute start-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-2xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 sm:start-4 sm:top-4"
          aria-label="إغلاق"
        >
          <X className="h-5 w-5" />
        </button>

        {children}
      </div>
    </div>
  );
};
