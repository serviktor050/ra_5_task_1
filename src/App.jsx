//import logo from './logo.svg';
import "./App.css";
import Card from "./components/Card";
import "../node_modules/mini.css/dist/mini-default.min.css";

function App() {
  return (
    <>
      <Card>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <img src="..." className="card-img-top" alt="..."></img>
      </Card>

      <Card>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </Card>
    </>
  );
}

export default App;
