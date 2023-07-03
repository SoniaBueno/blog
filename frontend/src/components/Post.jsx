import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const [postObject, setPostObject] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [file, setFile] = useState(null);
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
      } catch (error) {
        console.error(error);
      }
    };
    deletePost();
    navigate("/");
  }

  return (
    <div className="card text-center shadow">
      <div className="container p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (!file) return;
          }}
        >
          <img src={postObject.picture} className="card-img-top" alt="..." />{" "}
        </form>
        {isEditable && (
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            id="editable-image"
          />
        )}
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
            cols="60"
            rows="10"
            defaultValue={postObject.text}
          ></textarea>
        ) : (
          <p className="card-text">{postObject.text}</p>
        )}

        <div className="d-flex flex-column">
          <button
            className="col-3 rounded backgroundNavButton"
            onClick={deleteButton}
          >
            Borrar
          </button>
          <div>
            {isEditable ? (
              <button
                className="col-3 rounded backgroundNavButton"
                onClick={saveButton}
              >
                Guardar
              </button>
            ) : (
              <button
                className="col-3 rounded backgroundShowMoreButton"
                onClick={editButton}
              >
                Editar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
