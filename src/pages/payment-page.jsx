import BankForm from "@/components/forms/bank-form";
import CardForm from "@/components/forms/card-form";

import { Icons } from "@/components/icons";
import PaymentMethodItem from "@/components/payment-method/payment-method";
import OtherPaymentMethod from "@/components/payment-method/other-payment-method";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import FormInput from "@/components/forms/form-input";
import { Form } from "@/components/ui/form";
import { formValidationSchemas } from "@/components/forms/form-validation-schemas";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

// mock payment method data
const paymentMethodArray = [
  {
    id: "card",
    name: "Card",
    icon: <Icons.card className="mb-3 h-6 w-6" />,
  },
  {
    id: "bank",
    name: "Bank",
    icon: <Icons.bank className="mb-3 h-6 w-6" />,
  },
  {
    id: "paypal",
    name: "Paypal",
    icon: <Icons.paypal className="mb-3 h-6 w-6" />,
  },
  {
    id: "apple",
    name: "Apple",
    icon: <Icons.apple className="mb-3 h-6 w-6" />,
  },
  {
    id: "google",
    name: "Google",
    icon: <Icons.google className="mb-3 h-6 w-6" />,
  },
  {
    id: "amazon",
    name: "Amazon",
    icon: <Icons.amazon className="mb-3 h-6 w-6" />,
  },
  {
    id: "stripe",
    name: "Stripe",
    icon: <Icons.stripe className="mb-3 h-6 w-6" />,
  },
];

const PaymentForm = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Card");
  const [firstThreePaymentMethods, setFirstThreePaymentMethods] = useState(
    paymentMethodArray.slice(0, 3)
  );
  const [count, setCount] = useState(0);
  const { toast } = useToast();
  const otherPaymentMethods = paymentMethodArray.slice(2);

  const [toggleIconsArray, setToggleIconsArray] = useState([
    otherPaymentMethods,
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formValidationSchemas[selected]),
  });

  const handlePaymentMethodSelect = (name) => {
    setSelected(name);
  };

  const handleOtherPaymentMethodSelect = (name) => {
    setSelected(name);
    const selectedOtherPaymentMethod = paymentMethodArray.find(
      (item) => item.name === name
    );

    setFirstThreePaymentMethods([
      ...firstThreePaymentMethods.slice(0, 2),
      selectedOtherPaymentMethod,
    ]);
  };

  useEffect(() => {
    const selectedOtherPaymentMethod = otherPaymentMethods.filter(
      (item) =>
        item.name !==
        firstThreePaymentMethods[firstThreePaymentMethods.length - 1].name
    );

    setToggleIconsArray(selectedOtherPaymentMethod);

    const countCycle = selectedOtherPaymentMethod.length;

    const interval = setInterval(() => {
      if (countCycle !== 0) {
        setCount((count + 1) % countCycle);
      }
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const onSubmit = (data) => {
    try {
      setIsLoading(true);

      toast({
        title: "Success! 🎉",
        description: "Transaction successful. Redirecting to success page.",
      });

      // simulate 3 seconds delay
      setTimeout(() => {
        navigate("/success", { state: { data } });
      }, 3000);

      form.reset();
    } catch (err) {
      form.setError("submitError", {
        type: "manual",
        message: "Submission failed. Please try again.",
      });
    }
  };

  return (
    // card component
    <Card className="w-[400px] ">
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Select a payment method to complete your transaction.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-4 gap-4">
              <RadioGroup
                className="grid grid-cols-3 gap-4 col-span-3"
                defaultValue="card"
                value={selected}
              >
                {firstThreePaymentMethods.map((item) => (
                  <PaymentMethodItem
                    key={item.id}
                    item={item}
                    handlePaymentMethodSelect={handlePaymentMethodSelect}
                  />
                ))}
              </RadioGroup>
              <OtherPaymentMethod
                selected={selected}
                count={count}
                toggleIconsArray={toggleIconsArray}
                otherPaymentMethods={otherPaymentMethods}
                handleOtherPaymentMethodSelect={handleOtherPaymentMethodSelect}
              />
            </div>

            {/* card form component */}
            {selected === "Card" && <CardForm form={form} />}

            {/* bank form component */}
            {selected === "Bank" && <BankForm form={form} />}

            {/* Dynamic Payment Form */}
            {selected === "Apple" && (
              <FormInput
                id="applePay"
                name="applePay"
                placeholder="Enter Apple Pay information"
                label="Apple Pay"
                type="email"
                form={form}
              />
            )}

            {selected === "Paypal" && (
              <FormInput
                id="payPal"
                name="payPal"
                placeholder="Enter PayPal information"
                label="PayPal"
                type="email"
                form={form}
              />
            )}

            {selected === "Google" && (
              <FormInput
                id="googlePay"
                name="googlePay"
                placeholder="Enter Google Pay information"
                label="Google Pay"
                type="email"
                form={form}
              />
            )}

            {selected === "Amazon" && (
              <FormInput
                id="amazon"
                name="amazon"
                placeholder="Enter Amazon information"
                label="Amazon"
                type="email"
                form={form}
              />
            )}

            {selected === "Stripe" && (
              <FormInput
                id="stripe"
                name="stripe"
                placeholder="Enter Stripe information"
                label="Stripe"
                type="email"
                form={form}
              />
            )}
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full mt-4 mb-4"
              disabled={isLoading}
            >
              Continue
              {isLoading && <Icons.spinner className={cn("animate-spin")} />}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default PaymentForm;
