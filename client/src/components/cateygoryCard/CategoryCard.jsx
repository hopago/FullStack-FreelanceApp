import './categorycard.scss';
import { Link } from 'react-router-dom';


const CategoryCard = ({ item }) => {
  return (
    <Link to="/gigs?category=design" className="link">
      <div className="categorycard">
        <img src={item.img} alt="" />
        <span className='desc'>{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}

export default CategoryCard
