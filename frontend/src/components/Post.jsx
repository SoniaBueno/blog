import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { FaEraser } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

export default function Post() {
  const [postObject, setPostObject] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [file, setFile] = useState(null);
  const [modal, setModal] = useState(false);

  const { id } = useParams();
  function editButton(event) {
    event.preventDefault();
    setIsEditable(true);
  }
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  useEffect(() => {
    const fetchPostObject = async () => {
      try {
        const response = await fetch(`http://localhost:3001/posts/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseJson = await response.json();
        setPostObject(responseJson);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPostObject();
  }, []);

  function saveButton() {
    const updatePost = async () => {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", document.getElementById("titlePost").value);
        formData.append("text", document.getElementById("textareaPost").value);
        formData.append("picture", postObject.picture);
        const response = await fetch(`http://localhost:3001/posts/${id}`, {
          method: "PATCH",
          body: formData,
        });
      } catch (error) {
        console.error(error);
      }
    };
    updatePost();
    refreshPage();
  }

  const handleModal = () => {
    setModal(false);
    navigate("/");
  };

  function deleteButton() {
    const deletePost = async () => {
      try {
        const jsonbody = await JSON.stringify({
          postObject,
        });
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

  return (
    <>
      <div className="card text-center shadow col-lg-12 col-md-12 col-sm-12 d-flex align-items-center">
        <div className="container-fluid p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (!file) return;
            }}
          >
            <img
              src={postObject.picture}
              className="card-img-top mb-2"
              alt="..."
            />{" "}
            {isEditable && (
              <input
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                id="editable-image"
              />
            )}
          </form>
        </div>
        <div className="card-body">
          {isEditable ? (
            <input type="text" id="titlePost" defaultValue={postObject.title} />
          ) : (
            <h1 className="card-title">{postObject.title}</h1>
          )}
          <p className="card-text">{postObject.date}</p>
          {isEditable ? (
            <textarea
              name="textareaPost"
              id="textareaPost"
              cols="50"
              rows="10"
              defaultValue={postObject.text}
            ></textarea>
          ) : (
            <p className="card-text">{postObject.text}</p>
          )}

          <div className="d-flex flex-column">
            <div className="p-2">
              <button
                type="button"
                className="btn btn-outline-success btn-floating"
                onClick={deleteButton}
              >
                <FaEraser />
              </button>
            </div>
            <div>
              {isEditable ? (
                <div className="p-2">
                  <button
                    type="button"
                    className="btn btn-outline-third btn-floating"
                    onClick={saveButton}
                  >
                    <FaSave />
                  </button>
                </div>
              ) : (
                <div className="p-2">
                  <button
                    type="button"
                    className="btn btn-outline-second btn-floating"
                    onClick={editButton}
                  >
                    <FaEdit />
                  </button>
                </div>
              )}
            </div>
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
