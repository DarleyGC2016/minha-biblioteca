import { Outlet } from 'react-router';
import NaveBar from './components/navBar/NaveBar';

function App() {
  return (
    <div data-testid="app">
      <NaveBar />
      <>
        <Outlet />
      </>
    </div>
  );
}

export default App;
