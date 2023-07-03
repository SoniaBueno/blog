import Header from "../components/Header";
import NewPost from "../components/NewPost";
import Footer from "../components/Footer";

export default function New() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Entrada nueva</title>
      <Header />
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10 col-sm-10 d-flex justify-content-center align-items-center">
            <div className="p-4" style={{ maxWidth: "100%" }}>
              <NewPost />
            </div>
          </div>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}
