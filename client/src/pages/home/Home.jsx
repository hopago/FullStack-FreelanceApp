import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './home.scss';
import CategoryCard from '../../components/cateygoryCard/CategoryCard';
import { cards } from '../../data';
import { projects } from '../../data';
import ProjectCard from '../../components/projectCard/ProjectCard';


const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={3}>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              necessitatibus ratione omnis repellat non impedit facere iure.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              necessitatibus ratione omnis repellat non impedit facere iure.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              necessitatibus ratione omnis repellat non impedit facere iure.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              necessitatibus ratione omnis repellat non impedit facere iure.
            </p>
          </div>
          <div className="item">
            <video src="./img/181314 (720p).mp4" autoPlay controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container row-reverse">
          <div className="item">
            <h1>Horeelance business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis tempora fugit animi!
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <button>Explore Your Business</button>
          </div>
          <div className="item">
            <img src="./img/Business-Transparent.png" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={2}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>
    </div>
  );
}

export default Home
