"use client"

import React from 'react';
// import { Link } from 'react-router-dom';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './navigation.module.css';

function isActiveLink(href: string, pathname: string): boolean {
  return pathname === href || pathname.startsWith(href + '/');
}

export default function Navigation() {

  const pathname = usePathname();

  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/" className={isActiveLink("/", pathname) ? styles.active : ''}><span>Home</span></Link>
          </li>
          <li>
            <Link href="/about" className={isActiveLink("/about", pathname) ? styles.active : ''}><span>About</span></Link>
          </li>
          <li>
            <Link href="/projects/first-project" className={isActiveLink("/projects/first-project", pathname) ? styles.active : ''}><span>Projects</span></Link>
          </li>
          <li>
            <Link href="/contact" className={isActiveLink("/contact", pathname) ? styles.active : ''}><span>Contact</span></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

