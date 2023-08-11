import React, { useState, useEffect, useMemo } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

export default function Form() {
  const [message, setMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState("");

  const recognition = useMemo(() => {
    const recognitionInstance = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    return recognitionInstance;
  }, []);

  useEffect(() => {
    recognition.onresult = (event) => {
      let fullTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        fullTranscript += event.results[i][0].transcript + " ";
      }
      setTranscribedText(fullTranscript);
    };
  }, [recognition]);

  const startRecording = () => {
    recognition.start();
    setRecording(true);
  };

  const stopRecording = () => {
    recognition.stop();
    setRecording(false);
  };

  const handleTextAreaChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const emailParams = {
      from_name: "Margaret",
      to_name: "Room 4",
      message: recording ? transcribedText : message,
    };

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_USER_KEY
      );
      console.log("Email sent successfully!", response);
      stopRecording();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="center-container">
      <div className="form__card">
        <header>
          <span className="form__card-title"></span>
        </header>
        <div className="form__card-content">
          <form onSubmit={sendEmail}>
            <textarea
              placeholder="Type here or click start recording"
              value={recording ? transcribedText : message}
              onChange={handleTextAreaChange}
              rows={20}
              cols={95}
              required
            ></textarea>
            {!recording && (
              <button
                className="form__card-button"
                type="button"
                onClick={startRecording}
              >
                Start Recording
              </button>
            )}
            <button className="form__card-button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
