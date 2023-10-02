import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Review from '../review/Review';
import './reviews.scss';
import { authReq, baseReq } from '../../requestMethod';


const Reviews = ({ gigId }) => {

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      baseReq.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
        return authReq.post(`/reviews`, review);
    },
    onSuccess: () => {
        queryClient.invalidateQueries(["reviews"])
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong..."
      ) : (
        data.map((review) => <Review key={review._id} review={review} />)
      )}
      <div className="add">
        <h3>Add New Review</h3>
        <form className='addReview' onSubmit={handleSubmit}>
            <input type="text" placeholder='Write your comment'/>
            <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button>Write</button>
        </form>
      </div>
    </div>
  );
}

export default Reviews
