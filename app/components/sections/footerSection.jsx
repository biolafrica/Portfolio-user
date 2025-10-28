import FooterColumn from "../common/footerColumn";

const projects = [
  { name:"16bags", url: "https://16bags.com", id: 1 }, 
  { name: "Eatup", url: "https://eatup.ng", id: 2 },
  { name: "See all →", url: "/projects", id: 3 }
];

const companies = [
  { name: "About", url: "/about", id: 1 },
  { name : "Blog", url: "/blog", id: 2}, 
  { name: "Contact us", url: "/contact", id: 3}
];

const socials = [
  { name : "Email", url : "mailto:biolafrica@gmail.com", id: 1 }, 
  { name: "LinkedIn", url : "https://www.linkedin.com/in/abiobaku/", id: 2 }, 
  { name: "GitHub", url: "https://www.github.com/biolafrica", id: 3 }
]

export default function FooterSection() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-white ">

      <div className="max-w-7xl mx-auto px-6 py-5 md:py-10">
        <div className="grid grid-cols-2 border-y border-gray-200 py-20 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 ">
          
          {/* Work, company and Connect Column */}
          <FooterColumn title="Work" items={projects} />
          <FooterColumn title="Company" items={companies} />
          <FooterColumn title="Connect" items={socials} />


          {/* Office Address Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Office Address</h3>
            <address className="not-italic text-sm text-gray-600 leading-relaxed">
              13 Bottom O' Th' Moor, Oldham<br />
              Greater Manchester<br />
              OL1 3HR<br />
              United Kingdom
            </address>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 ">
          <div className="text-sm text-gray-500">
            <h6>Copyright &copy; {year} Abiodun Biobaku</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};




