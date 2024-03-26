import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import FormInput from "./form-input";
import FormSelect from "./form-select";
import { banksList } from "@/pages/utils/mock-data";
import { Form } from "react-router-dom";

const BankForm = (form) => {
  const [transfermethod, setTransfermethod] = useState("");

  const handleTranferMethod = (value) => {
    setTransfermethod(value);
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

      <FormSelect
        form={form}
        placeholder="Select Bank"
        name="bank"
        id="bank"
        label="Bank"
        options={banksList}
      />

      <FormSelect
        form={form}
        placeholder="Select Transfer Method"
        name="transfermethod"
        id="transfermethod"
        label="Transfer Method"
        options={[
          { label: "Email", value: "Email" },
          { label: "Phone", value: "Phone" },
        ]}
        onValueChange={(value) => handleTranferMethod(value)}
      />

      {transfermethod === "Email" && (
        <div className="grid gap-2">
          <Input
            id="email"
            type="email"
            placeholder="Enter email here"
            required={transfermethod === "Email"}
          />
        </div>
      )}

      {transfermethod === "Phone" && (
        <div className="grid gap-2">
          <Input
            id="phone"
            type="tel"
            placeholder="Enter phone number here"
            required={transfermethod === "Phone"}
          />
        </div>
      )}
    </div>
  );
};

export default BankForm;
