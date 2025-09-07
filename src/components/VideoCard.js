import "./VideoCard.css";   // no VideoCard.js

function VideoCard({ titulo, url }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <div className="video-wrapper">
        <iframe
          width="320"
          height="180"
          src={url}
          frameBorder="0"
          allowFullScreen
          title={titulo}
        ></iframe>
      </div>
    </div>
  );
}

export default VideoCard;
