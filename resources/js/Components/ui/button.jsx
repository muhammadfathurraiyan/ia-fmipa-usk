export const buttonClass = {
  primary:
    "bg-red-500 py-1 px-3 font-medium rounded transition-all text-white hover:bg-red-600",
  secondary:
    "bg-yellow-500 py-1 px-3 font-medium transition-all text-neutral-950 hover:bg-yellow-600",
};

export function Button({ children, variants, disabled, className, ...props }) {
  const variant = buttonClass;
  return (
    <button
      {...props}
      className={`${variant[variants]} ${
        disabled && "opacity-25"
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
