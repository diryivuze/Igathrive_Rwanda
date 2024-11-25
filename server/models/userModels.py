from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Enum as SQLAlchemyEnum
from sqlalchemy.orm import relationship
from db.database import Base
import enum

class UserRole(str, enum.Enum):
    STUDENT = "student"
    MENTOR = "mentor"
    ADMIN = "admin"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    username = Column(String(255), unique=True, index=True)
    password = Column(String(255))
    role = Column(String(255), default=UserRole.STUDENT)
    is_active = Column(Boolean, default=True)
