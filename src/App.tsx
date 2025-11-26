import "./App.css";
import Collapsible from "./components/collapsible";
import SearchableList from "./components/searchableList";

function App() {
  return (
    <>
      <SearchableList items={["MUI", "ChakraUI", "Shadcn", "RedixUI"]} />
      <Collapsible title={"UI Libraries"} children={undefined} />
    </>
  );
}

export default App;
