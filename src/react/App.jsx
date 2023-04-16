// importing modules
import createRoot from "react-dom/client";

// setting the container for all the react components
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
