function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-handle">{handle}</p>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
