import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  // TIMER STATE
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  useEffect(() => {
    if (!running || page !== "home") return;

    if (secondsLeft === 0) {
      setRunning(false);
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running, secondsLeft, page]);

  function resetTimer() {
    setRunning(false);
    setSecondsLeft(25 * 60);
  }

  return (
    <div className="container">

      {/* NAV */}
      <div className="nav">
        <button onClick={() => setPage("home")}>Timer</button>
        <button onClick={() => setPage("playlist")}>Playlist</button>
      </div>

      <h1>nocturne 🌙</h1>

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <p className="subtitle">
            Deep focus through structured time & piano
          </p>

          <h2 className="timer">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </h2>

          <div className="buttons">
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
          </div>

          <p className="session">
            🎧 Now playing: Chopin-inspired focus mode
          </p>
        </>
      )}

      {/* PLAYLIST PAGE */}
      {page === "playlist" && (
        <div className="playlist">
          <h2>🎹 Focus Playlist</h2>

          {/* Chopin */}
          <div className="card">
            <h3>🌙 Chopin Nocturnes</h3>
            <p>Deep emotional piano for focus</p>

            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/9E6b3swbnWg"
              title="Chopin Nocturnes"
              allow="autoplay"
              allowFullScreen
            />
          </div>

          {/* Swan Lake */}
          <div className="card">
            <h3>🌫 Swan Lake – Tchaikovsky</h3>
            <p>Calm orchestral flow for reading</p>

            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/9cNQFB0TDfY"
              title="Swan Lake Act II Scene"
              allow="autoplay"
              allowFullScreen
            />
          </div>

          {/* The Swan */}
          <div className="card">
            <h3>🎼 The Swan – Saint-Saëns</h3>
            <p>Minimal restorative listening</p>

            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/3qrKjywjo7Q"
              title="The Swan"
              allow="autoplay"
              allowFullScreen
            />
          </div>

        </div>
      )}

    </div>
  );
}
