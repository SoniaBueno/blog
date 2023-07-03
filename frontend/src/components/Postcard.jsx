import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { FaEraser } from "react-icons/fa";

export default function Postcard(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

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
        setModal(true);
      } catch (error) {
        console.error(error);
      }
    };
    deletePost();
  }

  const handleModal = () => {
    setModal(false);
    refreshPage();
  };
  return (
    <>
      <div className="card text-center shadow">
        <div className="container p-4">
          <img
            src={props.post.picture}
            className="card-img-top pointer-cursor"
            alt="imagen de la entrada"
            onClick={goCompletePost}
          />
        </div>
        <div className="card-body">
          <h2
            className="card-title h2-card-title pointer-cursor"
            onClick={goCompletePost}
          >
            {props.post.title}
          </h2>
          <p className="card-text">{props.post.date}</p>
          <p className="card-text">{props.post.text.substring(0, 49)}</p>

          <div className="d-flex justify-content-start p-2">
            <button
              type="button"
              className="btn btn-outline-success btn-floating"
              onClick={deleteButton}
            >
              <FaEraser />
            </button>
          </div>
        </div>
      </div>
      <Modal show={modal} onHide={handleModal}>
        <Modal.Header>
          <Modal.Title>Entrada borrada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button
            className="rounded-pill"
            style={{ backgroundColor: "lightgrey", color: "black" }}
            onClick={handleModal}
          >
            Cerrar
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
