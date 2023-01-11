import os
from dotenv import main
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import openai
from pydantic import BaseModel

main.load_dotenv()

openai.api_key = os.getenv('OPEN_AI_KEY')

app = FastAPI()

origins = [
    os.getenv("CLIENT_SERVER"),
    os.getenv("CLIENT_SERVER_NOHTTPS")
]

class Body(BaseModel):
    language: str
    message: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/promptai/{mode}/{message}", status_code=201)
async def prompt_ai(mode: str, message: str):
    print(mode)
    print(message)
    if mode == "Hello" and message == "World!":
        response = openai.Completion.create(
        model="text-davinci-003", 
        prompt=f'Hi there, are you ready to code?', 
        temperature=0, 
        max_tokens=10
        )
        return {"message": response.choices[0].text.lstrip(" about\n\n")}
    response = openai.Completion.create(
        model="text-davinci-003", 
        prompt=f'Please give me outlined notes for this {mode}: {message}', 
        temperature=0, 
        max_tokens=200
        )
    print(response.choices[0].text)
    return {"message": response.choices[0].text + "..."}