import React, {useState, useEffect} from 'react'
// import Link from 'next/link'
import { Link } from 'react-scroll';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import PreLoader from "../Loader/PreLoader";
import useSWR from "swr";
import Image from "next/image";

function Navbar() {

  
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#DFBB9D');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    }
    window.addEventListener('scroll', changeColor);
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
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div style={{color: `${textColor}`}} className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Image 
              src={data.image}
              width= {276}
              height= {40}
              alt={data.title}
              loading = "lazy" />
        
        <ul className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>HOME</Link>
          </li>
          <li className='p-4'>
            <Link href='/AboutSection'>ABOUT</Link>
          </li>
          <li className='p-4'>
            <Link href='/SpeakerSection'>SPEAKERS</Link>
          </li>
          <li className='p-4'>
            <Link href='/'>TIMELINE</Link>
          </li>
          <li className='p-4'>
            <Link href='/'>FQA</Link>
          </li>
        </ul>

        {/* Mobile */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
        </div>
        <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
          <ul>
          <li className='p-4 text-3xl hover:text-gray-500'>
            <Link href='/'>HOME</Link>
          </li>
          <li className='p-4 text-3xl hover:text-gray-500'>
            <Link href='/'>ABOUT</Link>
          </li>
          <li className='p-4 text-3xl hover:text-gray-500'>
            <Link href='/'>SPEAKERS</Link>
          </li>
          <li className='p-4 text-3xl hover:text-gray-500'>
            <Link href='/'>TIMELINE</Link>
          </li>
          <li className='p-4 text-3xl hover:text-gray-500'>
            <Link href='/'>FQA</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}


export default Navbar
