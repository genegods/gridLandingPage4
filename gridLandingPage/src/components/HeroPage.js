import React from 'react'
import ImgSection from '../heroFiles/ImgSection'
import SideTitle from '../heroFiles/SideTitle'
import TitleColumn from '../heroFiles/TitleColumn'

const HeroPage = () => {
  return (
    <React.Fragment>
    <section>
      <div className="md:grid md:grid-cols-4">
        <div className="col-span-3 md:order-2 md:grid md:grid-rows-3">
           <div className="md:row-span-1"> <TitleColumn/></div>
           <div className="h-full mt-8 md:row-span-2 "> <ImgSection/></div>
        </div>
        
        <div className="col-span-1 md:order-1"> <SideTitle/></div>
       
       
      </div>
    </section>
  </React.Fragment>
  )
}

export default HeroPage