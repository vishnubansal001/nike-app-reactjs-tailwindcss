import React from 'react';
import { StarIcon,ShoppingBagIcon} from '@heroicons/react/24/solid';

const Item = ({id,color,shadow,title,text,img,btn,rating,price}) => {
  return (
    <>
      <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
        <div className='grid items-center justify-items-center'>
          <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
          <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>{text}</p>
          <div className='flex items-center justify-between w-28 my-2'>
            <div className='flex items-center bg-white/80 px-1 rounded'><h1 className='text-black text-sm font-medium'>${price}</h1></div>
            <div className='flex items-center gap-1'><StarIcon className='icon-style w-5 h-5 md:w-4 md:h-4'/> <h1 className='md:text-sm font-normal text-slate-100'>{rating}</h1></div>
          </div>
          <div className='flex items-center gap-3'>
            <button type='button' className='bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200'><ShoppingBagIcon className='icon-style text-slate-900'/></button>
            <button type='button' className='bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black '>{btn}</button>
          </div>
        </div>
        <div className='flex items-center'>
          <img src={img} alt='img/item-img' className='h-36 w-64 transitions-theme hover:-rotate-12'/>
        </div>
      </div>
    </>
  )
}
 
export default Item
