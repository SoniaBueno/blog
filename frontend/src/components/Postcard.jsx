import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaEraser } from "react-icons/fa";

export default function Postcard(props) {
  const { id } = useParams();

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  const goCompletePost = () => {
    const id = props.post.id;
    navigate("/post/" + id);
  };

  function deleteButton() {
    const deletePost = async () => {
      try {
        const postObject = props.post;
        const jsonbody = await JSON.stringify({
          postObject,
        });
        const id = props.post.id;
        const response = await fetch(`http://localhost:3001/posts/${id}`, {
          method: "DELETE",
          body: jsonbody,
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error(error);
      }
    };
    deletePost();
    refreshPage();
  }

  return (
    <div className="card text-center shadow">
      <div className="container p-4">
        <img
          src={props.post.picture}
          className="card-img-top"
          alt="..."
          onClick={goCompletePost}
        />
      </div>
      <div className="card-body">
        <h2 className="card-title h2-card-title" onClick={goCompletePost}>
          {props.post.title}
        </h2>
        <p className="card-text">{props.post.date}</p>
        <p className="card-text">{props.post.text.substring(0, 50)}</p>

        <div className="d-flex flex-column">
          <button
            className="col-1 rounded backgroundNavButton"
            onClick={deleteButton}
          >
           <FaEraser />
          </button>
        </div>
      </div>
    </div>
  );
}
