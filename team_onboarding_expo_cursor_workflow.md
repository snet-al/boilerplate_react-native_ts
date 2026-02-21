# 👋 Team Onboarding Guide

Welcome to the project. This document explains **how we build**, **why we build this way**, and **how to work effectively with Cursor + Expo** from day one.

---

## 🎯 Project Goals

- Ship production-ready **React Native apps fast**
- Maintain **high code quality** while using AI
- Avoid common React Native & AI pitfalls
- Scale features and team without rewrites

Our stack and rules are intentionally opinionated.

---

## 🧱 Tech Stack Overview

**Platform**
- Expo (Dev Client)
- Expo Router
- iOS & Android only

**Language**
- TypeScript (strict)
- Functional components only

**State & Data**
- Zustand → client state
- TanStack Query → server state
- Axios via shared `apiClient`

**AI Tooling**
- Cursor as primary AI assistant

---

## 📁 Project Structure

We use **feature-based architecture**.

```
src/
 ├─ app/                # Expo Router screens
 ├─ features/           # Feature modules (logic lives here)
 ├─ components/         # Shared UI components
 ├─ services/           # API, storage, integrations
 ├─ hooks/              # Reusable hooks
 ├─ theme/              # Design tokens & styles
 ├─ utils/              # Helpers
 └─ types/              # Shared types
```

### Key Rule
> **Screens = UI only**  
> **Features = logic + state + API**

---

## 🤖 How We Use Cursor (IMPORTANT)

Cursor is treated as a **junior engineer**:
- Fast
- Tireless
- Needs clear rules

### What Cursor Is Allowed To Do
- Scaffold features
- Generate screens
- Refactor code
- Review performance

### What Cursor Is NOT Allowed To Do
- Change architecture without request
- Introduce random dependencies
- Use web/DOM APIs

These rules are enforced via `.cursor/rules.md`.

---

## 📜 Cursor Rules & Playbooks

### Rules (Always Active)
Located at:
```
.cursor/rules.md
```
These are **non-negotiable** constraints.

### Playbooks (Task-Specific)
Located at:
```
.cursor/playbooks.md
```

When working with Cursor:
1. Copy the relevant playbook section
2. Fill placeholders
3. Paste into Cursor

This keeps output consistent across the team.

---

## 🧑‍💻 Daily Development Workflow

1. Pick a task (feature, screen, refactor)
2. Select the correct **Cursor playbook**
3. Generate initial code with Cursor
4. Review manually
5. Run the app
6. Ask Cursor for a **performance / code review**

> AI writes code fast. Humans approve quality.

---

## 🚦 Code Quality Rules

### DO ✅
- Keep files under 300 lines
- Extract logic into hooks
- Use Expo APIs first
- Type everything
- Optimize re-renders

### DO NOT ❌
- Use `window`, `document`, or DOM APIs
- Put business logic in screens
- Create multiple axios instances
- Add UI libraries casually

Refer to:
```
.cursor/anti-patterns.md
```

---

## 🔁 Pre-Commit Checklist

Before pushing code:

- [ ] Screen contains only UI logic
- [ ] Feature logic lives in `features/`
- [ ] No web-only APIs
- [ ] Types are explicit
- [ ] Cursor pre-commit review done

Recommended prompt:
> "Act as a senior RN reviewer and review this file"

---

## 🧠 Mental Model

- **Expo** → platform abstraction
- **Cursor** → junior developer
- **You** → architect & reviewer

If Cursor breaks a rule, fix it immediately.

---

## 🆘 Getting Help

If unsure:
1. Ask another teammate
2. Check this doc
3. Use Cursor **with the correct playbook**

Consistency > Cleverness.

---

## ✅ Final Note

This setup lets us:
- Move fast
- Keep quality high
- Scale the team safely

Welcome aboard 🚀

