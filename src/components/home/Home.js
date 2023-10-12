import React ,{useEffect} from 'react'
import Banner from './banner/Banner';
import Content from './content/Content';
import ContactUs from './contactus/ContactUs';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useParams } from 'react-router';

function Home() {

  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0
    });
}, [ slug ]);



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