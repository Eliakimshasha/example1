'use client';
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { CiLocationOn } from 'react-icons/ci';
import { SiWhatsapp } from 'react-icons/si';

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scrolling
  const handleShowMenu = () => {
    setTimeout(() => {
      setShowMenu(false);
    }, 300);
  };

  const pathLinks = [
    {
      id: 1,
      name: 'Home',
      path: '/Screens/Home',
    },
    {
      id: 2,
      name: 'About',
      path: '/Screens/About',
    },
    {
      id: 3,
      name: 'Services',
      path: '/Screens/Services',
    },
    {
      id: 4,
      name: 'Profile',
      path: '/Screens/Profile',
    },
    {
      id: 5,
      name: 'Gallery',
      path: '/Screens/Gallery',
    },
    {
      id: 6,
      name: 'Blogs',
      path: '/Screens/Blogs',
    },
    {
      id: 7,
      name: 'Contact',
      path: '/Screens/Contact',
    },
  ];

  // useEffect to listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Trigger after scrolling 100px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-[100vw]">
      <div   className={`fixed top-0 lg:pt-5 left-0 w-[100%] z-50 ${isScrolled ? 'bg-white lg:py-2 shadow-md' : ''}`} id={styles.h}>
        <div
          id={styles.head}
          className="items-center flex flex-row justify-between lg:hidden md:hidden"
          style={{ backgroundColor: showMenu ? 'white' : 'transparent' }}
        >
          <div className="flex items-center relative overflow-hidden h-[50px] w-[150px]">
            <Image src={logo} alt="logo" className="w-[130px] h-[130px]" />
          </div>
          <div className="lg:py-0 py-4 flex justify-between lg:justify-end px-3 items-center">
            {!showMenu ? (
              <div
                className="flex items-center lg:hidden px-4 gap-2 py-1 justify-between rounded-sm"
                onClick={() => setShowMenu(true)}
                style={{border: isScrolled ? '1px solid green' : !showMenu && '1px solid white'}}
              >
                
                <p className={`${isScrolled ? 'text-green-900' : 'text-white'}`}>MENU</p>
                <FaBars className={`${isScrolled ? 'text-green-900' : 'text-white'}`} />
              </div>
            ) : (
              <div
                className="flex items-center lg:hidden px-4 gap-2 justify-between rounded-sm"
                onClick={() => setShowMenu(false)}
                style={{ border: showMenu && '1px solid green' }}
              >
                <p className="text-green-900">MENU</p>
                <IoIosClose color="green" size={30} />
              </div>
            )}
          </div>
        </div>

        <div
          id={`${styles.header}`}
          style={{ top: showMenu ? '60px' : '-820px', transition: '.7s' }}
          onClick={handleShowMenu}
          className="flex lg:items-center lg:gap-9 lg:px-7 "
        >
          <div className="w-[200px] h-[5vh] lg:flex justify-center items-center hidden">
            <Image src={logo} alt="logo" className="w-full h-auto" />
          </div>
          <div
            id={styles.layout}
            className="text-green-900 lg:text-white bg-white lg:bg-transparent h-[53vh] lg:h-auto flex flex-col justify-center items-center flex-1 lg:justify-end lg:flex-row lg:gap-5 lg:px-10 lg:py-3"
          >
            {pathLinks.map((path) => (
              <div
                key={path.id}
                className={`${
                  pathname === path.path ? styles.active : styles.link
                } rounded-sm`}
              >
                <Link href={path.path}>{path.name}</Link>
              </div>
            ))}
          </div>
          <div className="lg:flex lg:items-center lg:gap-2 hidden">
            <p className="bg-white p-3 rounded-full flex justify-center items-center cursor-pointer">
              <CiLocationOn className="text-green-950 font-bold" />
            </p>
            <div
              className="flex items-center gap-2 px-5 py-2 rounded-full"
              style={{ border: '2px solid white' }}
            >
              <SiWhatsapp color="white" />
              <p className="text-white">Whatsapp now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
