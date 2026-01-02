import React from "react";

const Card = ({
  children,
  className = "",
  title,
  description,
  footer,
  imageUrl,
  imageAlt = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden ${className}`}
    >
      {/* Image Section */}
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden bg-slate-100">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6">
        {(title || description) && (
          <div className="mb-4">
            {title && (
              <h2 className="text-2xl text-center font-semibold">{title}</h2>
            )}
            {description && (
              <p className="text-sm text-center mt-1">{description}</p>
            )}
          </div>
        )}

        {/* Content */}
        <div>{children}</div>

        {/* Footer */}
        {footer && (
          <div className="mt-6 pt-4 border-t border-slate-200">{footer}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
