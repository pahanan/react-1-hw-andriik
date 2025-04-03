"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

const socials = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "/socialmedia/linkedin.png",
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/",
    icon: "/socialmedia/facebook.png",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/",
    icon: "/socialmedia/instagram.png",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/",
    icon: "/socialmedia/tiktok.png",
  },
  {
    title: "Google",
    url: "https://www.google.com/",
    icon: "/socialmedia/google.png",
  },
];

const SocialMediaItem = ({ url, title, icon }) => (
  <li>
    <a
      href={url}
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
        gap: '10px' 
      }}
    >
      <img src={icon} alt={`${title} icon`} style={{ width: '20px', height: '20px' }} />
      {title}
    </a>
  </li>
);

export const Footer = () => {
  const path = usePathname().split('?')[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 DONE*/}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li><Link href="/about_us">About us</Link></li>
          <li><Link href="/destination">Destination</Link></li>
          <li><Link href="/nasa_collaboration">Nasa collaboration</Link></li>
        </ul>
      </div>

      {/* TASK - React 1 week 1 * DONE/}
      {/* Add a new list item for LINKEDIN */}
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socials.map((social) => (
            <li key={social.url}>
              <SocialMediaItem {...social} />
            </li>
          ))}
          {/* TASK - React 1 week 2 DONE*/}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* it should accept the following props */}
          {/* url, title, icon */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}
        </ul>
      </div>
    </footer>
  );
}
