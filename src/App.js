
import './App.css';
import Header from './Components/Header/Header';
import Holiday from './Components/Holidays/Holiday';
import Images from './Components/Images/Images';
import Posts from './Components/Posts/Posts';
import Prepare from './Components/Prepare/Prepare';
import ProductDetails from './Components/ProuductDetails/ProductDetails';
import Result from './Components/Results/Result';
import SectionExplore from './Components/SectionExplore/SectionExplore';
import Stays from './Components/Stays/Stays';
import Trip from './Components/Trip/Trip';
//import { Counter } from './features/counter/counter';

//import { Counter } from './features/counter/Counter.js';

function App() {
  return (
    <>
      {/*<Counter/>*/}
      <Header />
      <SectionExplore />
      <Result />
      <Prepare />
      <Trip />
      <Holiday />
      <Stays/>
      <Posts />
      <Images />
      <ProductDetails/>
    </>
  );
}

export default App;
