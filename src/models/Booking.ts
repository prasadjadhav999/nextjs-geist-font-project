import mongoose, { Document, Model, Schema } from 'mongoose';
import { IUser } from './User';
import { IProperty } from './Property';

export interface IBooking {
  property: mongoose.Types.ObjectId | IProperty;
  guest: mongoose.Types.ObjectId | IUser;
  checkIn: Date;
  checkOut: Date;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  paymentDetails?: {
    transactionId: string;
    paymentMethod: string;
    paidAmount: number;
    paidAt: Date;
  };
  specialRequests?: string;
  cancellationReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface BookingDocument extends IBooking, Document {}

type BookingModel = Model<BookingDocument>;

const bookingSchema = new Schema<BookingDocument, BookingModel>({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: [true, 'Property is required']
  },
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Guest is required']
  },
  checkIn: {
    type: Date,
    required: [true, 'Check-in date is required']
  },
  checkOut: {
    type: Date,
    required: [true, 'Check-out date is required']
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'refunded'],
    default: 'pending'
  },
  paymentDetails: {
    transactionId: String,
    paymentMethod: String,
    paidAmount: Number,
    paidAt: Date
  },
  specialRequests: {
    type: String,
    trim: true
  },
  cancellationReason: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Indexes for efficient querying
bookingSchema.index({ property: 1, status: 1 });
bookingSchema.index({ guest: 1, status: 1 });
bookingSchema.index({ checkIn: 1, checkOut: 1 });

interface IBookingMethods {
  getDuration(): number;
}

interface BookingDocument extends IBooking, Document {
  checkIn: Date;
  checkOut: Date;
  getDuration(): number;
}

// Validate check-in and check-out dates
bookingSchema.pre('save', function(this: BookingDocument, next: (error?: Error) => void) {
  if (this.checkIn >= this.checkOut) {
    next(new Error('Check-out date must be after check-in date'));
  }
  next();
});

// Method to calculate booking duration in days
bookingSchema.methods.getDuration = function(this: BookingDocument): number {
  const diffTime = Math.abs(this.checkOut.getTime() - this.checkIn.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking;
