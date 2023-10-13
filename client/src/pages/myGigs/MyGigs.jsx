import { getCurrentUser } from '../../utils/getCurrentUser';
import './mygigs.scss';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authReq } from '../../requestMethod';


const MyGigs = () => {

  const currentUser = getCurrentUser();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      authReq.get(`/gigs?userId=${currentUser._id}`)
      .then((res) => {
        return res.data
      }),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      return authReq.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myGigs']);
    }
  });

  const handleDelete = async (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="mygigs">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong..."
      ) : (
        <div className="container">
          <div className="title">
            <h1>My Gigs</h1>
            <Link to="/add" className="link">
              <button>Add New</button>
            </Link>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            {data.map((gig) => (
              <tr key={gig._id}>
                <td>
                  <img
                    className="productImg"
                    src={gig.cover}
                    alt=""
                  />
                </td>
                <td>{gig.title}</td>
                <td>$ {gig.price}</td>
                <td>1</td>
                <td>
                  <img
                    className="deleteBtn"
                    onClick={() => handleDelete(gig._id)}
                    src="/img/delete.png"
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default MyGigs
