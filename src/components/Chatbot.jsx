import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { chatbotContext, personal, skills, projects, experience } from "../assets/data";
import "../styles/chatbot.css";

// ─── Smart local chatbot (no API key needed) ───
// For OpenAI integration, see comments at bottom of file.

const SUGGESTIONS = [
  "What are your skills?",
  "Tell me about your experience",
  "What projects have you built?",
  "How can I contact you?",
];

// ─── Knowledge base built from data.js ───
function generateResponse(input) {
  const q = input.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|yo|sup|what'?s up|howdy)/.test(q)) {
    return `Hey there! 👋 I'm Nishant's portfolio assistant. I can tell you about his skills, experience, projects, or how to get in touch. What would you like to know?`;
  }

  // Name / Who
  if (/who (is|are)|your name|about (you|nishant)|tell me about/.test(q) && !/project|skill|experience|work/.test(q)) {
    return `Nishant Patil is a Software Engineer currently pursuing his Master's in Information Systems at Northeastern University (4.0 GPA). He has professional experience building payment systems handling 500K+ daily transactions at Lyra Networks and engineering real-time treasury platforms at AgileGenX Fintech. He's also a Smart India Hackathon 2023 winner his AI legal assistant is used by India's Ministry of Law.`;
  }

  // Skills
  if (/skill|tech|stack|language|framework|tool|what (can|do) (you|he) (know|use)|proficien/.test(q)) {
    const formatted = skills.map(s => `**${s.category}:** ${s.items.join(", ")}`).join("\n\n");
    return `Here's Nishant's technical toolkit:\n\n${formatted}\n\nHe's strongest in full-stack development with Java/Spring Boot, React/Next.js, Python, and cloud infrastructure on AWS.`;
  }

  // Projects
  if (/project|built|portfolio|hack|nexus|parkspace|park assist|legal|docitron|health|super hub|university|restaurant|retire|what.*made|what.*build/.test(q)) {
    const top = projects.slice(0, 5).map(p => `• **${p.title}** — ${p.tagline}`).join("\n");
    return `Here are some of Nishant's ${projects.length} notable projects:\n\n${top}\n\nHighlights: The AI Legal Document Assistant won Smart India Hackathon 2023 and is used by India's Ministry of Law. Docitron is an AI medical scribe reducing physician burnout. AI Super Hub features 50+ courses and 70+ AI tools.\n\nWant details on any specific project?`;
  }

  // Experience / Work
  if (/experience|work|job|intern|company|lyra|agile|employ|career|resume/.test(q)) {
    return `Nishant has three key professional roles:\n\n• **Software Engineer Intern @ Lyra Networks** (Feb–Jun 2025) — Built payment gateway APIs (HDFC, Amazon Pay, Amex, ICICI) supporting 500K+ daily transactions with 99.9% uptime. Automated CI/CD with Jenkins + Docker.\n\n• **Software Engineer Intern @ AgileGenX Fintech** (Jun–Nov 2023) — Engineered a full-stack treasury management platform with React + Node.js, real-time WebSocket dashboards for 20+ finance teams.\n\n• **Student Software Engineer @ University of Mumbai** (Jun 2023–Feb 2025) — Built a student portal for 1,000+ users, led WordPress → Next.js migration with 50% faster load times.`;
  }

  // Education
  if (/education|university|degree|college|gpa|northeastern|mumbai|school|study|master|bachelor/.test(q)) {
    return `Nishant's education:\n\n• **MS in Information Systems** Northeastern University, Boston (Sep 2025–Dec 2027, 4.0 GPA)\n\n• **B.E. in Computer Engineering** University of Mumbai, Fr. CRCE (Jul 2021–Jun 2025, 3.7 GPA)\n\nHe specializes in software engineering, cloud architecture, and machine learning.`;
  }

  // Contact
  if (/contact|email|reach|connect|hire|phone|linkedin|github|mail/.test(q)) {
    return `You can reach Nishant through:\n\n• **Email:** ${personal.email}\n• **Phone:** ${personal.phone}\n• **LinkedIn:** linkedin.com/in/nishant-patil-cs\n• **GitHub:** github.com/NishantNEU\n• **Location:** Boston, MA\n\nOr just scroll down to the contact form on this page!`;
  }

  // Location
  if (/where|location|based|live|city/.test(q)) {
    return `Nishant is based in **Boston, MA**, where he's pursuing his Master's at Northeastern University. He previously lived in Mumbai, India.`;
  }

  // Achievements
  if (/achieve|award|win|hackathon|smart india|accomplishment/.test(q)) {
    return `Nishant's key achievements include:\n\n• **Smart India Hackathon 2023 Winner** AI Legal Document Assistant now used by India's Ministry of Law\n• Processed **10K+ document queries** in production\n• Built payment systems handling **500K+ daily transactions** with **99.9% uptime**\n• Maintained a **4.0 GPA** at Northeastern University\n Recently he won Convergence 2026 his first but not last victory at Northeastern University's premier hackathon!`;
  }

  // AI / ML specific
  if (/ai|machine learning|ml|gpt|openai|rag|llm|deep learning|gemini|langchain/.test(q)) {
    return `Nishant works extensively with AI/ML:\n\n• **AI Legal Assistant** RAG pipeline with LangChain, GPT-4, FAISS vector search, processing 10K+ legal documents\n• **Docitron** AI medical scribe using Ollama + Whisper for real-time clinical note generation\n• **AI Super Hub** Education platform with Google Gemini-powered chat assistant\n• **Retirement Optimizer** GPT-4 powered financial advice engine\n\nHis AI toolkit includes OpenAI GPT-4, Google Gemini, LangChain, FAISS, RAG architecture, prompt engineering, and ML integration.`;
  }

  // Cloud / DevOps
  if (/cloud|aws|docker|devops|deploy|kubernetes|jenkins|terraform|ci.?cd/.test(q)) {
    return `Nishant has strong cloud & DevOps experience:\n\n• **AWS:** EC2, ECS, S3, RDS, Lambda, CloudFormation, CloudWatch, Elastic Load Balancing\n• **Containerization:** Docker, Kubernetes\n• **CI/CD:** Jenkins, GitHub Actions\n• **IaC:** Terraform, CloudFormation\n\nAt Lyra Networks, he automated CI/CD pipelines that reduced deployment time by 60%.`;
  }

  // Interests / Hobbies
  if (/hobby|hobbies|interest|fun|free time|outside work/.test(q)) {
    return `Outside of engineering, Nishant enjoys playing billiards and following Formula 1 racing. He's also passionate about competitive programming and hackathon competitions!`;
  }

  // Thank you
  if (/thank|thanks|thx|appreciate/.test(q)) {
    return `You're welcome! 😊 Feel free to ask anything else about Nishant, or scroll down to the contact form to get in touch directly.`;
  }

  // Bye
  if (/bye|goodbye|see ya|later|ciao/.test(q)) {
    return `Goodbye! Thanks for stopping by Nishant's portfolio. Feel free to come back anytime or reach out at ${personal.email}. Have a great day! ✨`;
  }

  // Fallback — unrelated or unclear
  return `I'm specifically trained to answer questions about Nishant Patil his skills, experience, projects, education, and how to contact him. Could you rephrase your question? Here are some things I can help with:\n\n• His technical skills & expertise\n• Professional experience\n• Projects he's built\n• Education background\n• How to get in touch`;
}

