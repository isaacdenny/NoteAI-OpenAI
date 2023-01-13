# NoteAI-OpenAI
NoteAI is a web app for the everyday media consumer who needs to speed up their workflow. Simply ask the app to document notes on your material and the AI will do the rest.

# Project Summary
This project is an extension of OpenAI's capabilities, providing users with the ability to easily condense their media into more consumable modes through a GUI. 

# Technologies
- MongoDB - DataBase
- Mongoose - OMD
- Express - Routing
- Node.js - Runtime Environment
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
// TODO: authorization

#### auth/login
- POST - login function query db

#### auth/register
- POST - new user post to db

#### account/:id/
- GET - account info
- PATCH - edit account? add achievement to user?
- DELETE

#### account/:id/achievements
- GET - account-owned achievements
- DELETE

#### account/:id/tests
- GET - account-owned achievements
- DELETE

#### account/:id/tests/:id
- GET - test information
- DELETE

#### achievements/:id/
- GET achievement information (requirements)
- PATCH
- DELETE

#### achievements/
- GET list of achievements available
- POST

# Planning TODOs
- [ ] List all requirements
- [ ] Create Schema
- [ ] Design API
- [ ] Create Mockups
- [ ] Choose Technologies
