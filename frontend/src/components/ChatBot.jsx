import { useState } from "react";
import axios from "axios";

function Chatbot() {

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([]);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);

    try {

      const response = await axios.post(
        "http://localhost:8080/ai/chat",
        {
          message,
        }
      );

      const botMessage = {
        sender: "bot",
        text: response.data.reply,
      };

      setChat((prev) => [...prev, botMessage]);

      setMessage("");

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#0f766e",
          color: "white",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "320px",
            height: "450px",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
         <div
            style={{
              background: "#0f766e",
              color: "white",
              padding: "12px",
              fontWeight: "bold",
            }}
          >
            MP Tourism Assistant
          </div>

          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
            }}
          >
            {chat.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign:
                    msg.sender === "user"
                      ? "right"
                      : "left",

                  marginBottom: "10px",
                }}
              >
              <span
                  style={{
                    background:
                      msg.sender === "user"
                        ? "#0f766e"
                        : "#e5e7eb",

                    color:
                      msg.sender === "user"
                        ? "white"
                        : "black",

                    padding: "8px 12px",
                    borderRadius: "10px",
                    display: "inline-block",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px",
              gap: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Ask anything..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              style={{
                flex: 1,
                padding: "10px",
              }}
            />
            <button onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;