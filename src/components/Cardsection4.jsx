import React from 'react'
import Cards4 from './Cards4'
import flag1 from './images2/flag1.png'
import item1 from './images2/c4item1.webp'
import item2 from './images2/c4item2.webp'
import item3 from './images2/c4item3.webp'
import item4 from './images2/c4item4.webp'
import item5 from './images2/c4item5.webp'
import item6 from './images2/c4item6.webp'
import item7 from './images2/c4item7.webp'
import item8 from './images2/c4item8.webp'
import item9 from './images2/c4item9.webp'
import item10 from './images2/c4item10.webp'
import item11 from './images2/c4item11.webp'
import item12 from './images2/c4item12.webp'

function Cardsection4() {
  return (
    <div className='min-h-75 w-full bg-white xl:flex xl:justify-center'>
        <div className='px-4 py-4 md:px-8 xl:px-5 flex gap-4 md:gap-9 lg:gap-11  overflow-auto  xl:w-[88%]'>
            <Cards4 name='Lea Munsch' title='DANI - pendant light' price='$500' image={item1} image2={flag1}/>
            <Cards4 name='SEED Design USA' title='Olo Wall Sconce' price='$306' image={item2} image2={flag1}/>
            <Cards4 name='Yole Design Studio' title='Lampa 20/PLA' price='$144' image={item3} image2={flag1}/>
            <Cards4 name='Home Blitz' title='Orion Round Lamp' price='$260' image={item4} image2={flag1}/>
            <Cards4 name='Light and Fiber' title='Tribe black and white' price='$199' image={item5} image2={flag1}/>
            <Cards4 name='Illuminata Art Glass' title='Elettra Pendent' price='$950' image={item6} image2={flag1}/>
            <Cards4 name='WeraJane Design' title='Louis' price='$850' image={item7} image2={flag1}/>
            <Cards4 name='Marie Burgos' title='Flash Yours Lamps' price='$4,290' image={item8} image2={flag1}/>
            <Cards4 name='ANEKOdesign' title='Nils 200' price='$126' image={item9} image2={flag1}/>
            <Cards4 name='Hastshilp' title='Retro Rattan Pendent' price='$385' image={item10} image2={flag1}/>
            <Cards4 name='Magdyss Boutique' title='Raffia Bohemian' price='$329' image={item11} image2={flag1}/>
            <Cards4 name='Helene Fleury' title='flower like white porcelain' price='$445' image={item12} image2={flag1}/>
        </div>
      
    </div>
  )
}

export default Cardsection4
