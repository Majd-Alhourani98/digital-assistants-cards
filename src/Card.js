function Card({ title, company, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{company}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;
