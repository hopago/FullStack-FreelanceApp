import { useQuery } from '@tanstack/react-query';
import './gigcard.scss';
import { Link } from 'react-router-dom';
import { authReq } from '../../requestMethod';


const GigCard = ({ item }) => {

  const { isLoading , error ,data } = useQuery({
    queryKey: [`${item.userId}`],
    queryFn: () =>
      authReq
        .get(
          `/users/${item.userId}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigcard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : (
            <div className="user">
              <img src={data.img} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber)
                ? Math.round(item.totalStars / item.starNumber)
                : "No reviews..."}
            </span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GigCard
