# 🔗 Linkly — Backend

A lightweight, secure, and modular backend for a URL shortener service. Linkly provides link shortening, redirect handling, and basic analytics, built with Node.js, Express, and MongoDB. Designed for production readiness with environment configuration, ESLint/Prettier, Helmet, Morgan, and Nodemon for development.

---

## Features
- ✂️ Shorten and expand URLs (create shortened aliases and redirect)
- 📊 Basic analytics (click counts, referrers, timestamps)
- 🔒 Secure by default (Helmet headers, input validation)
- ⚙️ Environment-driven configuration (.env support)
- 🧩 Modular code structure (routes, controllers, models, middleware)
- 🛠️ Development tooling: ESLint, Prettier, Nodemon, Morgan logging

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Server | Node.js, Express |
| Database | MongoDB, Mongoose |
| Security | Helmet, input validation |
| Logging | Morgan |
| Dev Tools | Nodemon, ESLint, Prettier |
| Environment | dotenv |
| Testing | Jest  |

---

## Quick Start

Clone the repository:
```bash
git clone https://github.com/<your-username>/linkly-backend.git
cd linkly-backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the project root (example):
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/linkly
BASE_URL=http://localhost:5000
JWT_SECRET=your_jwt_secret_here
```

Run in development mode (with Nodemon):
```bash
npm run dev
```

Run production mode:
```bash
npm start
```

---

## Project Structure

A clean layout to help you navigate the codebase:

```
/ (project root)
├─ app.js                # Express app setup (middleware, routes)
├─ server.js             # Server bootstrap
├─ package.json
├─ .env                  # Environment variables (not committed)
├─ src/
│  ├─ routes/
│  │  ├─ User.route.js
│  │  └─ Links.route.js
│  ├─ controllers/
│  │  └─ Link.controller.js
│  ├─ models/
│  │  └─ Link.model.js
│  ├─ middleware/
│  │  ├─ errorHandler.js
│  │  └─ validate.js
│  ├─ services/
│  │  └─ analytics.service.js
│  └─ utils/
│     └─ generateShortId.js
├─ config/
│  └─ db.js
└─ README.md
```

---

## Development

Lint the code:
```bash
npm run lint
```

Automatically fix lint issues:
```bash
npm run lint:fix
```

Recommended scripts in package.json:
- "dev": nodemon server.js
- "start": node server.js
- "lint": eslint .
- "lint:fix": eslint . --fix

---

## Future Enhancements
- User authentication and per-user link management
- Advanced analytics dashboard (geography, browser, time-series)
- Custom aliases, expiration, and password-protected links
- Rate limiting and abuse prevention
- QR code generation for short links
- Unit & integration tests (Jest + Supertest)
- CI/CD pipeline and Docker support

---

## License

MIT License — feel free to use, modify, and distribute. See LICENSE for full terms.

---

## Author

Anurag Singh  
GitHub: https://github.com/ThAnurag2004  
LinkedIn: https://www.linkedin.com/in/anurxg

---

## GitHub Repository Info

- Repository: linkly-backend  
- Short description: Backend for Linkly — a simple, secure URL shortener built with Node.js, Express, and MongoDB.  
- Topics: `nodejs`, `express`, `mongodb`, `rest-api`, `url-shortener`, `backend`, `javascript`

