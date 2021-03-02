//import logo from './logo.svg';
import "./App.css";
import Card from "./components/Card";
import "../node_modules/mini.css/dist/mini-default.min.css";

function App() {
  const h5Text = "Card title";
  const pText =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";

  return (
    <>
      <Card h5Text={h5Text} pText={pText}>
        <img src="..." className="card-img-top" alt="..."></img>
      </Card>
      <Card
        h5Text="Special title treatment"
        pText="With supporting text below as a natural lead-in to additional content."
      />
    </>
  );
}

export default App;
