import os
from dotenv import main
from fastapi import FastAPI, Body
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

class MessageReq(BaseModel):
    user: str
    mode: str
    message: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/promptai/")
async def prompt_ai(body: MessageReq = Body(...)):
    print(body.user)
    response = openai.Completion.create(
        model="text-davinci-003", 
        prompt=f'Please give me outlined notes for this {body.mode}: {body.message}.', 
        temperature=0, 
        max_tokens=100
        )
    print(response.choices[0].text)
    return {"user": "gpt", "mode": body.mode, "message": response.choices[0].text.lstrip("\n\n")}