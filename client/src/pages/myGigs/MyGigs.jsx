import './mygigs.scss';
import { Link } from 'react-router-dom';


const MyGigs = () => {
  return (
    <div className="mygigs">
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
          <tr>
            <td>
              <img className='productImg' src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>$ 119</td>
            <td>1</td>
            <td>
              <img className='deleteBtn' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='productImg' src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>$ 119</td>
            <td>1</td>
            <td>
              <img className='deleteBtn' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='productImg' src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>$ 119</td>
            <td>1</td>
            <td>
              <img className='deleteBtn' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='productImg' src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>$ 119</td>
            <td>1</td>
            <td>
              <img className='deleteBtn' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='productImg' src="https://images.pexels.com/photos/12328822/pexels-photo-12328822.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </td>
            <td>Gig1</td>
            <td>$ 119</td>
            <td>1</td>
            <td>
              <img className='deleteBtn' src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyGigs
