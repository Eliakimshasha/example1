import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header/Header';
import { FaWhatsapp } from 'react-icons/fa6';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div
          className="fixed left-3 rounded-full bottom-14 w-15 h-15 bg-green-600 flex justify-center items-center z-[998]"
          style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
        >
          <FaWhatsapp className="text-white" size={50} />
        </div>
        <Header />

        {children}
      </body>
    </html>
  );
}
