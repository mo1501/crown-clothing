
import { Outlet } from 'react-router-dom';


import Directory from '../../../src/components/directory/directory.component';

function Home() {
  
  return (
    <div>
    <Outlet/>
    <Directory />
    </div>
  );
}

export default Home;
