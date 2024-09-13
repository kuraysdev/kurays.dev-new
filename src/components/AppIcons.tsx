import React from 'react';
import { FiTwitter, FiGithub } from 'react-icons/fi';
import { SiReddit, SiSpotify, SiDiscord, SiTelegram, SiVk, SiGithub } from 'react-icons/si';
import '../styles/components/AppIcons.scss';

interface AppIconProps {
  href: string;
  icon: React.ReactNode;
  tooltip: string;
}

const AppIcon: React.FC<AppIconProps> = ({ href, icon, tooltip }) => (
  <a href={href} className="icon" target="_blank" rel="noopener noreferrer">
    {icon}
    <span className="tooltip">{tooltip}</span>
  </a>
);

const AppIcons: React.FC = () => {
  return (
    <div className="app-icons">
      <AppIcon href="https://vk.com/kurays" icon={<SiVk />} tooltip="ВКонтакте" />
      <AppIcon href="https://t.me/kuraysdev" icon={<SiTelegram />} tooltip="Telegram" />
      <AppIcon href="https://open.spotify.com/user/fx4garsrmd4izhvbg1t8e5qsb" icon={<SiSpotify />} tooltip="Spotify" />
      <AppIcon href="https://discord.com/users/485731951404384258" icon={<SiDiscord />} tooltip="Discord" />
      <AppIcon href="https://github.com/kuraysdev" icon={<SiGithub />} tooltip="GitHub" />
    </div>
  );
};

export default AppIcons;