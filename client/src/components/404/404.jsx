import { Link } from 'react-router-dom';

const FourOhFour = () => {
  return (
    <div>
      <p>Error: 404</p>
      <Link to="/home">Link To Home Page</Link>
    </div>
  );
}

export default FourOhFour;