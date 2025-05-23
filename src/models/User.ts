import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: 'guest' | 'host';
  profileImage?: string;
  phoneNumber?: string;
  createdAt: Date;
}

interface IUserMethods {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

interface UserDocument extends IUser, Document {
  isModified(path: string): boolean;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

type UserModel = Model<UserDocument, {}, IUserMethods>;

const userSchema = new Schema<UserDocument, UserModel>({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  role: {
    type: String,
    enum: ['guest', 'host'],
    default: 'guest'
  },
  profileImage: {
    type: String,
    default: ''
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(this: UserDocument, next: () => void) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Method to compare password
userSchema.methods.comparePassword = async function(this: UserDocument, candidatePassword: string): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
