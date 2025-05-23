"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImagePreview } from "@/components/ui/image-preview";

interface PropertyFormData {
  title: string;
  description: string;
  address: string;
  city: string;
  country: string;
  price: {
    amount: number;
    currency: string;
    period: 'daily' | 'weekly' | 'monthly' | 'semester';
  };
  propertyType: 'apartment' | 'house' | 'studio' | 'dormitory';
  features: string[];
  amenities: string[];
  rules: string[];
  availability: {
    startDate: string;
    endDate: string;
  };
  images: FileList;
}

export default function ListPropertyPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const files = Array.from(event.target.files);
    const imageUrls: string[] = [];

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          imageUrls.push(reader.result as string);
          // Once all files are read, update state
          if(imageUrls.length === files.length) {
            setPreviewImages(imageUrls);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyFormData>();

  const onSubmit = async (data: PropertyFormData) => {
    setIsLoading(true);
    setError("");

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("country", data.country);
      formData.append("price", JSON.stringify(data.price));
      formData.append("propertyType", data.propertyType);
      formData.append("features", JSON.stringify(data.features));
      formData.append("amenities", JSON.stringify(data.amenities));
      formData.append("rules", JSON.stringify(data.rules));
      formData.append("availability", JSON.stringify(data.availability));

      // Append each image
      Array.from(data.images).forEach((file, index) => {
        formData.append(`images`, file);
      });

      const response = await fetch("/api/properties", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Failed to create property listing");
      }

      // Redirect to host dashboard on success
      router.push("/dashboard/host");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">List Your Property</h1>
            <p className="mt-2 text-gray-600">
              Fill in the details below to list your property
            </p>
          </div>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Basic Information</h2>
              
              <div>
                <Label htmlFor="title">Property Title</Label>
                <Input
                  id="title"
                  {...register("title", {
                    required: "Title is required",
                    maxLength: {
                      value: 100,
                      message: "Title cannot exceed 100 characters",
                    },
                  })}
                  className="mt-1"
                />
                {errors.title && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 50,
                      message: "Description must be at least 50 characters",
                    },
                  })}
                  className="mt-1 h-32"
                />
                {errors.description && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Location</h2>
              
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  {...register("address", { required: "Address is required" })}
                  className="mt-1"
                />
                {errors.address && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    {...register("city", { required: "City is required" })}
                    className="mt-1"
                  />
                  {errors.city && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    {...register("country", { required: "Country is required" })}
                    className="mt-1"
                  />
                  {errors.country && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Property Details</h2>

              <div>
                <Label htmlFor="propertyType">Property Type</Label>
                <Select
                  {...register("propertyType", {
                    required: "Property type is required",
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="dormitory">Dormitory</SelectItem>
                  </SelectContent>
                </Select>
                {errors.propertyType && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.propertyType.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price.amount">Price</Label>
                  <Input
                    id="price.amount"
                    type="number"
                    {...register("price.amount", {
                      required: "Price is required",
                      min: { value: 0, message: "Price must be positive" },
                    })}
                    className="mt-1"
                  />
                  {errors.price?.amount && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.price.amount.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="price.period">Rental Period</Label>
                  <Select
                    {...register("price.period", {
                      required: "Rental period is required",
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select rental period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="semester">Per Semester</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Availability</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="availability.startDate">Available From</Label>
                  <Input
                    id="availability.startDate"
                    type="date"
                    {...register("availability.startDate", {
                      required: "Start date is required",
                    })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="availability.endDate">Available Until</Label>
                  <Input
                    id="availability.endDate"
                    type="date"
                    {...register("availability.endDate", {
                      required: "End date is required",
                    })}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Property Images</h2>

              <div>
                <Label htmlFor="images">Upload Images</Label>
                <Input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  {...register("images", {
                    required: "At least one image is required",
                  })}
                  onChange={(e) => {
                    handleImageChange(e);
                    register("images").onChange(e);
                  }}
                  className="mt-1"
                />
                {errors.images && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.images.message}
                  </p>
                )}
                {previewImages.length > 0 && <ImagePreview images={previewImages} />}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating Listing..." : "Create Listing"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
