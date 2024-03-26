import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Icons } from "../icons";
import { handleCardNumberChange } from "../utils/helper";
import FormInput from "./form-input";
import FormSelect from "./form-select";
import { months } from "@/pages/utils/mock-data";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const CardForm = ({ form }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState(null);

  const getCardIcon = () => {
    switch (cardType) {
      case "visa":
        return <Icons.visa className="h-6 w-6" />;
      case "mastercard":
        return <Icons.mastercard className="h-6 w-6" />;
      case "amex":
        return <Icons.logo className="h-6 w-6" />;
      case "discover":
        return <Icons.discover className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid gap-4">
      <FormInput
        id="name"
        name="name"
        placeholder="First Last"
        label="Name"
        form={form}
      />

      <div className="grid gap-2">
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    placeholder="1234-5678-9012-3456"
                    value={cardNumber}
                    onChange={(e) =>
                      handleCardNumberChange(e, setCardType, setCardNumber)
                    }
                    maxLength={19}
                    minLength={12}
                    pattern="\d{4}-\d{4}-\d{4}-\d{4}"
                    title="Please enter a valid card number (16 digits separated by dashes)"
                    // required
                    // {...field}
                  />
                  <div className="absolute right-3 top-5  transform -translate-y-1/2">
                    {getCardIcon(cardType)}
                  </div>
                </div>
              </FormControl>
              {form?.formState?.errors?.cardNumber && <FormMessage />}
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <FormSelect
          form={form}
          id="month"
          name="month"
          placeholder="Month"
          label="Month"
          options={months}
        />

        <FormSelect
          form={form}
          name="year"
          label="Year"
          placeholder="Year"
          options={Array.from({ length: 10 }, (_, i) => ({
            label: `${new Date().getFullYear() + i}`,
            value: `${new Date().getFullYear() + i}`,
          }))}
        />
        <FormInput
          id="cvv"
          name="cvv"
          placeholder="123"
          label="CVV"
          form={form}
          maxLength={3}
        />
      </div>
    </div>
  );
};

export default CardForm;
