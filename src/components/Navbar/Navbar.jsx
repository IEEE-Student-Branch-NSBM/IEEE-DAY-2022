import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import PreLoader from "../Loader/PreLoader";
import useSWR from "swr";
import Image from "next/image";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#783903");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/getNavbarData", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div>
        <PreLoader />
      </div>
    );

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed w-full z-10 ease-in duration-300 drop-shadow-2xl"
    >
      <div
        style={{ color: `${textColor}` }}
        className="max-w-[1240px] m-auto flex justify-between items-center p-2 text-white"
      >
        <Link href="/">
          <Image
            src={data.image}
            width={262.2}
            height={38}
            alt={data.title}
            loading="lazy"
          />
        </Link>

        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">HOME</Link>
          </li>
          <li className="p-4">
            <Link href="/#about">ABOUT</Link>
          </li>
          {/* <li className="p-4">
            <Link href="/#speaker">SPEAKERS</Link>
          </li> */}
          <li className="p-4">
            <Link href="/#track">SESSIONS</Link>
          </li>
          <li className="p-4">
            <Link href="/#faq">FAQ</Link>
          </li>
        </ul>

        {/* Mobile */}
        <div onClick={handleNav} className="block sm:hidden z-10 text-white">
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-white bg-brown-10 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-brown-10 text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/#about">ABOUT</Link>
            </li>
            {/* <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/#speaker">SPEAKERS</Link>
            </li> */}
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/#track">SESSIONS</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500"
            >
              <Link href="/#faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
