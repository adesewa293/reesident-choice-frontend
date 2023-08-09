import React, { useState, useEffect, useMemo } from "react";
import emailjs from "@emailjs/browser";

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
    <div>
      <h2>Send Email</h2>
      <form onSubmit={sendEmail}>
        <textarea
          placeholder="Message"
          value={recording ? transcribedText : message}
          onChange={handleTextAreaChange}
          rows={10}
          cols={50}
          required
        ></textarea>
        {!recording && (
          <button type="button" onClick={startRecording}>
            Start Recording
          </button>
        )}
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}