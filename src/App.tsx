import "./App.css";
import "./index.css";
import TopNavbar from "./Components/TopNavbar";
import RenderPage from "./Components/RenderComp";
import Footnotes from "./Components/Footnotes";

function App() {
  return (
    <>
      <TopNavbar />
      <div className="min-h-screen w-full flex flex-col bg-[var(--bg-color)]">
        <RenderPage />
      </div>
      <Footnotes />
    </>
  );
}

export default App;
