import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      Home
      <Link to="/text">Go to text
      </Link>
    </div>
  )
}