import React, { useEffect, useState } from "react";
import Feedback from "./Feedback";

const EVENT_DATE = new Date("2026-11-22T11:30:00+05:30");

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Aradhya+Marriage+Hall%2C+Central+Jail%2C+Buxar%2C+Bihar+802101";

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, completed: true };
  }

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    completed: false,
  };
}



function TimeBox({ value, label }) {
  return (
    <div className="time-box">
      <div className="time-value">{String(value).padStart(2, "0")}</div>
      <div className="time-label">{label}</div>
    </div>
  );
}

export default function App() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const [themeIndex, setThemeIndex] = useState(0);

useEffect(() => {
  const themeTimer = setInterval(() => {
    setThemeIndex((previous) => (previous + 1) % 5);
  }, 6000);

  return () => clearInterval(themeTimer);
}, []);

  return (
    <main className={`page theme-${themeIndex}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Great+Vibes&family=Montserrat:wght@300;400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #eadbd6;
          font-family: 'Montserrat', sans-serif;
        }

        .page {
          min-height: 100vh;
          padding: 30px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 10% 10%, rgba(255,255,255,.65), transparent 35%),
            radial-gradient(circle at 90% 90%, rgba(177,112,112,.18), transparent 35%),
            #eadbd6;
        }

        .invitation {
          width: 100%;
          max-width: 790px;
          position: relative;
          overflow: hidden;
          padding: 55px 55px 42px;
          text-align: center;
          color: #f9ead5;
          background:
            radial-gradient(ellipse at top, rgba(169,100,111,.55), transparent 65%),
            linear-gradient(145deg, #542b3b, #351a29 65%, #492332);
          box-shadow: 0 25px 80px rgba(54,25,36,.25);
          border: 1px solid #c5a06d;
          outline: 1px solid rgba(197,160,109,.55);
          outline-offset: -10px;
          animation: reveal 1.2s ease both;
        }

        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .invitation::before,
        .invitation::after {
          position: absolute;
          content: "❧";
          color: rgba(225,190,143,.18);
          font-size: 150px;
          pointer-events: none;
        }

        .invitation::before {
          top: -40px;
          left: -25px;
          transform: rotate(-35deg);
        }

        .invitation::after {
          bottom: -40px;
          right: -25px;
          transform: rotate(145deg);
        }

        .content {
          position: relative;
          z-index: 1;
        }

        .ornament {
          color: #e5c28e;
          font-size: 34px;
          margin-bottom: 15px;
        }

        .top-label {
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: #e8cba3;
        }

        .heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 7vw, 58px);
          font-weight: 300;
          line-height: 1.05;
          margin-top: 17px;
          color: #fff1df;
        }

        .subheading {
          font-size: 9px;
          letter-spacing: 4px;
          color: #d7b58e;
          margin-top: 12px;
        }

        .divider {
          margin: 25px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: #d9b47e;
        }

        .divider::before,
        .divider::after {
          content: "";
          width: 75px;
          height: 1px;
          background: #b48b65;
        }

        .names {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(75px, 13vw, 112px);
          line-height: 1.1;
          color: #f0d2a3;
          text-shadow: 0 4px 20px rgba(0,0,0,.2);
        }

        .and {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 29px;
          color: #fff0dc;
          margin: 0;
        }

        .promise {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-style: italic;
          color: #e8d1b7;
          margin-top: 12px;
        }

        .date-pill {
          display: inline-block;
          border-top: 1px solid #b58b61;
          border-bottom: 1px solid #b58b61;
          padding: 12px 25px;
          margin-top: 24px;
          color: #f0d4a9;
          letter-spacing: 3px;
          font-size: 11px;
        }

        .rings {
          height: 54px;
          margin: 22px auto 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ring {
          width: 38px;
          height: 38px;
          border: 4px solid #d9b77e;
          border-radius: 50%;
          margin: 0 -5px;
          position: relative;
        }

        .ring::after {
          content: "✦";
          position: absolute;
          top: -14px;
          left: 9px;
          font-size: 14px;
          color: #f0d4a9;
        }

        .count-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          font-weight: 400;
          color: #f0d7b8;
          margin-top: 8px;
        }

        .count-caption {
          font-size: 9px;
          letter-spacing: 3px;
          color: #cba985;
          margin-top: 5px;
          margin-bottom: 18px;
        }

        .countdown {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          max-width: 510px;
          margin: 0 auto;
        }

        .time-box {
          border: 1px solid rgba(218,183,128,.65);
          background: rgba(255,255,255,.055);
          padding: 13px 5px 11px;
        }

        .time-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 5vw, 42px);
          font-weight: 600;
          color: #f1d4a6;
          font-variant-numeric: tabular-nums;
        }

        .time-label {
          font-size: 8px;
          letter-spacing: 2px;
          color: #d5b998;
          margin-top: 4px;
          text-transform: uppercase;
        }

        .event-info {
          margin-top: 30px;
          padding: 20px 10px 0;
          border-top: 1px solid rgba(207,171,125,.4);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px 12px;
        }

        .info-item {
          text-align: center;
        }

        .info-icon {
          color: #e0bc8d;
          font-size: 19px;
          margin-bottom: 7px;
        }

        .info-label {
          font-size: 9px;
          letter-spacing: 3px;
          color: #cba984;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .info-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 23px;
          color: #fff0dc;
        }

        .info-description {
          font-size: 10px;
          line-height: 1.7;
          color: #d4bda5;
          margin-top: 4px;
        }

        .venue {
          grid-column: 1 / -1;
          padding-top: 17px;
          border-top: 1px solid rgba(207,171,125,.25);
        }

        .map-link {
          display: inline-block;
          margin-top: 12px;
          padding: 10px 20px;
          border: 1px solid #cba779;
          text-decoration: none;
          color: #f0d6ae;
          font-size: 9px;
          letter-spacing: 2px;
          transition: .3s;
        }

        .map-link:hover {
          background: #cba779;
          color: #351a29;
        }

        .closing {
          font-family: 'Great Vibes', cursive;
          color: #e8c89c;
          font-size: 38px;
          margin-top: 28px;
        }

        .footer-line {
          color: #c59b70;
          font-size: 17px;
          margin-top: 10px;
        }

        @media(max-width: 560px) {
          .page {
            padding: 15px 10px;
          }

          .invitation {
            padding: 45px 23px 30px;
            outline-offset: -7px;
          }

          .top-label {
            letter-spacing: 3px;
            font-size: 9px;
          }

          .subheading {
            letter-spacing: 2px;
            font-size: 8px;
          }

          .date-pill {
            letter-spacing: 1.5px;
            font-size: 9px;
            padding: 11px 15px;
          }

          .countdown {
            gap: 6px;
          }

          .time-box {
            padding: 12px 2px 9px;
          }

          .time-label {
            letter-spacing: 1px;
            font-size: 7px;
          }

          .info-value {
            font-size: 20px;
          }

          .info-description {
            font-size: 9px;
          }

          .closing {
            font-size: 34px;
          }
        }
          /* Smooth automatic theme transition */

.page {
  transition: background 2s ease;
}

.invitation {
  transition:
    background 2s ease,
    filter 2s ease,
    box-shadow 2s ease;
}

/* Royal Burgundy */
.theme-0 .invitation {
  filter: hue-rotate(0deg);
}

/* Blush Romance */
.theme-1 .invitation {
  filter: hue-rotate(325deg) saturate(0.9);
}

/* Royal Ivory */
.theme-2 .invitation {
  filter: hue-rotate(12deg) sepia(0.12) brightness(1.12);
}

/* Emerald Elegance */
.theme-3 .invitation {
  filter: hue-rotate(105deg) saturate(0.85);
}

/* Midnight Royal */
.theme-4 .invitation {
  filter: hue-rotate(190deg) saturate(0.8);
}

.theme-0 {
  background: #eadbd6;
}

.theme-1 {
  background: #f0dce3;
}

.theme-2 {
  background: #eee7d6;
}

.theme-3 {
  background: #dce6dc;
}

.theme-4 {
  background: #dce0eb;
}
      `}</style>

      <div className="invitation">
        <div className="content">
          <div className="ornament">❧ ✦ ❧</div>

          <div className="top-label">With the blessings of our families</div>

          <h1 className="heading">Engagement Ceremony</h1>

          <div className="subheading">A BEAUTIFUL BEGINNING OF FOREVER</div>

          <div className="divider">✦</div>

          <div className="names">Deepak</div>
          <div className="and">&</div>
          <div className="names">Prity</div>

          <div className="promise">
            Two hearts, one promise, a lifetime of love.
          </div>

          <div className="date-pill">
            ✦ &nbsp; SUNDAY · 22 NOVEMBER 2026 &nbsp; ✦
          </div>

          <div className="rings">
            <div className="ring"></div>
            <div className="ring"></div>
          </div>

          <h2 className="count-heading">Counting Down to Forever</h2>

          <p className="count-caption">EVERY SECOND BRINGS US CLOSER</p>

          {time.completed ? (
            <div className="closing">The celebration begins! ♥</div>
          ) : (
            <div className="countdown">
              <TimeBox value={time.days} label="Days" />
              <TimeBox value={time.hours} label="Hours" />
              <TimeBox value={time.minutes} label="Minutes" />
              <TimeBox value={time.seconds} label="Seconds" />
            </div>
          )}

          <div className="event-info">
            <div className="info-item">
              <div className="info-icon">♡</div>
              <div className="info-label">The Date</div>
              <div className="info-value">22 November</div>
              <div className="info-description">Sunday · 2026</div>
            </div>

            <div className="info-item">
              <div className="info-icon">◷</div>
              <div className="info-label">The Time</div>
              <div className="info-value">11:30 AM</div>
              <div className="info-description">Indian Standard Time</div>
            </div>

            <div className="info-item venue">
              <div className="info-icon">⌖</div>
              <div className="info-label">The Venue</div>
              <div className="info-value">Aradhya Marriage Hall</div>
              <div className="info-description">
                Central Jail, Buxar, Bihar – 802101
              </div>

              <a
                className="map-link"
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                ✦ &nbsp; VIEW LOCATION
              </a>
            </div>
          </div>

          <div className="closing">A New Chapter Begins...</div>

          <div className="footer-line">❧ ♥ ❧</div>
          <Feedback />
        </div>
      </div>
    </main>
  );
}
