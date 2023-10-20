
import './App.css';
import Header from './Components/Header/Header';
import Prepare from './Components/Prepare/Prepare';
import Result from './Components/Results/Result';
import SectionExplore from './Components/SectionExplore/SectionExplore';
import Trip from './Components/Trip/Trip';

function App() {
  return (
    <>
      <Header />
      <SectionExplore />
      <Result />
      <Prepare />
      <Trip/>
    
    </>
  );
}

export default App;
