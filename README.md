# NoteAI-OpenAI
NoteAI is a web app for the everyday media consumer who needs to speed up their workflow. Simply ask the app to document notes on your material and the AI will do the rest.

# Project Summary
This project is an extension of OpenAI's capabilities, providing users with the ability to easily condense their media into more consumable modes through a GUI. 

# Technologies
- PostgreSQL - DataBase
- SQLAlchemy - DB Connection
- Alembic - DB tables
- FastAPI - Runtime Environment
- React - Front-end UI Framework
- Linode (possibly GCP) - Hosting
- Docker - Containerization, Deployment

# Local Development
1. Clone this repo and `cd` into the repo directory

# Schema

## User

- username: str
- email: str
- created_at: Date-Time
- updated_at: Date-Time
- account_status: Enum (premium or not)
- achievements: Achievement []

## Achievements

- title: str
- requirements: int ?
- difficulty: Enum

# Design API
// TODO: authentication, authorization, 

#### users/
- GET: list users
- POST: create a new session
- DELETE: a student session

#### users/:id/
- GET 
- PATCH - edit account? add achievement to user?
- DELETE


#### users/:id/achievements
- GET
- DELETE

#### achievements/:id/
- GET
- PATCH
- DELETE

#### achievements/
- GET list of achievements
- POST

# Planning TODOs
- [ ] List all requirements
- [ ] Create Schema
- [ ] Design API
- [ ] Create Mockups
- [ ] Choose Technologies
