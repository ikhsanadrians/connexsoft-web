import React from 'react';
import Image from 'next/image';
import HeroImg from '../../public/images/hero.jpg';


export default function hero() {
  return (
    <div className='relative -z-50 -mt-24 h-[700px] shadow-slate-600/50 shadow-2xl w-full'>
        <Image src={HeroImg} alt="hero" className='hero -z-10 w-full h-full absolute'>
        </Image>
        <div className="jumbotron-text flex flex-col gap-2 justify-center items-center h-full px-6">
            <h1 className="z-10 text-white md:text-5xl sm:text-4xl text-3xl lg:text-5xl font-[Mona] text-center">Welcome to Connexsoft</h1>
            <p className="text-white md:w-1/2 w-full lg:w-1/2 text-center opacity-60">Step into the world of innovation and exploration with our exceptional class at 10 Vocational High School Jakarta, specializing in ConnexSoft Software Engineering. Get ready to embark on a transformative journey that will shape your future in the tech world.</p>
        </div>
    </div>
  )
}
