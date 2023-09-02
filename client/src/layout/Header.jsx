import { Link } from 'react-router-dom';

const Header = () => {

  const redirectClick = (route) => {
    console.log(route)
  };

  return (
    <header className="flex w-full h-16">
      <nav className="flex w-full h-full justify-center text-darkmode-text-imp2 bg-white bg-opacity-[7%]">

        <div className="h-full">
          <ul className="flex space-x-4 h-full items-center mx-8">
            <li>
              <a href="https://github.com/orgs/Quaternion-Visualizer/repositories" target="_blank" className="hover:text-darkmode-text-imp2_hover">Github</a>
            </li>
          </ul>
        </div>

        <div className="h-full ml-auto mr-8">
          <ul className="flex space-x-4 h-full items-center">

            <li>
              <Link to="/home" className="hover:text-darkmode-text-imp2_hover">Home</Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-darkmode-text-imp2_hover">About</Link>
            </li>

            <li>
              <Link to="/register" className="hover:text-darkmode-text-imp2_hover">Register</Link>
            </li>

            <li>
              <Link to="/sign-in" className="hover:text-darkmode-text-imp2_hover">Sign In</Link>
            </li>

          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Header;