import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <div className="container py-6 flex items-center justify-between">
          <div className='font-default text-2xl'>LOGO <strong>HERE</strong></div>
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-4'>
              <li className='font-bold hover:underline'>
                <a href="#">Home</a>
              </li>
              <li className='hover:underline'>
                <a href="#">About us</a>
              </li>
              <li className='hover:underline'>
                <a href="#">Gallery</a>
              </li>
              <li className='hover:underline'>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section
          id='hero'
          className='bg-[url(/bg.jpeg)] relative bg-cover bg-center min-h-[calc(100vh-80px)] text-white flex items-center justify-center text-center'
        >
          <div className='absolute inset-0 z-0 bg-gray-800/40'></div>
          <div className='relative container z-10 '>
            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase mb-4'>Movie Explorer</h1>
            <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8'>This is a sample website to practice programming with different tools</h2>
            <a href="#" className='button'>Call To Action</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home