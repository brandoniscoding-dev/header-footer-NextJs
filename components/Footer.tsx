import { FooterNewsLetter } from "./FooterNewsLetter";
import { FooterSection } from "./FooterSection";
import { FooterSocialIcons } from "./FooterSocialIcons";

const sections = [
  {
    title: 'Solutions',
    items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud']
  },
  {
    title: 'Support',
    items: ['Pricing', 'Documentation', 'Guides', 'API', 'Status']
  },
  {
    title: 'Company',
    items: ['About', 'Blog', 'Guides', 'Jobs', 'Partners']
  },
  {
    title: 'Legal',
    items: ['Claims', 'Pricing', 'Terms', 'Policies', 'Conditions']
  }
];

export const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 gap-4">
        {sections.map((section, index) => (
          <FooterSection key={index} title={section.title} items={section.items} />
        ))}

        <FooterNewsLetter />
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2024 @brandoniscoding, LLC, All rights reserved.</p>
        <FooterSocialIcons />
      </div>
    </footer>
  );
};

