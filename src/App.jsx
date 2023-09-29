import { Outlet } from 'react-router';
import NaveBar from './components/navBar/NaveBar';

function App() {
  return (
    <>
      <NaveBar />
      <>
        <Outlet />
      </>
    </>
  );
}

export default App;
