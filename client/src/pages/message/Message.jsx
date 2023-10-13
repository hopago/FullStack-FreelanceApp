import './message.scss';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authReq } from '../../requestMethod';


const Message = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      authReq.get(`/messages/${id}`)
      .then((res) => {
        return res.data;
      }),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (message) => {
      return authReq.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"])
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationsId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = '';
  };

  return (
    <div className="message">
      <div className="container">
        <span className="bradCrumbs">
          <Link className="link" to="/messages">
            Messages
          </Link>{" "}
          &gt; Dopago
        </span>
        {isLoading
          ? "loading"
          : error
          ? "Something went wrong..."
          : (
              <div className="messages">
                {data.map((message) => (
                <div className={message.userId === currentUser._id ? "item owner" : "item"} key={message._id}>
                  <img
                    src="https://images.pexels.com/photos/7551359/pexels-photo-7551359.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=""
                  />
                  <p>
                    {message.desc}
                  </p>
                </div>))}
              </div>
          )}
        <hr />
        <form onSubmit={handleSubmit} className="write">
          <textarea
            placeholder="Write a message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Message
