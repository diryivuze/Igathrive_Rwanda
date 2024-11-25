from pydantic import BaseModel, EmailStr
from typing import Optional
from models.userModels import UserRole

class UserBase(BaseModel):
    email: EmailStr
    username: str
    role: UserRole = UserRole.STUDENT

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str
    user_info: User

class LoginRequest(BaseModel):
    username: str
    password: str
