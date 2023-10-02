import './message.scss';
import { Link } from 'react-router-dom';


const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="bradCrumbs">
          <Link className="link" to="/messages">
            Messages
          </Link>{" "}
          &gt; Dopago
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://images.pexels.com/photos/7551359/pexels-photo-7551359.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              voluptatum nisi sequi. Nulla omnis consequuntur labore reiciendis,
              cumque laboriosam culpa dicta cupiditate voluptatibus quod sed
              repellat animi dolores debitis quasi.
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/7551359/pexels-photo-7551359.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              voluptatum nisi sequi. Nulla omnis consequuntur labore reiciendis,
              cumque laboriosam culpa dicta cupiditate voluptatibus quod sed
              repellat animi dolores debitis quasi.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/7551359/pexels-photo-7551359.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              voluptatum nisi sequi. Nulla omnis consequuntur labore reiciendis,
              cumque laboriosam culpa dicta cupiditate voluptatibus quod sed
              repellat animi dolores debitis quasi.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/7551359/pexels-photo-7551359.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              voluptatum nisi sequi. Nulla omnis consequuntur labore reiciendis,
              cumque laboriosam culpa dicta cupiditate voluptatibus quod sed
              repellat animi dolores debitis quasi.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            placeholder="Write a message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message
