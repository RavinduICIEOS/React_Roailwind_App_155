import { Outlet, /*useNavigation*/ } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
      <Footer /> {/* Add Footer component here */}
    </>
  );
}

export default RootLayout;
