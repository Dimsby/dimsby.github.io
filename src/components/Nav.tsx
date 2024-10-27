'use client'

import Link from "next/link";
import navLinks from "@/data/navLinks";

import styles from "../styles/nav.module.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => setIsOpen(false), [usePathname()]);

  return (
    <div className={styles.nav + ` ${isOpen ? styles.nav_active : ''}`}>
      <button className={styles.nav__burger} onClick={handleClick}>☰</button>
      <ul role="list">
        {navLinks.map((link) => {
          return (
            <li key={link.href}>
              <Link key={link.href} href={link.href}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
