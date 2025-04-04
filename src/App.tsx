import "./App.css";
import "./index.css";
import TopNavbar from "./Components/TopNavbar";
import RenderPage from "./Components/RenderPage";
import Footnotes from "./Components/Footnotes";
import ChatBotBox from "./Components/Chatbot";

function App() {
  return (
    <>
      <TopNavbar />
      <div className="min-h-screen w-full flex flex-col bg-[var(--bg-color)]">
        <RenderPage />
      </div>
      <Footnotes />
      <ChatBotBox/>
    </>
  );
}

export default App;
