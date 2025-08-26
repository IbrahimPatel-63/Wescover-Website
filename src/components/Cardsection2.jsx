import React from 'react'
import Cards2 from './Cards2'
import item1 from './images2/c2item1.webp'
import item2 from './images2/c2item2.webp'
import item3 from './images2/c2item3.webp'
import item4 from './images2/c2item4.webp'
import item5 from './images2/c2item5.webp'
import item6 from './images2/c2item6.jpeg'

function Cardsection2() {
  return (
    <div className='min-h-125 md:min-h-100 2xl:h-160 w-full bg-white px-1 lg:px-2 flex justify-center  flex-wrap gap-4 '>
        <Cards2 title='Furniture' image={item1} />
        <Cards2 title='Lighting' image={item2} />
        <Cards2 title='Art' image={item3} />
        <Cards2 title='Decor' image={item4} />
        <Cards2 title='Tableware' image={item5} />
        <Cards2 title='Outdoor' image={item6} />
      
    </div>
  )
}

export default Cardsection2
