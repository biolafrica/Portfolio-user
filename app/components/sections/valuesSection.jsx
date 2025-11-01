import {ChatBubbleLeftRightIcon, CodeBracketSquareIcon, RocketLaunchIcon, ShieldCheckIcon, UserGroupIcon  } from '@heroicons/react/24/solid'
import SectionHeader from '../common/sectionHeader';

export default function ValuesSection() {

  const values = [
    {
      id: 1,
      icon: CodeBracketSquareIcon,
      title: 'Understanding First, Coding Second',
      description: "Before I write a single line of code, I make sure I understand your business, your users, and the problem you're trying to solve."
    },
    {
      id: 2,
      icon:RocketLaunchIcon,
      title: 'Build Fast, Iterate Smart.',
      description: "I believe in shipping working software quickly, then improving based on real feedback. You'll see progress early and often."
    },
    {
      id: 3,
      icon:ChatBubbleLeftRightIcon,
      title: 'Clear Communication, Always.',
      description: "You'll get regular updates on progress, honest assessments of timelines, and straight answers about what's possible."
    },
    {
      id: 4,
      icon:ShieldCheckIcon,
      title: 'Built to Last',
      description: "I write clean, documented code that's easy to maintain and scale. Your application will be ready for future growth and changes."
    },
    {
      id: 5,
      icon: UserGroupIcon,
      title: 'Your Success Is My Success.',
      description: "I care about whether your application actually solves the problem it's meant to solve. Your success is my success."
    },
  ];

  return(
    <section className="w-full bg-white px-6 py-16 sm:py-20 lg:py-52 lg:px-8">

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subheading="How I Work"
          content="My approach to building software that businesses can rely on."
          align='left'
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-x-12 lg:gap-y-12 mt-12 sm:mt-16">
          {values.map((value) => (
            <div key={value.id} className="flex gap-4">
              <div>
               <value.icon aria-hidden="true" className="size-6 text-indigo-600" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}