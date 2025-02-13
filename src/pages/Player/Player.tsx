import "./PLayer.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import loading_gif from "../../assets/netflix_spinner.gif";
import axios from "axios";

const Player = () => {
  interface MovieDetails {
    name: string;
    key: string;
    published_at: string;
    type: string;
  }

  const navigate = useNavigate();
  const [video, setVideo] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return; 

    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2ZlNDM2NDZjNmE0ZTJlMjcyMGRiNjE2ZWJjOGY2NyIsIm5iZiI6MTY5MDk5Mjg4Mi45MTkwMDAxLCJzdWIiOiI2NGNhODBmMjBjYjMzNTE3YzRlYmU4NjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NEa3e3jnNYMsfKNsor_cwgagO3Bd4tfN0oyQ-nsG4Og",
      },
    };

    axios
      .get(url, options)
      .then((response) => {
        if (response.data.results.length > 0) {
          setVideo(response.data.results[0]);
        } else {
          setVideo(null);
        }
      })
      .catch((error) => console.error("Error fetching video:", error))
      .finally(() => setLoading(false)); 

  }, [id]);

  return (
    <>
      {loading ? (
       <center> <img src={loading_gif} alt="Loading..." /></center>
      ) : video ? (
        <div className="player">
          <div>
            <img
              src={back_arrow_icon}
              alt="back"
              onClick={() => navigate(-1)}
            />
            <iframe
              width="100%" // Ensure the iframe is responsive
              height="100%" // Make it responsive as well
              src={`https://www.youtube.com/embed/${video.key}`}
              title="trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="player-info">
              <p>
                {video.published_at &&
                  new Date(video.published_at)
                    .toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                    .replace(/\//g, "-")}
              </p>
              <p>{video.name}</p>
              <p>{video.type}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No Video Available</p>
      )}
    </>
  );
}
  
export default Player ;
