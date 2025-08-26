import React from 'react'
import Cards5 from './Cards5'
import item1 from './images2/c5item1.webp'
import sub1 from './images2/c5sub1.jpg'
import item2 from './images2/c5item2.jpeg'
import sub2 from './images2/c5sub2.jpg'
import item3 from './images2/c5item3.webp'
import sub3 from './images2/c5sub3.jpg'
import item4 from './images2/c5item4.webp'
import sub4 from './images2/c5sub4.jpg'
import item5 from './images2/c5item5.webp'
import sub5 from './images2/c5sub5.jpg'
import item6 from './images2/c5item6.webp'
import sub6 from './images2/c5sub6.jpg'

function Cardsection5() {
  return (
    <div className='min-h-90 w-full bg-[#F8F8F8] px-4 py-4 flex flex-col gap-5 md:flex md:flex-wrap md:gap-2.5 md:flex-row md:justify-around 2xl:justify-center 2xl:gap-12'>
        <Cards5 title='busa designs' name='Fort Lauderdale, fl' btn1='pillows' btn2='rugs' btn3='tableware' image={item1} sub={sub1}/>
        <Cards5 title='damla' name='busra, turkey' btn1='wall hangings' btn2='art' btn3='shop' image={item2} sub={sub2}/>
       <Cards5 title='element hand' name='durango co' btn1='art' btn2='hardware' btn3='storage' image={item3} sub={sub3}/>
       <Cards5 title='elizabeth prince' name='manchester, united kingdom' btn1='wall hangings' btn2='sculptures' btn3='art' image={item4} sub={sub4}/>
       <Cards5 title='erik linton' name='hyrum, ut' btn1='prints' btn2='paintings' btn3='art' image={item5} sub={sub5}/>
       <Cards5 title='lale studio ' name='poland' btn1='wall hangings' btn2='decorate' btn3='art' image={item6} sub={sub6}/>
      
      

    </div>
  )
}

export default Cardsection5
