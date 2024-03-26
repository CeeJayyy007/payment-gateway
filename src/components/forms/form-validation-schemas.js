import * as zod from "zod";

export const cardFormValidation = zod.object({
  name: zod.string().min(3, "Name must be at least 3 characters"),
  cardNumber: zod
    .string()
    .min(16, "Card number must be 16 digits")
    .max(16, "Card number must be 16 digits"),
  expiryYear: zod.string().min(4, "Year must be 4 digits"),
  expiryMonth: zod.string().min(2, "Month must be 2 digits"),
  cvv: zod
    .string()
    .min(3, "CVV must be 3 digits")
    .max(3, "CVV must be 3 digits"),
});

export const bankFormValidation = zod.object({
  name: zod.string().min(3, "Name must be at least 3 characters"),
  bank: zod.string().min(3, "Bank must be at least 3 characters"),
  transferMethod: zod
    .string()
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
