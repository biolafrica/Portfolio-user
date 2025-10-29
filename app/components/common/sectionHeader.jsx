export default function SectionHeader({ heading, subheading, content, align = "center", text="normal"}) {

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

      <p className={`mt-2 text-pretty text-4xl font-semibold 
      tracking-tight ${text=== "normal" ? " text-gray-900" : " text-white"} sm:text-5xl lg:text-balance`}>
        {subheading}
      </p>
      <p className={`text-base sm:text-lg md:text-xl ${text=== "normal" ? "text-gray-600 " : "text-gray-300"} mt-4`}>{content}</p>

    </div>
  );
}
