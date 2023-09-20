import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyForm from "./Form practice/Sampleform";
// import State from "./Form practice/state-practice";
// import FormDataDisplay from "./Form practice/state-practice";
// import Excuser from "./Excuser app/excuser";
// import DoG from "./Excuser app/DogAPi";
import PokemonAPI from "./Excuser app/pokemonApi";
// import BasicPagination from "./Excuser app/pagination";
import Bitcoin from "../src/Excuser app/bitcoinapi/bitcoin";
import NewsAPi from "./NewAPi/New";
import FetchNew from "../src/newpokemon/newpoke";
import CardDesign from "./newCardDesign/NewCardDesign";

function App() {
  return (
    <div className="App">
      {/* <MyForm /> */}
      {/* <FormDataDisplay /> */}
      {/* <Excuser /> */}
      {/* <DoG /> */}
      {/* <BasicPagination /> */}
      {/* <PokemonAPI /> */}
      {/* <Bitcoin /> */}
      <NewsAPi />
      {/* <FetchNew /> */}
      {/* <CardDesign /> */}
    </div>
  );
}

export default App;
