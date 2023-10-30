
import './App.css';
import Header from './Components/Header/Header';
import Holiday from './Components/Holidays/Holiday';
import Posts from './Components/Posts/Posts';
import Prepare from './Components/Prepare/Prepare';
import Result from './Components/Results/Result';
import SectionExplore from './Components/SectionExplore/SectionExplore';
import Stays from './Components/Stays/Stays';
import Trip from './Components/Trip/Trip';

function App() {
  return (
    <>
      <Header />
      <SectionExplore />
      <Result />
      <Prepare />
      <Trip />
      <Holiday />
      <Stays/>
    <Posts/>
    </>
  );
}

export default App;
