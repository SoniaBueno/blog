import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()

function link(){
  navigate("/")
};
  return (
    <div className="d-flex backgroundHeader justify-content-start col-10">
      <h1 className="p-2"
      onClick={link}>Muévete</h1>
    </div>
  );
};

export default Header;


