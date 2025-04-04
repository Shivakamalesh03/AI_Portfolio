import { useState } from "react";
import { Send } from "lucide-react";

const ChatBotBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{
    "from":"",
    "text":""
  }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    // Placeholder bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: "Got it! ✅" }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-10 right-4 z-50">
      {open && (
        <div className="bg-white shadow-xl rounded-2xl w-80 h-96 flex flex-col">
          <div className="bg-blue-600 text-white p-3 rounded-t-2xl font-semibold">
            ChatBot
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl text-sm max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-blue-100 ml-auto text-right"
                    : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex items-center">
            <input
              type="text"
              className="flex-1 border rounded-xl px-3 py-1 text-sm outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="ml-2 text-blue-600"
              onClick={handleSend}
              title="Send"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
      <button
        className="mt-2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖️" : "💬"}
      </button>
    </div>
  );
};

export default ChatBotBox;
