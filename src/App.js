import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [step, setStep] = useState(0); // 0: Envelope, 1: Main Apology, 2: Celebration
  const [activeTab, setActiveTab] = useState("shayari");
  const [noPos, setNoPos] = useState({ top: "70%", left: "55%" });
  const [giftOpened, setGiftOpened] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate floating hearts background
  useEffect(() => {
    const p = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
    }));
    setParticles(p);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5xjvgyn",
        "template_z0p5anp",
        e.target,
        "aowNidnB2MCUU6IYE",
      )
      .then(() => {
        alert("Feedback sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Something went wrong.");
      });
  };

  const handleNoHover = () => {
    const randomTop = Math.floor(Math.random() * 50) + 30;
    const randomLeft = Math.floor(Math.random() * 70) + 15;
    setNoPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(105vh) scale(0.6); opacity: 0; }
            50% { opacity: 0.8; }
            100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
          }
          @keyframes pulseHeart {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); }
          }
          @keyframes glow {
            0% { box-shadow: 0 0 15px rgba(255, 77, 109, 0.4); }
            50% { box-shadow: 0 0 35px rgba(255, 77, 109, 0.8); }
            100% { box-shadow: 0 0 15px rgba(255, 77, 109, 0.4); }
          }
          @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>

      {/* Floating Background Hearts */}
      <div style={styles.bgParticles}>
        {particles.map((p) => (
          <span
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.left}%`,
              bottom: "-20px",
              fontSize: `${p.size}px`,
              animation: `float ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
              pointerEvents: "none",
            }}
          >
            {["❤️", "💖", "💝", "🌸", "✨"][p.id % 5]}
          </span>
        ))}
      </div>

      {/* STEP 0: ENVELOPE INTRO */}
      {step === 0 && (
        <div style={styles.envelopeCard} onClick={() => setStep(1)}>
          <div style={styles.envelopeIcon}>💌</div>
          <h2 style={styles.envelopeTitle}>Apka Husband Deepu ke taraf se</h2>
          <h2 style={styles.envelopeTitle}>Ek Khaas Sandesh Aapke Liye</h2>
          <p style={styles.envelopeSub}>
            Click karke envelope kholein, meri jaan...
          </p>
          <button style={styles.openBtn}>Khola Jaye ✨</button>
        </div>
      )}

      {/* STEP 1: MAIN APOLOGY DASHBOARD */}
      {step === 1 && (
        <div style={styles.mainCard}>
          <div style={styles.headerBadge}>❤️ Meri Zindagi, Meri Wife ❤️</div>
          <h1 style={styles.mainTitle}>I Am So Sorry, Meri Jaan!</h1>
          <p style={styles.mainSubtitle}>
            Galti ho gayi hai, par aapke bina dil kahin nahi lagta...
          </p>

          {/* Navigation Tabs */}
          <div style={styles.tabContainer}>
            <button
              style={{
                ...styles.tabBtn,
                ...(activeTab === "shayari" ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab("shayari")}
            >
              📜 Shayari
            </button>
            <button
              style={{
                ...styles.tabBtn,
                ...(activeTab === "promises" ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab("promises")}
            >
              🤝 Mere Vaade
            </button>
            <button
              style={{
                ...styles.tabBtn,
                ...(activeTab === "gift" ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab("gift")}
            >
              🎁 Surprise Gift
            </button>
          </div>

          {/* Tab Content */}
          <div style={styles.contentBox}>
            {activeTab === "shayari" && (
              <div>
                <div style={styles.shayariCard}>
                  <p style={styles.shayariText}>
                    "यह माना की बड़े ही बदनाम है हम,
                    <br />
                    कर जाते है शरारत क्यूंकि इंसान है हम,
                    <br />
                    लगाया न करिये हमारी बातों को दिल से,
                    <br />
                    आपको तो पता है कितने नादान है हम !"
                  </p>
                </div>
                <div style={styles.shayariCard}>
                  <p style={styles.shayariText}>
                    "खता हो गयी तो सज़ा सुना दो,
                    <br />
                    आपके खफा होने की वजह बता दो,
                    <br />
                    जो सजा देना चाहो मंज़ूर है हमे,
                    <br />
                    पर हमसे रूठे रहने का ख्याल मिटा दो !"
                  </p>
                </div>
              </div>
            )}

            {activeTab === "promises" && (
              <div style={styles.listContainer}>
                <p style={styles.listItem}>
                  ✨ Dubara kabhi apko gali nhi dunga.
                </p>
                <p style={styles.listItem}>
                  ✨ Ab kabhi bina wajah aapko pareshan nahi karunga.
                </p>
                <p style={styles.listItem}>
                  ✨ Aapke gusse ko bhi pyaar se jhelunga.
                </p>
                <p style={styles.listItem}>
                  ✨ Aapka har din khubsurat banane ki poori koshish karunga.
                </p>
              </div>
            )}

            {activeTab === "gift" && (
              <div style={{ textAlign: "center", padding: "10px" }}>
                {!giftOpened ? (
                  <div
                    onClick={() => setGiftOpened(true)}
                    style={styles.giftBox}
                  >
                    <span style={{ fontSize: "50px" }}>🎁</span>
                    <p
                      style={{
                        marginTop: "10px",
                        color: "#c9184a",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      Click to open your gift!
                    </p>
                  </div>
                ) : (
                  <div style={styles.unwrappedGift}>
                    <h3 style={{ color: "#c9184a", marginBottom: "8px" }}>
                      💖 Unlimited Hugs & Kisses 💖
                    </h3>
                    <p style={{ fontSize: "15px", color: "#555" }}>
                      Aur saath mein lifetime ki guarantee ki ab aapko kabhi
                      gali nahi dunga, agar galti se dila gya to mujhe maf ker
                      dena please......!
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "feedback" && (
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      <i className="fa-solid fa-message me-2 text-primary"></i>
                      Feedback
                    </label>

                    <textarea
                      rows="5"
                      className="form-control"
                      name="message"
                      placeholder="Write your feedback here..."
                      required
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg fw-bold">
                      <i className="fa-solid fa-paper-plane me-2"></i>
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Advance I Love You Notice */}
          <div style={styles.advanceLoveBanner}>
            💌 Advance me <strong>I Love You</strong>, mujhe maaf karne ke liye!
            💌
          </div>

          {/* Action Buttons */}
          <div style={styles.buttonArea}>
            <button style={styles.forgiveBtn} onClick={() => setStep(2)}>
              ❤️ Maaf Kiya (Forgive You) ❤️
            </button>
            <button
              style={{
                ...styles.angryBtn,
                position: "absolute",
                top: noPos.top,
                left: noPos.left,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={handleNoHover}
              onClick={handleNoHover}
            >
              😒 Abhi Gussa Hu
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: CELEBRATION SCREEN */}
      {step === 2 && (
        <div style={styles.celebrationCard}>
          <div style={styles.partyEmoji}>🎉🥰💖✨</div>
          <h1 style={styles.celebrationTitle}>Thank You So Much, Meri Jaan!</h1>
          <p style={styles.celebrationSub}>
            Mujhe pata tha meri pyaari wife sabse badi dilwaali hai aur apne
            pati ko maaf kar degi!
          </p>
          <div style={styles.finalShayari}>
            <p
              style={{
                fontStyle: "italic",
                color: "#444",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              "Aapki ek muskaan se hamari poori duniya roshan ho jaati hai.
              <br />
              Love You Forever & Always! ❤️"
            </p>
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <style>
              {`
      .custom-feedback-card {
        background: #ffffff;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        width: 100%;
        max-width: 480px;
        font-family: inherit;
        border: 1px solid #f0f0f0;
      }
      .custom-form-group {
        margin-bottom: 20px;
      }
      .custom-label {
        display: flex;
        align-items: center;
        font-weight: 600;
        color: #333;
        margin-bottom: 8px;
        font-size: 15px;
      }
      .custom-textarea {
        width: 100%;
        padding: 14px 16px;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        font-size: 15px;
        outline: none;
        resize: vertical;
        transition: all 0.3s ease;
        box-sizing: border-box;
        background-color: #fafbfc;
        color: #2d3748;
      }
      .custom-textarea:focus {
        border-color: #ff4d6d;
        box-shadow: 0 0 0 4px rgba(255, 77, 109, 0.15);
        background-color: #fff;
      }
      .custom-submit-btn {
        width: 100%;
        background: linear-gradient(135deg, #ff4d6d 0%, #c9184a 100%);
        color: white;
        border: none;
        padding: 14px 20px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 12px;
        cursor: pointer;
        box-shadow: 0 6px 15px rgba(201, 24, 74, 0.3);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .custom-submit-btn:hover {
        background: linear-gradient(135deg, #e63956 0%, #a8133b 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(201, 24, 74, 0.4);
      }
    `}
            </style>

            <div className="custom-feedback-card">
              <form onSubmit={handleSubmit}>
                <div className="custom-form-group">
                  <label className="custom-label">
                    <i
                      className="fa-solid fa-message"
                      style={{ color: "#ff4d6d", marginRight: "8px" }}
                    ></i>
                    Feedback
                  </label>
                  <textarea
                    rows="5"
                    className="custom-textarea"
                    name="message"
                    placeholder="Copy from anywhere and paste your feedback here..."
                    required
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="custom-submit-btn">
                    <i className="fa-solid fa-paper-plane"></i>
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
          <button
            style={styles.restartBtn}
            onClick={() => {
              setStep(1);
              setGiftOpened(false);
            }}
          >
            🔄 Dobara Dekhein
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
    padding: "15px",
  },
  bgParticles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 1,
  },
  envelopeCard: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(12px)",
    padding: "45px 35px",
    borderRadius: "30px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
    textAlign: "center",
    maxWidth: "420px",
    width: "100%",
    zIndex: 2,
    animation: "bounceIn 0.8s ease",
    cursor: "pointer",
    border: "2px solid rgba(255,255,255,0.8)",
  },
  envelopeIcon: {
    fontSize: "65px",
    marginBottom: "15px",
    animation: "pulseHeart 2s infinite",
  },
  envelopeTitle: {
    fontSize: "24px",
    color: "#b00020",
    fontWeight: "700",
    marginBottom: "8px",
  },
  envelopeSub: {
    fontSize: "15px",
    color: "#666",
    marginBottom: "25px",
  },
  openBtn: {
    background: "linear-gradient(135deg, #ff4d6d 0%, #c9184a 100%)",
    color: "white",
    border: "none",
    padding: "12px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "30px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(201, 24, 74, 0.4)",
  },
  mainCard: {
    background: "rgba(255, 255, 255, 0.94)",
    backdropFilter: "blur(15px)",
    padding: "30px 25px",
    borderRadius: "25px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
    maxWidth: "620px",
    width: "100%",
    textAlign: "center",
    zIndex: 2,
    position: "relative",
    animation: "bounceIn 0.6s ease",
    border: "2px solid rgba(255, 255, 255, 0.9)",
  },
  headerBadge: {
    display: "inline-block",
    background: "#ffe6eb",
    color: "#d63384",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  mainTitle: {
    fontSize: "28px",
    color: "#b00020",
    marginBottom: "6px",
    fontWeight: "800",
  },
  mainSubtitle: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "20px",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  tabBtn: {
    background: "#f1f1f1",
    border: "none",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    color: "#555",
    transition: "all 0.3s",
  },
  activeTab: {
    background: "#ff4d6d",
    color: "white",
    boxShadow: "0 4px 10px rgba(255, 77, 109, 0.3)",
  },
  contentBox: {
    minHeight: "155px",
    background: "#fff9fa",
    borderRadius: "15px",
    padding: "15px",
    border: "1px solid #ffd1dc",
    marginBottom: "15px",
    textAlign: "left",
  },
  shayariCard: {
    marginBottom: "10px",
    paddingBottom: "10px",
    borderBottom: "1px dashed #ffccd5",
  },
  shayariText: {
    fontSize: "14px",
    color: "#444",
    lineHeight: "1.5",
    fontStyle: "italic",
    margin: 0,
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  listItem: {
    fontSize: "14px",
    color: "#444",
    fontWeight: "500",
    margin: 0,
  },
  giftBox: {
    background: "#ffe6eb",
    padding: "20px",
    borderRadius: "12px",
    cursor: "pointer",
    border: "2px dashed #ff4d6d",
  },
  unwrappedGift: {
    background: "#fff0f3",
    padding: "20px",
    borderRadius: "12px",
    border: "2px solid #ff4d6d",
    textAlign: "center",
  },
  advanceLoveBanner: {
    fontSize: "15px",
    color: "#d63384",
    fontWeight: "bold",
    margin: "15px 0",
  },
  buttonArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "65px",
    position: "relative",
    marginTop: "10px",
  },
  forgiveBtn: {
    background: "linear-gradient(135deg, #ff4d6d 0%, #c9184a 100%)",
    color: "white",
    border: "none",
    padding: "13px 26px",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "30px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(201, 24, 74, 0.4)",
    zIndex: 2,
  },
  angryBtn: {
    background: "#e0e0e0",
    color: "#333",
    border: "none",
    padding: "10px 18px",
    fontSize: "13px",
    fontWeight: "bold",
    borderRadius: "30px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    zIndex: 3,
  },
  celebrationCard: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(15px)",
    padding: "40px 30px",
    borderRadius: "25px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    zIndex: 2,
    animation: "bounceIn 0.8s ease",
  },
  partyEmoji: {
    fontSize: "45px",
    marginBottom: "10px",
  },
  celebrationTitle: {
    fontSize: "26px",
    color: "#b00020",
    marginBottom: "10px",
    fontWeight: "800",
  },
  celebrationSub: {
    fontSize: "15px",
    color: "#444",
    marginBottom: "20px",
  },
  finalShayari: {
    background: "#fff0f3",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
    borderLeft: "4px solid #ff4d6d",
  },
  restartBtn: {
    background: "linear-gradient(135deg, #ff4d6d 0%, #c9184a 100%)",
    color: "white",
    border: "none",
    padding: "10px 22px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "30px",
    cursor: "pointer",
  },
};

export default App;
