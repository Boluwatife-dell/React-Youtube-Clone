function VideoCard({ user }) {
  return (
    <div className="video-box">
      <img
        src={`https://picsum.photos/seed/${user.id}/480/270`}
        alt={user.name}
        className="thumbnail-img"
      />
      <div className="video-details">
        <img
          className="profile-img"
          src={`https://picsum.photos/seed/avatar${user.id}/40/40`}
          alt="channel"
        />
        <div className="video-info">
          <h2 className="video-title">{user.name}</h2>
          <p className="video-channel">Channel {user.company.name} ✔</p>
          <p class="video-stats">${user.website}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
