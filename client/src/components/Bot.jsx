import { useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

export default function Bot(){
    //getting data fetch from backend to get on frontend...
    const [message,setMessage]=useState([]);
    // userinput
    const [input,setInput]=useState("");
    //loading while data not came
    const [loading,setLoading]=useState(false);

    //function that call backend api's
  const handleMessage = async () => {
  if (!input.trim()) return;

  setLoading(true);

  try {
    const response = await axios.post(
      "http://localhost:3000/bot/v1/message",
      { text: input }
    );

    console.log("Backend response:", response.data);

    if (response.data.success) {
      setMessage(prev => [
        ...prev,
        { text: response.data.user, sender: "user" },
        { text: response.data.retuni, sender: "bot" }
      ]);
    }
  } catch (err) {
    console.log("Axios error:", err);
  } finally {
    setInput("");
    setLoading(false);
  }
};

    return(
         <div className="h-screen flex flex-col bg-[#0f172a] text-white">

      {/* Navbar / Header */}
      <header className="fixed top-0 left-0 w-full border-b border-gray-800 bg-[#0b1220] z-10">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-lg font-bold">InfoBot</h1>
          <FaUserCircle size={30} className="cursor-pointer" />
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto pt-24 pb-28 flex justify-center">
        <div className="w-full max-w-4xl px-4 flex flex-col space-y-3">

          {/* Welcome Message */}
          {message.length === 0 && (
            <div className="text-center text-gray-400 text-lg mt-20">
              Hello, I'm <span className="text-blue-500 font-semibold">InfoBot</span>
            </div>
          )}

          {/* Messages */}
          {message.map((msg, idx) => (
            <div
              key={idx}
              className={`px-4 py-2 rounded-xl max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white self-end"
                  : "bg-gray-700 text-gray-200 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {/* Bot typing */}
          {loading && (
            <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded-xl max-w-[60%] self-start">
              Bot is typing...
            </div>
          )}
        </div>
      </main>

      {/* Input & Footer */}
      <footer className="fixed bottom-0 left-0 w-full border-t border-gray-800 bg-[#0b1220] py-4">
        <div className="max-w-4xl mx-auto px-4 flex gap-3">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
            placeholder="Ask InfoBot..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleMessage()}
          />
          <button
            onClick={handleMessage}
            className="bg-blue-600 hover:bg-green-700 px-4 py-1 rounded-full text-white font-medium transition"
          >
            Send
          </button>
        </div>
      </footer>
    </div>

    );
}