import React from 'react';
import { Facebook, Instagram, Twitter, Twitch, Github } from 'lucide-react'; // Remplacez avec les icônes correctes

interface SocialItem {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
}

const items: SocialItem[] = [
  {
    name: 'Facebook',
    Icon: Facebook,
    link: '#'
  },
  {
    name: 'Instagram',
    Icon: Instagram,
    link: '#'
  },
  {
    name: 'Twitter',
    Icon: Twitter,
    link: '#'
  },
  {
    name: 'Twitch',
    Icon: Twitch,
    link: '#'
  },
  {
    name: 'Github',
    Icon: Github,
    link: '#'
  }
];

export const FooterSocialIcons: React.FC = () => {
  return (
    <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
      {items.map((item, index) => (
        <a key={index} href={item.link} className="hover:text-white cursor-pointer">
          <item.Icon />
        </a>
      ))}
    </div>
  );
};

