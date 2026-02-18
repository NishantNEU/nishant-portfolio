import { useState, useEffect } from "react";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  User,
  Flashlight,
  Camera,
  Music,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Pointer,
} from "lucide-react";
import { personal } from "../assets/data";
import ScrollReveal from "./ScrollReveal";
import "../styles/photo.css";

// ─── Config ───
const SONG = {
  title: "7 Years",
  artist: "Lukas Graham",
};

export default function Photo() {
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(35);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  // ──────────────────────────────────────────
  // HOW TO ADD YOUR PHOTO:
  //   1. Put your photo in: public/photo.jpg
  //   2. Recommended: Portrait orientation, min 600px wide
  // ──────────────────────────────────────────
  const photoSrc = "public/Portfolio_PIC.JPEG";

  // Get current time for lock screen
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const displayTime = `${hours > 12 ? hours - 12 : hours || 12}:${minutes}`;

  const dateStr = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  // Simulate progress bar movement when "playing"
  useEffect(() => {
    if (!expanded || !playing) return;
    const iv = setInterval(() => {
      setProgress((p) => (p >= 95 ? 5 : p + 0.5));
    }, 300);
    return () => clearInterval(iv);
  }, [expanded, playing]);

  const toggleIsland = () => {
    setExpanded((prev) => !prev);
    if (!hasInteracted) setHasInteracted(true);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    setPlaying((p) => !p);
  };

  const formatTime = (pct) => {
    const total = 215; // 3:35 in seconds
    const secs = Math.floor((pct / 100) * total);
    const m = Math.floor(secs / 60);
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <section className="photo-section">
      <div className="container">
        <div className="photo-layout">
          {/* ─── iPhone ─── */}
          <ScrollReveal type="left">
            <div className="iphone-container">
              <div className="iphone-frame">
                <div className="iphone-screen">
                  {/* ─── Dynamic Island ─── */}
                  <div
                    className={`dynamic-island ${expanded ? "expanded" : ""}`}
                    onClick={toggleIsland}
                    role="button"
                    tabIndex={0}
                    aria-label={expanded ? "Collapse music player" : "Expand music player"}
                    onKeyDown={(e) => e.key === "Enter" && toggleIsland()}
                  >
                    {/* Collapsed pill content */}
                    <div className="di-collapsed">
                      <div className="di-collapsed-icon">
                        <Music size={8} />
                      </div>
                      <div className="di-collapsed-bars">
                        <span className="di-bar-1" />
                        <span className="di-bar-2" />
                        <span className="di-bar-3" />
                        <span className="di-bar-4" />
                      </div>
                    </div>

                    {/* Expanded Apple Music player */}
                    <div className="di-expanded">
                      {/* Top row: art + info */}
                      <div className="di-now-playing-top">
                        <div className="di-album-art">
                          {!photoError ? (
                            <img
                              src={photoSrc}
                              alt="Album art"
                              onError={() => setPhotoError(true)}
                            />
                          ) : (
                            <span className="di-album-art-placeholder">
                              <Music size={18} />
                            </span>
                          )}
                        </div>
                        <div className="di-song-info">
                          <div className="di-song-title">{SONG.title}</div>
                          <div className="di-song-artist">{SONG.artist}</div>
                        </div>
                        <div className="di-music-icon">
                          <Music size={14} />
                        </div>
                      </div>

                      {/* Waveform */}
                      <div className={`di-waveform ${playing ? "playing" : ""}`}>
                        {Array.from({ length: 16 }).map((_, i) => (
                          <span key={i} />
                        ))}
                      </div>

                      {/* Progress */}
                      <div className="di-progress">
                        <span className="di-progress-time">
                          {formatTime(progress)}
                        </span>
                        <div className="di-progress-bar">
                          <div
                            className="di-progress-fill"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <span className="di-progress-time">3:35</span>
                      </div>

                      {/* Controls */}
                      <div className="di-controls">
                        <button className="di-ctrl-btn" onClick={(e) => e.stopPropagation()} aria-label="Shuffle">
                          <Shuffle size={14} />
                        </button>
                        <button className="di-ctrl-btn" onClick={(e) => e.stopPropagation()} aria-label="Previous">
                          <SkipBack size={16} fill="#fff" />
                        </button>
                        <button
                          className="di-ctrl-btn di-ctrl-play"
                          onClick={togglePlay}
                          aria-label={playing ? "Pause" : "Play"}
                        >
                          {playing ? (
                            <Pause size={18} fill="#fff" />
                          ) : (
                            <Play size={18} fill="#fff" />
                          )}
                        </button>
                        <button className="di-ctrl-btn" onClick={(e) => e.stopPropagation()} aria-label="Next">
                          <SkipForward size={16} fill="#fff" />
                        </button>
                        <button className="di-ctrl-btn" onClick={(e) => e.stopPropagation()} aria-label="Repeat">
                          <Repeat size={14} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ─── Lock Screen ─── */}
                  <div className="lockscreen">
                    {/* Wallpaper */}
                    <div className="lockscreen-wallpaper">
                      {!photoError ? (
                        <>
                          <img
                            src={photoSrc}
                            alt={`${personal.name} portrait`}
                            onError={() => setPhotoError(true)}
                          />
                          <div className="lockscreen-wallpaper-overlay" />
                        </>
                      ) : (
                        <div className="lockscreen-placeholder">
                          <div className="lockscreen-placeholder-icon">
                            <User size={24} />
                          </div>
                          <p>Add photo.jpg to /public</p>
                        </div>
                      )}
                    </div>

                    {/* Time & Date */}
                    <div className="lockscreen-top">
                      <div className="lockscreen-date">{dateStr}</div>
                      <div className="lockscreen-time">{displayTime}</div>
                    </div>

                    {/* Bottom */}
                    <div className="lockscreen-bottom">
                      <div className="lockscreen-name">{personal.name}</div>
                      <div className="lockscreen-role">{personal.title}</div>

                      <div className="lockscreen-icons">
                        <div className="lockscreen-icon-btn">
                          <Flashlight size={18} />
                        </div>
                        <div className="lockscreen-icon-btn">
                          <Camera size={18} />
                        </div>
                      </div>

                      <div className="lockscreen-bar" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hint */}
              <div className={`iphone-hint ${hasInteracted ? "hidden" : ""}`}>
                <Pointer size={12} />
                Tap the Dynamic Island
              </div>
            </div>
          </ScrollReveal>

          {/* ─── Text Side ─── */}
          <ScrollReveal type="right">
            <div className="photo-text">
              <p className="photo-greeting">Hello, I'm</p>
              <h2 className="photo-name">{personal.name}</h2>
              <p className="photo-role">{personal.title}</p>
              <p className="photo-bio">
                A passionate software engineer who turns complex problems into
                elegant solutions. I build scalable systems, win hackathons, and
                ship products that make a real impact.
              </p>
              <div className="photo-tags">
                <span className="photo-tag">
                  <MapPin size={14} />
                  Boston, MA
                </span>
                <span className="photo-tag">
                  <GraduationCap size={14} />
                  Northeastern University
                </span>
                <span className="photo-tag">
                  <Briefcase size={14} />
                  Software Engineer
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}