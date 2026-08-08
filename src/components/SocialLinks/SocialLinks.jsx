import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = ({ theme }) => {
  const socialData = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/devvsakib',
      hoverColor: 'hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-cyan-500/20',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/sakibahmed5',
      hoverColor: 'hover:text-blue-400 hover:border-blue-400/50 hover:shadow-blue-500/20',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://facebook.com/sakibahmed.live',
      hoverColor: 'hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-cyan-500/20',
    },
    {
      name: 'Discord',
      icon: FaDiscord,
      url: 'https://discordapp.com/users/devvsakib',
      hoverColor: 'hover:text-purple-400 hover:border-purple-400/50 hover:shadow-purple-500/20',
    },
  ];

  return (
    <div className="mt-8 mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 w-full md:col-span-2">
      {socialData.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${
                item.hoverColor
              } ${
                theme
                  ? 'bg-slate-100/80 text-slate-800 shadow-sm'
                  : 'bg-white/5 text-gray-200'
              }`}
            >
              <IconComponent className="text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs md:text-sm font-medium tracking-wide">
                {item.name}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;