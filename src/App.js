import './App.scss';
import './type.scss';
import Navigation from './components/Navigation';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <Navigation />
      <div className='container'>
        <Banner />
      </div>
    </>
  );
}

export default App;
