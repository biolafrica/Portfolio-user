// components/SectionHeader.jsx
export default function SectionHeader({
  heading,
  subheading,
  content,
  align = "center",
}) {
  const alignmentClasses = {
    center: "mx-auto text-center",
    left: "text-left",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-2xl ${alignmentClasses[align]} lg:max-w-3xl`}>
      {heading && (
        <h2 className="text-base/7 font-semibold text-indigo-600">
          {heading}
        </h2>
      )}
      <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
        {subheading}
      </p>
      <p className="mt-6 text-lg/8 text-gray-700">{content}</p>
    </div>
  );
}
