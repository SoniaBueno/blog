import Header from "../components/Header";
import NewPost from "../components/NewPost";
import Footer from "../components/Footer";

export default function New() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Header />
      <main className="d-flex-column min-vh-90">
        <div className="row justify-content-center p-4">
          <NewPost />
        </div>
      </main>
      <Footer />
    </div>
  );
}
