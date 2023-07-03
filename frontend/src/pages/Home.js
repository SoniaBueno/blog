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
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Helmet>
        <title>Muevete</title>
      </Helmet>
      <Header />
      <nav className="justify-content-center mt-4">
        <button className="rounded saveButton p-2 " onClick={addPost}>
          <h5 className="mb-0">Añadir entrada nueva</h5>
        </button>
      </nav>
      <main className="container-fluid">
        <div className="d-flex-column min-vh-100">
          <div className="row justify-content-center">
            <section className="col-lg-6 col-md-8 col-sm-10 d-flex justify-content-center align-items-center">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
