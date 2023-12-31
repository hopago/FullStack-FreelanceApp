import './projectcard.scss';


const ProjectCard = ({ item }) => {
  return (
    <div className="projectcard">
        <img src={item.img} alt="" />
        <div className="info">
            <img src={item.pp} alt="" />
            <div className="texts">
                <h2>{item.cat}</h2>
                <span>{item.username}</span>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
