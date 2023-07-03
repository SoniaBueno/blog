import { useEffect, useState } from "react";
import Header from "../components/Header";
import Postcard from "../components/Postcard";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [postObject, setPostObject] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostObject = async () => {
      try {
        const response = await fetch(`http://localhost:3001/posts`, {
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



  function addPost() {
    
    navigate("/new");
  };
  
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Helmet>
        <title>Muevete</title>
      </Helmet>
      <Header/>
      <nav className="text-center">
        <button className="btn btn-lg mt-3 backgroundNavButton"
        onClick={addPost}>
          Añadir entrada nueva 
        </button>
      </nav>
      <main className="container">
        <div className="row justify-content-center">
          <section className="col-lg-6 col-md-10 col-sm-10 d-flex justify-content-center align-items-center">
            <article className="p-4" style={{ maxWidth: "100%" }}>
              {Array.isArray(postObject) && postObject.length > 0 && (
                <ul className="list-group">
                  {postObject.map((post) => (
                    <Postcard post={post} key={post.id} />
                  ))}
                </ul>
              )}
            </article>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
