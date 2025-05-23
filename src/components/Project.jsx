export default function Project({ title, image, deployed, github }) {
    return (
      <div>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>
          <a href={deployed} target="_blank">Live</a> | 
          <a href={github} target="_blank">GitHub</a>
        </p>
      </div>
    );
  }
  