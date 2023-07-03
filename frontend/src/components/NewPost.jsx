import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  async function saveButton() {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", document.getElementById("titlePost").value);
      formData.append("text", document.getElementById("textareaPost").value);

      const response = await fetch("http://localhost:3001/new", {
        method: "POST",
        body: formData
      })

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Error creating post");
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="card text-center shadow">
      <div className="container p-4">
        <div className="container">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (!file) return;
            }}
          >
            <label>Subir imagen:</label>
            <input
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              id="upload-image"
            />
          </form>
        </div>
      </div>
      <div className="card-body">
        <input type="text" id="titlePost" placeholder="Título de la entrada" />

        <textarea
          name="textareaPost"
          id="textareaPost"
          cols="60"
          rows="15"
          placeholder="Escribe aquí el contenido de tu entrada"
        ></textarea>

        <div>
          <button
            className="col-3 rounded backgroundNavButton"
            onClick={saveButton}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
