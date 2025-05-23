import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IProperty {
  title: string;
  description: string;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  price: {
    amount: number;
    currency: string;
    period: 'daily' | 'weekly' | 'monthly' | 'semester';
  };
  features: string[];
  amenities: string[];
  images: string[];
  host: mongoose.Types.ObjectId;
  propertyType: 'apartment' | 'house' | 'studio' | 'dormitory';
  rules: string[];
  availability: {
    startDate: Date;
    endDate: Date;
  };
  status: 'available' | 'booked' | 'maintenance';
  rating?: {
    average: number;
    count: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface PropertyDocument extends IProperty, Document {}

type PropertyModel = Model<PropertyDocument>;

const propertySchema = new Schema<PropertyDocument, PropertyModel>({
  title: {
    type: String,
    required: [true, 'Property title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Property description is required'],
    trim: true
  },
  location: {
    address: {
      type: String,
      required: [true, 'Address is required']
    },
    city: {
      type: String,
      required: [true, 'City is required']
    },
    country: {
      type: String,
      required: [true, 'Country is required']
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  price: {
    amount: {
      type: Number,
      required: [true, 'Price amount is required']
    },
    currency: {
      type: String,
      required: [true, 'Currency is required'],
      default: 'USD'
    },
    period: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'semester'],
      required: [true, 'Rental period is required']
    }
  },
  features: [{
    type: String,
    trim: true
  }],
  amenities: [{
    type: String,
    trim: true
  }],
  images: [{
    type: String,
    required: [true, 'At least one image is required']
  }],
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Property must belong to a host']
  },
  propertyType: {
    type: String,
    enum: ['apartment', 'house', 'studio', 'dormitory'],
    required: [true, 'Property type is required']
  },
  rules: [{
    type: String,
    trim: true
  }],
  availability: {
    startDate: {
      type: Date,
      required: [true, 'Start date is required']
    },
    endDate: {
      type: Date,
      required: [true, 'End date is required']
    }
  },
  status: {
    type: String,
    enum: ['available', 'booked', 'maintenance'],
    default: 'available'
  },
  rating: {
    average: {
      type: Number,
      min: [0, 'Rating must be at least 0'],
      max: [5, 'Rating cannot be more than 5'],
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true
});

// Index for location-based searches
propertySchema.index({ 'location.city': 1, 'location.country': 1 });
// Index for price-based searches
propertySchema.index({ 'price.amount': 1 });
// Index for availability searches
propertySchema.index({ 'availability.startDate': 1, 'availability.endDate': 1 });

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

export default Property;
