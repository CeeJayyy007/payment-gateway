import * as zod from "zod";

export const cardFormValidation = zod.object({
  name: zod
    .string({ required_error: "Card name is required" })
    .min(3, "Name must be at least 3 characters"),
  cardNumber: zod.string().optional(),
  year: zod
    .string({ required_error: "Expiry year is required" })
    .min(4, "Year must be 4 digits"),
  month: zod
    .string({ required_error: "Expiry month is required" })
    .min(2, "Month must be 2 digits"),
  cvv: zod
    .string({ required_error: "Please enter a valid cvv." })
    .min(3, "CVV must be 3 digits")
    .max(3, "CVV must be 3 digits"),
});

export const bankFormValidation = zod.object({
  name: zod
    .string({ required_error: "Customer name is required" })
    .min(3, "Name must be at least 3 characters"),
  bank: zod
    .string({ required_error: "Bank is required" })
    .min(3, "Bank must be at least 3 characters"),
  transferMethod: zod
    .string({ required_error: "Transfer method is required" })
    .min(3, "Transfer method must be at least 3 characters"),
  email: zod
    .string({
      required_error: "Please enter an email address.",
      invalid_type_error: "Invalid email address",
    })
    .email(),
  phone: zod.string().min(10, "Phone number must be at least 10 digits"),
});

export const paypalFormValidation = zod.object({
  payPal: zod
    .string({
      required_error: "Please enter an email address.",
      invalid_type_error: "Invalid email address",
    })
    .email(),
});

export const appleFormValidation = zod.object({
  applePay: zod
    .string({
      required_error: "Please enter an email address.",
      invalid_type_error: "Invalid email address",
    })
    .email(),
});

export const googleFormValidation = zod.object({
  googlePay: zod
    .string({
      required_error: "Please enter an email address.",
      invalid_type_error: "Invalid email address",
    })
    .email(),
});

export const amazonFormValidation = zod.object({
  amazon: zod
    .string({
      required_error: "Please enter an email address.",
      invalid_type_error: "Invalid email address",
    })
    .email(),
});

export const stripeFormValidation = zod.object({
  stripe: zod
    .string({
      required_error: "Please enter an email address.",
      invalid_type_error: "Invalid email address",
    })
    .email(),
});

export const formValidationSchemas = {
  Card: cardFormValidation,
  Bank: bankFormValidation,
  Paypal: paypalFormValidation,
  Apple: appleFormValidation,
  Google: googleFormValidation,
  Amazon: amazonFormValidation,
  Stripe: stripeFormValidation,
};
