import React, { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-11-22T11:30:00+05:30");

function getTimeLeft() {
  const difference = EVENT_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, completed: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    completed: false,
  };
}

function CountdownUnit({ value, label }) {
  return (
    <div className="count-unit">
      <div className="count-number">{String(value).padStart(2, "0")}</div>
      <span>{label}</span>
    </div>
  );
}

export default function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="invitation-card">
        <div className="top-flourish" aria-hidden="true">
          ✦　❀　✦
        </div>

        <p className="eyebrow">A CELEBRATION OF LOVE</p>
        <h1>Engagement Ceremony</h1>
        <p className="intro">Two hearts, one promise, a beautiful beginning.</p>

        <div className="ring-art" aria-label="Two intertwined rings">
          <span className="ring ring-left" />
          <span className="ring ring-right" />
          <span className="ring-sparkle">✧</span>
        </div>

        <div className="couple">
          <h2>
            Deepak <span>&amp;</span> Prity
          </h2>
          <p>are getting engaged!</p>
        </div>

        <div className="ornament">
          <span /> <b>THE COUNTDOWN BEGINS</b> <span />
        </div>

        {timeLeft.completed ? (
          <div className="celebration-message">
            <div className="heart">♥</div>
            <h3>The beautiful day is here!</h3>
            <p>Wishing Deepak &amp; Prity a lifetime of love and happiness.</p>
          </div>
        ) : (
          <div className="countdown" aria-live="polite">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <div className="count-separator">:</div>
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <div className="count-separator">:</div>
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <div className="count-separator">:</div>
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        )}

        <div className="date-panel">
          <div className="date-icon">♡</div>
          <div>
            <p className="date-label">SAVE THE DATE</p>
            <p className="date-value">22 November, 2026</p>
          </div>
          <div className="date-icon">♡</div>
        </div>

        <p className="closing">With love, joy &amp; a promise forever</p>
        <div className="bottom-flourish" aria-hidden="true">
          ❀　✦　❀
        </div>
      </section>

      <footer>
        MADE WITH LOVE <span>♥</span>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }
        body { margin: 0; }
        .page-shell {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 42px 18px;
          background:
            radial-gradient(circle at 12% 18%, rgba(239, 190, 185, .34), transparent 27%),
            radial-gradient(circle at 88% 82%, rgba(221, 184, 130, .24), transparent 28%),
            #fbf6f0;
          color: #563b3b;
          font-family: 'DM Sans', sans-serif;
        }
        .ambient {
          position: absolute; width: 260px; height: 260px; border: 1px solid rgba(174, 128, 91, .2);
          border-radius: 50%; pointer-events: none;
        }
        .ambient-one { top: -135px; left: -110px; box-shadow: 0 0 0 22px rgba(174,128,91,.035), 0 0 0 44px rgba(174,128,91,.025); }
        .ambient-two { bottom: -155px; right: -100px; width: 330px; height: 330px; box-shadow: 0 0 0 22px rgba(174,128,91,.035), 0 0 0 44px rgba(174,128,91,.025); }
        .invitation-card {
          width: min(100%, 760px); position: relative; z-index: 1; text-align: center;
          padding: 42px 54px 30px; border: 1px solid #e8d8c8; border-radius: 8px;
          background: rgba(255, 252, 248, .91);
          box-shadow: 0 22px 70px rgba(91, 57, 48, .10), inset 0 0 0 7px rgba(255,255,255,.7);
        }
        .invitation-card:before, .invitation-card:after {
          content: ''; position: absolute; inset: 13px; border: 1px solid rgba(194, 157, 119, .35); pointer-events: none;
        }
        .invitation-card:after { inset: 19px; border-color: rgba(194, 157, 119, .16); }
        .top-flourish, .bottom-flourish { color: #b88b61; letter-spacing: 5px; font-size: 19px; }
        .eyebrow { margin: 16px 0 8px; color: #ad8068; font-size: 10px; font-weight: 700; letter-spacing: 4px; }
        h1 { margin: 0; font: 500 clamp(36px, 6vw, 57px)/1.05 'Cormorant Garamond', serif; color: #714a49; }
        .intro { margin: 12px 0 0; color: #987a70; font: italic 17px 'Cormorant Garamond', serif; }
        .ring-art { height: 104px; position: relative; width: 190px; margin: 20px auto 4px; }
        .ring { position: absolute; top: 12px; width: 76px; height: 76px; border: 7px solid #c99b59; border-radius: 50%; transform: rotate(-25deg); box-shadow: inset 2px 2px 5px rgba(255,255,255,.9), 2px 3px 5px rgba(105,69,40,.16); }
        .ring-left { left: 34px; border-color: #d9b777; }
        .ring-right { right: 34px; border-color: #b88754; }
        .ring-sparkle { position: absolute; top: 0; left: 88px; color: #bd8e54; font-size: 23px; }
        .couple h2 { margin: 0; font: 600 clamp(39px, 7vw, 64px)/1 'Cormorant Garamond', serif; color: #704748; }
        .couple h2 span { color: #c28d75; font-style: italic; font-weight: 400; padding: 0 8px; }
        .couple p { margin: 8px 0 25px; color: #a47d72; font: italic 20px 'Cormorant Garamond', serif; }
        .ornament { display: flex; align-items: center; justify-content: center; gap: 12px; color: #b58a69; font-size: 9px; letter-spacing: 2.5px; }
        .ornament span { width: 52px; height: 1px; background: #dec9b4; }
        .countdown { display: flex; justify-content: center; align-items: center; gap: clamp(8px, 2.3vw, 22px); margin: 23px 0 27px; }
        .count-unit { min-width: clamp(58px, 12vw, 104px); }
        .count-number { font: 600 clamp(32px, 6vw, 52px)/1.1 'Cormorant Garamond', serif; color: #754d4d; font-variant-numeric: tabular-nums; }
        .count-unit span { display: block; margin-top: 7px; color: #a18478; font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
        .count-separator { color: #c49b7d; font: 36px 'Cormorant Garamond', serif; transform: translateY(-8px); }
        .date-panel { display: flex; align-items: center; justify-content: center; gap: 24px; margin: 0 auto; padding: 14px 18px; width: min(100%, 390px); border-top: 1px solid #eadbcb; border-bottom: 1px solid #eadbcb; }
        .date-icon { color: #c28e7c; font-size: 22px; }
        .date-label { margin: 0 0 3px; color: #a98470; font-size: 9px; letter-spacing: 3px; font-weight: 700; }
        .date-value { margin: 0; color: #714b49; font: 600 23px 'Cormorant Garamond', serif; }
        .closing { margin: 22px 0 13px; color: #a18478; font: italic 17px 'Cormorant Garamond', serif; }
        .celebration-message { margin: 22px 0 26px; }
        .celebration-message h3 { margin: 5px 0; font: 600 30px 'Cormorant Garamond', serif; color: #754d4d; }
        .celebration-message p { color: #987a70; font-size: 13px; }
        .heart { color: #c98783; font-size: 30px; animation: pulse 1.3s infinite; }
        footer { position: absolute; bottom: 14px; color: #b39a8b; font-size: 8px; letter-spacing: 3px; }
        footer span { color: #c98783; }
        @keyframes pulse { 50% { transform: scale(1.18); } }
        @media (max-width: 560px) {
          .page-shell { padding: 25px 12px 45px; }
          .invitation-card { padding: 35px 22px 25px; }
          .invitation-card:before { inset: 10px; }
          .invitation-card:after { inset: 15px; }
          .eyebrow { letter-spacing: 2.5px; }
          .intro { font-size: 15px; }
          .ring-art { transform: scale(.88); margin-top: 13px; margin-bottom: -2px; }
          .countdown { gap: 5px; }
          .count-unit { min-width: 54px; }
          .count-unit span { letter-spacing: 1px; font-size: 8px; }
          .count-separator { font-size: 25px; }
          .date-panel { gap: 12px; }
          .date-value { font-size: 21px; }
        }
      `}</style>
    </main>
  );
}
