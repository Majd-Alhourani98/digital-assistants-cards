function ProfileCard({ title, handle, image, description }) {
  return (
    <div>
      <img src={image} alt={title} />
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
