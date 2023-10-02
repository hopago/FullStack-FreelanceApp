import './featured.scss';


const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>freelance</i> services for you business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder='Try building web application!' />
                    </div>
                    <button>Search</button>
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
