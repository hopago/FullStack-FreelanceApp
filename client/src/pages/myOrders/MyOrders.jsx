import './myorders.scss';
import { useQuery } from '@tanstack/react-query';
import { authReq } from '../../requestMethod';


const MyOrders = () => {

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

  console.log(data);

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
                  <img className="deleteBtn" src="/img/message.png" alt="" />
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
