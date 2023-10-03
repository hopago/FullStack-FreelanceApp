import './messages.scss';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authReq } from '../../requestMethod';
import moment, {  } from 'moment';


const Messages = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      authReq
      .get(`/conversations`)
      .then((res) => {
        return res.data
      }),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      return authReq.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"])
    }
  });

  const handleRead = async (id) => {
    mutation.mutate(id)
  };

  return (
    <div className="messages">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong..."
      ) : (
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Messages</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {data.map((conversation) => (
              <tr
                className={
                  ((currentUser.isSeller && !conversation.readBySeller) ||
                    (!currentUser.isSeller && !conversation.readByBuyer)) &&
                  "active"
                }
                key={conversation.id}
              >
                <td>
                  {currentUser.isSeller
                    ? conversation.buyerId
                    : conversation.sellerId}
                </td>
                <td>
                  <Link className="link" to={`/message/${conversation.id}`}>
                    {conversation.lastMessage?.substring(0, 50)}...
                  </Link>
                </td>
                <td>{moment(conversation.updatedAt).fromNow()}</td>
                <td>
                  {((currentUser.isSeller && !conversation.readBySeller) ||
                    (!currentUser.isSeller && !conversation.readByBuyer)) && (
                    <button onClick={() => handleRead(conversation.id)}>Mark as Read</button>
                  )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default Messages
