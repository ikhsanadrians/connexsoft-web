import React from 'react';
import Image from 'next/image';
import HeroImg from '../../public/images/hero.jpg';


export default function hero() {
  return (
    <div className='relative -z-50 -mt-24 h-[700px] shadow-slate-600/50 shadow-2xl'>
        <Image src={HeroImg} alt="hero" className='hero -z-10 w-full h-full absolute'>
        </Image>
        <div className="jumbotron-text flex flex-col gap-2 justify-center items-center h-full">
            <h1 className="z-10 text-white text-5xl font-[Mona]">Welcome to Connexsoft</h1>
            <p className="text-white w-1/2 text-center opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem similique minus molestias perspiciatis vero obcaecati aliquam fuga unde. Corporis animi sequi reprehenderit possimus minima neque.</p>
        </div>
    </div>
  )
}
