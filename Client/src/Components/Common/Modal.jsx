import React, { useEffect } from "react";

const Modal = ({ isOpen, title, children, footer, size = "md" }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className={`relative w-full mx-4 bg-white rounded-xl shadow-xl ${sizeClasses[size]}`}
      >
        {/* Header */}
        {title && (
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-lg text-center font-semibold text-slate-800">
              {title}
            </h2>
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4 text-slate-700">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-slate-200 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
