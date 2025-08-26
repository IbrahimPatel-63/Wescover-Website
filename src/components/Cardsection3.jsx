import React from 'react'
import Cards3 from './Cards3'
import item1 from './images2/c3item1.webp'
import item2 from './images2/c3item2.webp'
import item3 from './images2/c3item3.jpeg'
import item4 from './images2/c3item4.webp'
import item5 from './images2/c3item5.webp'
import item6 from './images2/c3item6.webp'
import item7 from './images2/c3item7.webp'
import item8 from './images2/c3item8.webp'
import item9 from './images2/c3item9.webp'
import item10 from './images2/c3item10.webp'
import item11 from './images2/c3item11.webp'
import item12 from './images2/c3item12.jpeg'

function Cardsection3() {
  return (
    <div className='min-h-72  w-full bg-white xl:flex xl:justify-center'>
        <div className=' px-4 py-2 md:px-8 flex overflow-auto gap-5 md:gap-10 xl:px-2 2xl:px-10 xl:w-[88%] '>
            <Cards3  name='Ashley Joseph Martin' title='Sculptural Walnut Chair' price='$1,800' image={item1}/>
            <Cards3  name='Crafted Glory' title='Modern Lamp' price='$1,000' image={item2}/>
            <Cards3  name='Oggetti Designs' title='Stylish Table' price='$2,500' image={item3}/>
            <Cards3  name='Leaf Furniture' title='Comfortable Bench' price='$1,500' image={item4}/>
            <Cards3  name='Ironscustomwood' title='Clear Epoxy Dining Table' price='$1,489' image={item5}/>
            <Cards3  name='Espina' title='Dining Table' price='$3,500' image={item6}/>
            <Cards3  name=' Lannone Design' title='Duotone Bench' price='$1,750' image={item7}/>
            <Cards3  name='Lumber2Love' title='The Dakota Dining Table' price='$3,499' image={item8}/>
            <Cards3   name='Technologies' title='Computer Setup' price='$5,500' image={item9}/>
            <Cards3   name='Glass Works' title='Modern Glass Table' price='$1,900' image={item10}/>
            <Cards3   name='Mo Woodwork' title='TONN Record Player Stand' price='$1,900' image={item11}/>
            <Cards3   name='Mo Woodwork' title='Best Quality Chairs' price='$6,800' image={item12}/>
        </div>
      
    </div>
  )
}

export default Cardsection3
