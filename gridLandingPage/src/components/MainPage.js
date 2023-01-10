import React from 'react'
import HeroPage from './HeroPage'

const MainPage = () => {
  return (
    <React.Fragment>
    <section>
      <div className="w-full h-screen bg-white md:w-2/3 md:mx-auto">
        <HeroPage/>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage