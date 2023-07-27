import React from 'react'
import Banner from './banner/Banner';
import Content from './content/Content';
import ContactUs from './contactus/ContactUs';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Content/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Home