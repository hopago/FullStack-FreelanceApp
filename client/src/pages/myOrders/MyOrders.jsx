import './myorders.scss';
import { useQuery } from '@tanstack/react-query';
import { authReq } from '../../requestMethod';
import { Link, useNavigate } from 'react-router-dom';


const MyOrders = () => {

  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      authReq.get(
        `/orders`
      )
      .then((res) => {
        return res.data;
      })
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;
    try{
      const res = await authReq.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await authReq.post(`/conversations/`, {
          to: currentUser.isSeller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  return (
    <div className="myorders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong..."
      ) : (
        <div className="container">
          <div className="title">
            <h1>My Orders</h1>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
            {data.map((order) => (
              <tr key={order._id}>
                <td>
                  <img
                    className="productImg"
                    src={order.img}
                    alt=""
                  />
                </td>
                <td>{order.title}</td>
                <td>$ {order.price}</td>
                <td>
                  <img 
                    style={{ cursor: "pointer" }}
                    className="deleteBtn" 
                    onClick={() => handleContact(order)} 
                    src="/img/message.png" alt="" 
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

export default MyOrders
