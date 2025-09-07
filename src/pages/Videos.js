import VideoCard from '../components/VideoCard';
import "./Videos.css";     // em src/pages/Videos.js

const videos = [
  {
    titulo: "Palestra sobre React",
    url: "https://www.youtube.com/embed/dpw9EHDh2bM"
  },
  // Adicione outros vídeos!
];

function Videos() {
  return (
    <section>
      <h2>Vídeos de Apresentação</h2>
      <div className="grid">
        {videos.map((v, idx) => (
          <VideoCard key={idx} {...v} />
        ))}
      </div>
    </section>
  );
}

export default Videos;
