import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import {
  InstagramIcon,
  TwittterIcon,
  LinkedinIcon,
  EmailIcon,
} from "@/helpers/icons";

const Footer = () => {
  const navigation = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/komuni.id/",
      icon: InstagramIcon,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/komuni_id",
      icon: TwittterIcon,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/komuni/",
      icon: LinkedinIcon,
    },
    {
      name: "Email",
      href: "mailto:hello@komuni.id",
      icon: EmailIcon,
    },
  ];

  return (
    <footer className={styles.container}>
      <div className="mx-auto max-w-7xl py-8 px-10 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-7 md:order-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <ul className="flex justify-center md:justify-start gap-8">
            <li className={styles.link}>
              <Link href="#">Terms and Service</Link>
            </li>
            <li className={styles.link}>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
