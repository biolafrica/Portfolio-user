export default function CallToActionButton({
  label = "Click Me",
  href = "#",
  onClick,
  variant = "primary",
  icon: Icon,
  color = "indigo", 
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-3.5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors";

  const variants = {
    primary: `bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600`,
    secondary: `bg-gray-900 text-white shadow-sm hover:bg-gray-700 focus-visible:outline-gray-900`,
    outline: `border border-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:outline-indigo-600`,
    text: `bg-transparent px-0 py-0 focus-visible:outline-none`, // color handled separately
  };

  // Custom color styles for text buttons
  const textColors = {
    indigo: "text-indigo-600 hover:text-indigo-500",
    black: "text-gray-900 hover:text-gray-700",
    gray: "text-gray-600 hover:text-gray-800",
    white: "text-white hover:opacity-80",
  };

  const variantStyles =
    variant === "text"
      ? `${variants.text} ${textColors[color] || textColors.indigo}`
      : variants[variant];

  const combined = `${baseStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {label}
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={combined}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} className={combined}>
      {content}
    </a>
  );
}

