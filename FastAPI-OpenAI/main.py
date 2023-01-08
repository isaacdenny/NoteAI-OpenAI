import os
from dotenv import main
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import openai

main.load_dotenv()

openai.api_key = os.getenv('OPEN_AI_KEY')

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/promptai/{prompt}", tags=["prompt"])
async def get_response(prompt):
    response = openai.Completion.create(model="text-davinci-003", prompt=f'{prompt}', temperature=0, max_tokens=7)
    print(response.choices[0].text)
    return {"message": response.choices[0].text.lstrip(" about\n\n")}