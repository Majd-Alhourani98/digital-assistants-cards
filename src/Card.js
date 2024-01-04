function Card({ title, company, description, image }) {
  return (
    <div>
      <img src={image} alt={title + "logo"} />
      <h2>{title}</h2>
      <p>{company}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;
