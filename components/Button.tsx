type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary:
      "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
