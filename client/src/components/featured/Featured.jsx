import { useState } from 'react';
import './featured.scss';
import { useNavigate } from 'react-router-dom';


const Featured = () => {

    const [input, setInput] = useState(""); 

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(`/gigs?search=${input}`);
    };

  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>freelance</i> services for you business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder='Try building web application!' onChange={e => setInput(e.target.value)} />
                    </div>
                    <button onClick={handleSubmit}>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Server Launching</button>
                    <button>AI Service</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/pngegg.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured
