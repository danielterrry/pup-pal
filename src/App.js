import './App.scss';
import './type.scss';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
