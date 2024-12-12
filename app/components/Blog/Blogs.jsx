'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './blogs.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import Link from 'next/link';

export default function Blogs({ image, path, desc, title, date }) {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="p-2 rounded-sm"
      style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.173)' }}
    >
      <div className="relative overflow-hidden rounded-t-sm h-[200px] w-full flex items-center justify-center">
        <Image
          src={image}
          alt="hello"
          className="h-auto w-full hover:h-[238px]"
        />
      </div>
      <div className="p-2 pb-2 relative">
        <div className="absolute right-3 z-10 -top-9 bg-green-200 px-2">
          {date}
          <div
            className={`${styles.arrow} absolute right-20  -bottom-1 bg-green-200 z-10`}
          ></div>
        </div>
        <h1 className=" font-semibold">{title}</h1>
        <p className="line-clamp-3 mb-3">{desc} </p>
        <div className="flex justify-between items-center">
          <Link
            href={{ pathname: path, query: { image, desc, title, date } }}
            className="bg-green-200 px-5 py-1"
          >
            Read Post
          </Link>

          <div className="flex gap-1 items-center">
            <p className="text-gray-500 p-2 bg-green-200 rounded-sm hover:text-sm hover:text-green-900 hover:bg-green-200">
              <SlSocialFacebook />
            </p>
            <p className="text-gray-500 p-2 bg-green-200 rounded-sm hover:text-sm hover:text-green-900 hover:bg-green-200">
              <FaXTwitter />
            </p>
            <p className="text-gray-500 p-2 bg-green-200 rounded-sm hover:text-sm hover:text-green-900 hover:bg-green-200">
              <FaInstagram />
            </p>
            <p className="text-gray-500 p-2 bg-green-200 rounded-sm hover:text-sm hover:text-green-900 hover:bg-green-200">
              <BiLogoLinkedinSquare />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}