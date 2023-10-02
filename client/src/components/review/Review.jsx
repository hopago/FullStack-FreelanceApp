import { useQuery } from '@tanstack/react-query';
import './review.scss';
import { baseReq } from '../../requestMethod';


const Review = ({ review }) => {

    const { isLoading, error, data } = useQuery({
        queryKey: [`${review.userId}`],
        queryFn: () =>
          baseReq.get(`/users/single/${review.userId}`).then((res) => {
            return res.data;
          }),
      });

  return (
    <div className="reviewItem">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong..."
      ) : (
        <div className="user">
          <img
            className="profilePicture"
            src={
              data.img ||
              "https://downloadhere.kr/wp-content/uploads/2022/07/%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C-300x300.png"
            }
            alt=""
          />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1600px-Flag_of_the_United_States.svg.png?20151118161041"
                alt=""
              />
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/img/like.png" alt="" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
}

export default Review
