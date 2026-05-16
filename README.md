# CampusOS

The operating system for modern education.

---

## Vision

Traditional college ERPs were built for a different era. They're clunky, outdated, and fundamentally broken—designed for bureaucracy, not for people.

CampusOS is different. We're building from scratch, with a simple belief: education deserves software that doesn't suck. Software that feels as good to use as the best consumer products. Software that respects your time, not wastes it.

This isn't just another ERP. It's a complete reimagining of how universities should run in the AI age.

---

## What CampusOS Does

### For Students
- **Smart Dashboard** — Your entire academic life, one glance away
- **Attendance Tracking** — Real-time visibility, never miss a class
- **Timetable** — Beautiful, intuitive schedule management
- **Assignments** — Track submissions, deadlines, and feedback
- **Exam Performance** — Visual insights into your academic journey
- **Fee Management** — Transparent payments, no surprises
- **Notifications** — Stay informed without the noise

### For Faculty
- **Attendance Marking** — Quick, accurate, frictionless
- **Assignment Management** — Distribute, collect, grade seamlessly
- **Student Analytics** — Understand who needs help, before it's too late
- **AI Question Generation** — Create assessments in seconds, not hours
- **Performance Insights** — Data-driven teaching, not gut decisions

### For Admin
- **Student Management** — Complete lifecycle oversight
- **Faculty Management** — Streamlined operations and coordination
- **Department Controls** — Granular access, clear responsibilities
- **Finance Analytics** — Real-time financial visibility
- **Operational Dashboards** — Run your institution with clarity

### Placement Module
- **Resume Scoring** — AI-powered candidate evaluation
- **Job Matching** — Connect the right students to the right opportunities
- **Interview Prep** — Personalized preparation, real results
- **Placement Analytics** — Track outcomes, optimize continuously

### AI Features
- **AI Assistant** — Your intelligent campus companion
- **Performance Prediction** — Identify at-risk students early
- **Attendance Risk Analysis** — Proactive intervention, not reactive
- **Academic Recommendations** — Personalized learning paths
- **Learning Insights** — Understand how you learn best

### Modern Product Experience
- **Role-Based Access** — The right people see the right things
- **Real-Time Updates** — Everything stays in sync, instantly
- **Command Palette** — Power user workflow, keyboard-first
- **Search Everywhere** — Find anything, fast
- **Dark/Light Mode** — Work how you prefer
- **Glassmorphism UI** — Beautiful, modern, premium feel
- **Responsive Design** — Works flawlessly everywhere
- **Charts & Analytics** — Data that tells a story

---

## Tech Stack

We choose tools that respect developer experience and long-term maintainability.

**Frontend**
- Next.js — React framework for the web
- TypeScript — Type safety at scale
- Tailwind CSS — Utility-first CSS that just works

**Backend**
- FastAPI — Modern, fast Python web framework
- PostgreSQL — Battle-tested relational database
- Redis — Caching and real-time data layer

**Infrastructure**
- Docker — Containerized, reproducible deployments

---

## Architecture

CampusOS follows a clean separation of concerns:

- **Frontend**: Next.js application with server-side rendering and client-side interactivity
- **Backend API**: FastAPI providing RESTful endpoints with async support
- **Database Layer**: PostgreSQL for persistent data, Redis for caching and sessions
- **AI Services**: Dedicated module for ML/AI features and predictions
- **Authentication**: JWT-based auth with role-based access control

The system is designed to be modular—each component can be developed, tested, and deployed independently.

---

## Folder Structure

```
campus-os/
├── frontend/                 # Next.js application
│   ├── app/                 # App router pages
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utilities and helpers
│   └── public/              # Static assets
├── backend/                 # FastAPI application
│   ├── app/                 # Application code
│   │   ├── api/            # API routes
│   │   ├── core/           # Core functionality (auth, db)
│   │   ├── models/         # Database models
│   │   └── services/       # Business logic
│   ├── tests/              # Backend tests
│   └── alembic/            # Database migrations
├── docker/                  # Docker configurations
├── docs/                    # Documentation
└── README.md               # This file
```

---

## Screenshots

*Coming soon.*

We're building this in public. Screenshots will be added as features ship.

---

## Installation

### Prerequisites
- Node.js 18+
- Python 3.10+
- PostgreSQL 14+
- Redis 6+
- Docker (optional but recommended)

### Quick Start with Docker

```bash
# Clone the repository
git clone https://github.com/yourusername/campus-os.git
cd campus-os

# Start all services
docker-compose up -d

# Run database migrations
docker-compose exec backend alembic upgrade head

# The application will be available at http://localhost:3000
```

### Manual Setup

**Backend**
```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run migrations
alembic upgrade head

# Start the server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Frontend**
```bash
cd frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:3000` and the backend API at `http://localhost:8000`.

---

## Environment Setup

Create a `.env` file in both `backend/` and `frontend/` directories:

**Backend (.env)**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/campus_os
REDIS_URL=redis://localhost:6379
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
ENVIRONMENT=development
```

**Frontend (.env.local)**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Roadmap

This is a living document. We ship fast and iterate constantly.

- [ ] Phase 1: Core student and faculty modules
- [ ] Phase 2: Admin dashboard and analytics
- [ ] Phase 3: AI features and predictions
- [ ] Phase 4: Placement module
- [ ] Phase 5: Mobile apps (iOS/Android)
- [ ] Phase 6: Advanced integrations (LMS, payment gateways)
- [ ] Phase 7: Multi-tenant support for SaaS deployment

Check the [Projects](https://github.com/yourusername/campus-os/projects) tab for what we're working on right now.

---

## Contributing

We love contributors. Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting PRs.

**Areas where we need help:**
- UI/UX improvements
- Additional AI features
- Mobile app development
- Documentation
- Testing and bug reports

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## Founder's Note

I'm building CampusOS because I believe education software should be better. Much better.

Having experienced the pain of clunky university systems firsthand, I decided to build something different—something that students, faculty, and admins actually enjoy using.

This is a long-term project. I'm in this for the next decade, committed to making CampusOS the standard for modern education technology.

We're building in public, shipping fast, and learning continuously. If this resonates with you, I'd love to have you along for the ride.

— Built with passion, for the future of education.
