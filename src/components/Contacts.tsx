import Image from 'next/image';
import { Link } from '@/navigation';
import linkedin from '@/assets/logos/linkedin.png';
import telegram from '@/assets/logos/telegram.png';
import gmail from '@/assets/logos/gmail.png';

export const Contacts = () => {
  return (
    <div className="flex gap-2 p-4 pb-0">
      {contacts.map(({ icon, ariaLabel, link }, index) => (
        <Link key={index} href={link} aria-label={ariaLabel}>
          <div className="rounded-lg border bg-card p-2 text-card-foreground shadow-sm">
            {icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

const contacts = [
  {
    icon: (
      <Image
        src={linkedin.src}
        alt="Linkedin"
        width={96}
        height={96}
        placeholder="blur"
        blurDataURL={linkedin.blurDataURL}
      />
    ),
    ariaLabel: 'Linkedin link',
    link: 'https://www.linkedin.com/in/kevowino/',
  },
  {
    icon: (
      <Image
        src={gmail.src}
        alt="Gmail"
        width={96}
        height={96}
        placeholder="blur"
        blurDataURL={gmail.blurDataURL}
      />
    ),
    ariaLabel: 'Gmail link',
    link: 'mailto:kevowino2016@gmail.com',
  },
  {
    icon: (
      <Image
        src={telegram.src}
        alt="Telegram"
        width={96}
        height={96}
        placeholder="blur"
        blurDataURL={telegram.blurDataURL}
      />
    ),
    ariaLabel: 'Telegram link',
    link: 'https://telegram.me/#',
  },
];
