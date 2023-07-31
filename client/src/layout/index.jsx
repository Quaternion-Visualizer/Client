import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;