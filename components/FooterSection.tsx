import React from 'react';

interface FooterSectionProps {
  title: string;
  items: string[];
}

export const FooterSection = ({ title, items } : FooterSectionProps) => {
  return (
    <div>
      <h6 className="font-bold uppercase pt-2">{title}</h6>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="py-1 text-gray-500 hover:text-white cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

