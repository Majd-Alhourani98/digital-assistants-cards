function Card({ title, company, description, image }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={title + " logo"} />
      <h2 className="card-title">{title}</h2>
      <p className="card-company">{company}</p>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;
