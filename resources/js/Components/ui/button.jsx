export const buttonClass = {
  primary:
    "bg-red-500 py-1 px-3 font-medium rounded transition-all text-white hover:bg-red-600",
  secondary:
    "bg-yellow-500 py-1 px-3 font-medium transition-all text-neutral-950 hover:bg-yellow-600",
};

export function Button({ children, variants, disabled }) {
  const variant = buttonClass;
  return (
    <button
      className={`${variant[variants]} ${disabled && "opacity-25"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
