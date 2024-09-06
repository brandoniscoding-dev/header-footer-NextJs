import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaTwitch, FaGithub } from 'react-icons/fa';

interface SocialItem {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
}

const items: SocialItem[] = [
  { name: 'Facebook', Icon: FaFacebook, link: '#' },
  { name: 'Instagram', Icon: FaInstagram, link: '#' },
  { name: 'Twitter', Icon: FaTwitter, link: '#' },
  { name: 'Twitch', Icon: FaTwitch, link: '#' },
  { name: 'Github', Icon: FaGithub, link: '#' }
];

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

export const FooterSocialIcons = () => {
  return (
    <motion.div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          className="hover:text-white cursor-pointer transition-all"
          variants={iconVariants}
          whileHover={{ scale: 1.2, color: '#4A90E2' }}
        >
          <item.Icon />
        </motion.a>
      ))}
    </motion.div>
  );
};