// ─── Simple markdown-like bold rendering ───
function renderText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    // Handle newlines
    return part.split("\n").map((line, j) => (
      <span key={`${i}-${j}`}>
        {j > 0 && <br />}
        {line}
      </span>
    ));
  });
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I'm Nishant's AI assistant. Ask me about his skills, experience, projects, or how to reach him. 💬",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = async (text) => {
    const msg = (text || input).trim();
    if (!msg) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setInput("");
    setTyping(true);

    // Simulate thinking delay
    const delay = 400 + Math.random() * 800;
    await new Promise((r) => setTimeout(r, delay));

    const response = generateResponse(msg);
    setTyping(false);
    setMessages((prev) => [...prev, { role: "bot", text: response }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestion = (s) => handleSend(s);

  return (
    <>
      {/* Floating trigger */}
      <button
        className={`chatbot-trigger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      <div className={`chatbot-window ${isOpen ? "open" : ""}`} role="dialog" aria-label="Chat assistant">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-avatar">NP</div>
          <div className="chatbot-header-info">
            <h4>Nishant's Assistant</h4>
            <p>
              <span className="chatbot-status-dot" />
              Always available
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.role}`}>
              {renderText(msg.text)}
            </div>
          ))}
          {typing && (
            <div className="chat-typing">
              <span /><span /><span />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick suggestions (show only at start) */}
        {messages.length <= 2 && (
          <div className="chat-suggestions">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="chat-suggestion-btn"
                onClick={() => handleSuggestion(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chatbot-input">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask about Nishant..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="chatbot-send"
            onClick={() => handleSend()}
            disabled={!input.trim() || typing}
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
}

/*
 ═══════════════════════════════════════════════════════════════
  UPGRADE TO OPENAI — When you want real AI responses:
 ═══════════════════════════════════════════════════════════════

  1. Create file: netlify/functions/chat.js

     const fetch = require("node-fetch");

     exports.handler = async (event) => {
       const { message } = JSON.parse(event.body);
       const res = await fetch("https://api.openai.com/v1/chat/completions", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
         },
         body: JSON.stringify({
           model: "gpt-3.5-turbo",
           messages: [
             { role: "system", content: CHATBOT_CONTEXT },
             { role: "user", content: message },
           ],
           max_tokens: 300,
           temperature: 0.7,
         }),
       });
       const data = await res.json();
       return {
         statusCode: 200,
         body: JSON.stringify({ reply: data.choices[0].message.content }),
       };
     };

  2. Add OPENAI_API_KEY to Netlify Environment Variables

  3. Replace generateResponse() call with:

     const res = await fetch("/.netlify/functions/chat", {
       method: "POST",
       body: JSON.stringify({ message: msg }),
     });
     const data = await res.json();
     // Use data.reply instead of generateResponse()

 ═══════════════════════════════════════════════════════════════
*/