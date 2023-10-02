import './messages.scss';
import { Link } from 'react-router-dom';


const Messages = () => {

  const currentUser = {
    id: 1,
    username: "hopago",
    isSeller: true,
  };

  const message = `
    Fixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this errorFixed this error
  `;

  return (
    <div className="messages">
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
          <tr className='active'>
            <td>Dopago</td>
            <td><Link className='link' to='/message/1'>{message.substring(0, 50)}...</Link></td>
            <td>2023.09.30</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className='active'>
            <td>Dopago</td>
            <td><Link className='link' to='/message/1'>{message.substring(0, 50)}...</Link></td>
            <td>2023.09.30</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Dopago</td>
            <td><Link className='link' to='/message/1'>{message.substring(0, 50)}...</Link></td>
            <td>2023.09.30</td>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>Dopago</td>
            <td><Link className='link' to='/message/1'>{message.substring(0, 50)}...</Link></td>
            <td>2023.09.30</td>
            <td>
              
            </td>
          </tr>
          <tr>
            <td>Dopago</td>
            <td><Link className='link' to='/message/1'>{message.substring(0, 50)}...</Link></td>
            <td>2023.09.30</td>
            <td>
              
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Messages
