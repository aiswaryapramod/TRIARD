import './App.css';
import Banner from './components/banner/Banner';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div >
      {/* <Header/> */}
      <Navbar/>
      <Banner/>
      <Content/>
      <Slider/>
    </div>
  );
}

export default App;
