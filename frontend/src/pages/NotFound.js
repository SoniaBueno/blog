import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/posts");
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "lightgrey" }}
    >
      <div className="text-center">
        <h1>Mejor vuelve, no estás en el sitio correcto :D</h1>
        <button
          onClick={handleButton}
          className="btn rounded-5 btn-general m-4"
          type="button"
          style={{
            backgroundColor: "palevioletred",
          }}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
