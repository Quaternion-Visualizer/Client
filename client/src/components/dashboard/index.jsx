import { useParams } from 'react-router-dom';

const Dashboard = () => {
  let { uid } = useParams();

  return (
    <div>
      <p>UID: {uid}</p>
    </div>
  );
};

export default Dashboard;