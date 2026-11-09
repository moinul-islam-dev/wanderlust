import { format, startOfToday } from "date-fns";
import z from "zod";

const CATEGORY_OPTIONS = [
  "Beach",
  "Mountain",
  "City",
  "Adventure",
  "Desert",
  "Cultural",
] as const;

export const destinationSchema = z.object({
  destinationName: z
    .string()
    .trim()
    .min(2, "Destination name must be at least 2 characters")
    .max(80, "Destination name must be at most 80 characters"),

  country: z
    .string()
    .trim()
    .min(2, "Country must be at least 2 characters")
    .max(60, "Country must be at most 60 characters"),

  category: z.enum(CATEGORY_OPTIONS, {
    error: () => "Please select a category",
  }),

  price: z
    .number({ error: "Price is required" })
    .min(1000, "Price must be at least 1000"),

  duration: z
    .string()
    .trim()
    .min(1, "Duration is required")
    .max(50, "Duration must be at most 50 characters"),

  departureDate: z.iso
    .date()
    .refine(
      (date) => date >= format(startOfToday(), "yyyy-MM-dd"),
      "Departure date cannot be in the past",
    ),

  imageUrl: z.url({
    error: "Enter a valid url",
    protocol: /^https?$/,
  }),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be at most 500 characters"),
});

export type DestinationFormValues = z.input<typeof destinationSchema>;
export type DestinationSubmitValues = z.output<typeof destinationSchema>;

export const CATEGORY_ITEMS = CATEGORY_OPTIONS.map((category) => ({
  label: category,
  value: category,
}));
