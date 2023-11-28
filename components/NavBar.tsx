import React from 'react'
import styles from './NavBar.module.css';
import { ActiveLink } from './ActiveLink';
const menuItems:{text:string, href:string}[] = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
export const NavBar = () => {
  return (
    <div>
        <nav className={styles.menu}>
        {menuItems.map((item=>(
          <ActiveLink key={item.href} text={item.text} href={item.href}/>
        )))}
      </nav>
    </div>
  )
}
