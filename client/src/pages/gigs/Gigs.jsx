import { useEffect, useRef, useState } from 'react';
import './gigs.scss';
import GigCard from '../../components/gigCard/GigCard';
import { gigs } from '../../data';
import { useQuery } from '@tanstack/react-query';
import { authReq } from '../../requestMethod';
import { useLocation } from 'react-router-dom';


const Gigs = () => {

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      authReq.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then((res) => {
        return res.data;
      }),
  });

  const apply = () => {
    refetch()
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Horeelance | UI & UX</span>
        <h1>UI Artist</h1>
        <p>
          Explore the boundaries of art and technology with horeelance experts
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" ref={minRef} placeholder="min" />
            <input type="text" ref={maxRef} placeholder="max" />
            <button onClick={() => apply()}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" onClick={() => setOpen(!open)} alt="" />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => setSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => setSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        {isLoading ? (
          "loading..."
        ) : error ? (
          "Something went wrong..."
        ) : (
          <div className="cards">
            {data.map((gig) => (
              <GigCard key={gig._id} item={gig} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gigs
