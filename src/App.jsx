// importing modules
import { createRoot } from "react-dom/client"; /*must be client since you're client side*/
import SearchPokemon from "./SearchPokemon";

const App = () => {
  return (
    <div className="app">
      <SearchPokemon />
    </div>
  );
};

// setting the container for all the react components
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
