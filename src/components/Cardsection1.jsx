import React from 'react'
import Cards1 from './Cards1'
import flowers from './images2/flowers.webp'
import plates2 from './images2/plates2.webp'
import chair2 from './images2/chair2.webp'
import tablelamp from './images2/tablelamp.webp'

function Cardsection1() {
  return (
    <div className='min-h-120 lg:min-h-90 xl:min-h-100 2xl:min-h-120 w-full bg-white flex items-center lg:items-start justify-around xl:justify-center xl:gap-8 flex-wrap py-5  '>
      <Cards1 text='Unique Dimensional Art'  image={flowers}/>
      <Cards1 text='Handmade Michelin Star ' image={plates2}/>
      <Cards1 text='Unique Accent Chairs' image={chair2} />
      <Cards1 text='Organic Modern Lighting' image={tablelamp}/>

         
      
    </div>
  )
}

export default Cardsection1
