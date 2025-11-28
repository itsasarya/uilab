import "./App.css";
import Collapsible from "./components/collapsible";
import SearchableList from "./components/searchableList";
import StepProgress from "./components/stepProgress";

function App() {
  return (
    <>
      <SearchableList items={["MUI", "ChakraUI", "Shadcn", "RedixUI"]} />
      <Collapsible title={"UI Libraries"} children={undefined} />
      <StepProgress steps={["MUI", "ChakraUI", "Shadcn", "RedixUI"]} current={0} />
    </>
  );
}

export default App;
