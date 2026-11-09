"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format, parseISO, startOfToday } from "date-fns";
import { ChevronDownIcon, Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type {
  DestinationFormValues,
  DestinationSubmitValues,
} from "./destination/destination.schema";
import {
  CATEGORY_ITEMS,
  destinationSchema,
} from "./destination/destination.schema";

const AddDestinationPage = () => {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(startOfToday());
  }, []);

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DestinationFormValues, unknown, DestinationSubmitValues>({
    resolver: zodResolver(destinationSchema),

    defaultValues: {
      destinationName: "",
      country: "",
      price: 1000,
      duration: "",
      departureDate: "",
      imageUrl: "",
      description: "",
    },
  });

  const onSubmit = async (values: DestinationSubmitValues) => {
    try {
      const res = await fetch("http://localhost:5000/add-destination", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(`HTTP Status: ${res.status}`);
      }

      setSuccessMessage(
        `"${values.destinationName}" has been added successfully.`,
      );

      console.log(data.message);
      reset();
    } catch (err) {
      console.error("Error adding destination:", err);
    }
  };

  const inputtedVals = watch();

  console.log(inputtedVals);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="font-heading text-3xl font-light tracking-tight text-foreground sm:text-4xl">
        Add New Travel Package
      </h1>

      <Card className="mt-8 shadow-sm">
        <CardContent className="p-6 sm:p-8">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <Field data-invalid={!!errors.destinationName}>
              <FieldLabel htmlFor="destinationName">
                Destination Name
              </FieldLabel>
              <Input
                id="destinationName"
                placeholder="Bali Paradise"
                className="h-10 bg-muted/30"
                aria-invalid={!!errors.destinationName}
                {...register("destinationName")}
              />
              <FieldError errors={[errors.destinationName]} />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field data-invalid={!!errors.country}>
                <FieldLabel htmlFor="country">Country</FieldLabel>
                <Input
                  id="country"
                  placeholder="Indonesia"
                  className="h-10 bg-muted/30"
                  aria-invalid={!!errors.country}
                  {...register("country")}
                />
                <FieldError errors={[errors.country]} />
              </Field>

              <Controller
                control={control}
                name="category"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="category">Category</FieldLabel>
                    <Select
                      items={CATEGORY_ITEMS}
                      value={field.value || null}
                      onValueChange={(value) => field.onChange(value ?? "")}
                    >
                      <SelectTrigger
                        id="category"
                        className="h-10 w-full bg-muted/30"
                        aria-invalid={fieldState.invalid}
                      >
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORY_ITEMS.map((category) => (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field data-invalid={!!errors.price}>
                <FieldLabel htmlFor="price">Price (USD)</FieldLabel>
                <Input
                  id="price"
                  type="number"
                  min="1"
                  step="any"
                  inputMode="decimal"
                  placeholder="e.g., 1299"
                  className="h-10 bg-muted/30"
                  aria-invalid={!!errors.price}
                  {...register("price", { valueAsNumber: true })}
                />
                <FieldError errors={[errors.price]} />
              </Field>

              <Field data-invalid={!!errors.duration}>
                <FieldLabel htmlFor="duration">Duration</FieldLabel>
                <Input
                  id="duration"
                  placeholder="e.g., 7 Days/6 Nights"
                  className="h-10 bg-muted/30"
                  aria-invalid={!!errors.duration}
                  {...register("duration")}
                />
                <FieldError errors={[errors.duration]} />
              </Field>
            </div>

            <Controller
              control={control}
              name="departureDate"
              render={({ field, fieldState }) => {
                const selectedDate = field.value
                  ? parseISO(field.value)
                  : undefined;

                return (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="departureDate">
                      Departure Date
                    </FieldLabel>
                    <Popover>
                      <PopoverTrigger
                        render={
                          <Button
                            type="button"
                            variant="outline"
                            id="departureDate"
                            aria-invalid={fieldState.invalid}
                            className="h-10 w-full justify-between bg-muted/30 text-left font-normal aria-invalid:border-destructive data-[empty=true]:text-muted-foreground"
                            data-empty={!selectedDate}
                          />
                        }
                      >
                        {selectedDate ? (
                          format(selectedDate, "PPP")
                        ) : (
                          <span>mm/dd/yyyy</span>
                        )}
                        <ChevronDownIcon
                          data-icon="inline-end"
                          className="size-4 text-muted-foreground"
                        />
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) =>
                            field.onChange(
                              date ? format(date, "yyyy-MM-dd") : "",
                            )
                          }
                          defaultMonth={selectedDate}
                          disabled={today ? { before: today } : undefined}
                          autoFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                );
              }}
            />

            <Field data-invalid={!!errors.imageUrl}>
              <FieldLabel htmlFor="imageUrl">Image URL</FieldLabel>
              <Input
                id="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="h-10 bg-muted/30"
                aria-invalid={!!errors.imageUrl}
                {...register("imageUrl")}
              />
              <FieldError errors={[errors.imageUrl]} />
            </Field>

            <Field data-invalid={!!errors.description}>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Textarea
                id="description"
                placeholder="Describe the travel experience..."
                className="min-h-28 resize-y bg-muted/30"
                aria-invalid={!!errors.description}
                {...register("description")}
              />
              <FieldError errors={[errors.description]} />
            </Field>

            {successMessage && (
              <output className="block rounded-lg bg-brand/10 px-3 py-2 text-sm text-brand">
                {successMessage}
              </output>
            )}

            <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                className="h-10 border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                <X />
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-10 bg-brand text-white hover:bg-brand/90"
              >
                <Plus />
                Add Travel Package
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddDestinationPage;
