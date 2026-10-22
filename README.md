# Hi, I'm Shahad Busaleh 👋

**AI Application Developer** · Agentic AI · Multi-Agent Systems · RAG · Full Stack (Next.js · .NET · Python)<br>
📍 Eastern Province, Saudi Arabia · 🏆 1st Place, Rkiza V-Camp 2026

I build agentic AI systems and the full-stack applications around them, from architecture to production. I care about AI that real organizations can trust: answers grounded in sources, risky actions under human approval, and results that are measured, not assumed.

🌐 **Portfolio:** [shahadbusaleh.github.io/ShahadBusaleh](https://shahadbusaleh.github.io/ShahadBusaleh/)<br>
💼 [LinkedIn](https://www.linkedin.com/in/shahadbusaleh/) · 🎖️ [Credly](https://www.credly.com/users/shahad-busaleh/badges/credly) · ✉️ shahadbusaleh753@gmail.com

---

## 🚀 Featured Projects

### [Yusor (يُسر): Bilingual Multi-Agent HR Assistant](https://github.com/ShahadBusaleh/YusrAgent)
*Agentic AI Bootcamp Capstone, SDA & WeCloudData · Team of 4*

An Arabic/English HR assistant that answers from the HR database and Saudi Labor Law, cites its sources, checks every answer before the user sees it, and keeps risky actions under human approval.
- Hybrid RAG (Qdrant + BM25 + Reciprocal Rank Fusion) over 176 policy and Labor Law documents
- Ragas faithfulness **0.94**, context recall **0.91**, **54/54** golden cases, **158** unit tests passing
- I owned the repository, led the evaluation harness (Ragas + LLM-as-judge), and built the Growth Agent and the initial API backend

`Python` `FastAPI` `Qdrant` `Groq` `Streamlit` `Docker`

### [Sada (صدى): AI Audience Engagement Platform](https://github.com/DaleenMilibari/Sada)
*AgentX Hackathon · AI Agent & Backend Developer · Team Project*

A multi-agent platform that helps the Saudi Broadcasting Authority's content teams decide what to publish, on which channel, and when, based on real audience engagement data.
- Built the AI agents and FastAPI backend; integrated YouTube Data API v3, X API v2, and Instagram Graph API within fixed quota and cost budgets
- Real data from 9 official SBA YouTube channels: 7,777 videos, ~95M views over 180 days
- Sentiment checked against blind human labels, trend predictions backtested against a baseline, every recommendation linked to its evidence

`Python` `FastAPI` `Gemini` `PostgreSQL` `React` `TypeScript`

### [Travel-In: AI Travel Concierge](https://travelin.blog/) 🥇
*Winner, Rkiza V-Camp 2026 · Full Stack Developer · Team of 4*

An AI travel concierge built and shipped in 7 days: personalized day-by-day itineraries with live flight and hotel pricing and checkout.

`Next.js` `TypeScript` `Gemini` `Prisma` `PostgreSQL` `Clerk`

### Enterprise work (private)
- **AI Meeting Assistant:** a privacy-first meeting transcription and reporting platform on a local LLM, with Microsoft Graph and Entra ID SSO
- **IT Equipment Management System:** a multi-role approval workflow (Preparer → Issuer → Receiver) with bilingual PDF generation, deployed on IIS

---

## 🛠️ Tech Stack

**AI:** LLMs · Multi-Agent Systems · RAG · LangChain · Qdrant · Prompt Engineering · Ragas / LLM-as-judge · OpenAI · Gemini<br>
**Backend:** Python · FastAPI · C# · ASP.NET Core · Node.js · REST APIs<br>
**Frontend:** TypeScript · React · Next.js · Tailwind CSS · Flutter<br>
**Data:** PostgreSQL · SQL Server · SQLite · EF Core · Prisma · Power BI · Tableau<br>
**Cloud & Tools:** Microsoft Azure · Microsoft Graph · Docker · Git · IIS

---

## 📚 Learning & Community

- ✅ Completed the **Agentic AI Bootcamp** (SDA & WeCloudData, 2026)
- 🤝 **AI Committee Member (volunteer)** at SDC | Saudi Developers Community, translating AI and tech research for the developer community
- 🎓 B.S. in Computer Information Systems, Imam Abdulrahman Bin Faisal University

---

<details>
<summary><b>About this repository</b></summary>

This repo is also the source of my portfolio site: Next.js 16 (App Router), TypeScript, Tailwind CSS v4, bilingual English/Arabic with RTL support.

```bash
npm install
npm run dev   # http://localhost:3000
```

Every push to `main` builds a static export and deploys it to GitHub Pages ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)). Content lives in `src/data/` (profile, projects, skills).

</details>
