from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from db.database import get_db
from schemas.schemas import UserCreate, User, Token, LoginRequest
from models.userModels import User as UserModel, UserRole
from passlib.context import CryptContext

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter(
    prefix="/auth",
    tags=['Authentication']
)

@router.post('/register', response_model=User)
def create_user(request: UserCreate, db: Session = Depends(get_db)):
    # Check if email already exists
    if db.query(UserModel).filter(UserModel.email == request.email).first():
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )
    
    # Check if username exists
    if db.query(UserModel).filter(UserModel.username == request.username).first():
        raise HTTPException(
            status_code=400,
            detail="Username already taken"
        )
    
    # Create new user
    hashed_password = pwd_context.hash(request.password)
    db_user = UserModel(
        email=request.email,
        username=request.username,
        password=hashed_password,
        role=request.role
    )
    
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@router.post('/login', response_model=Token)
def login(request: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(UserModel).filter(
        UserModel.username == request.username
    ).first()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
    
    if not pwd_context.verify(request.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
    
    return {
        "access_token": f"user_{user.id}",  # In real app, use proper JWT
        "token_type": "bearer",
        "user_info": user
    }

@router.get('/users', response_model=list[User])
def get_users(db: Session = Depends(get_db)):
    users = db.query(UserModel).all()
    return users

@router.put('/users/{user_id}/role')
def update_user_role(
    user_id: int,
    new_role: UserRole,
    db: Session = Depends(get_db)
):
    user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )
    
    user.role = new_role
    db.commit()
    db.refresh(user)
    return user