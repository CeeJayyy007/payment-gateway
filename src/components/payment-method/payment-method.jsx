import { Label } from "../ui/label";
import { RadioGroupItem } from "../ui/radio-group";

const PaymentMethodItem = ({ item, handlePaymentMethodSelect }) => (
  <div className="flex flex-col items-center justify-between">
    <RadioGroupItem value={item.name} id={item.id} className="peer sr-only" />
    <Label
      htmlFor={item.id}
      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
      onClick={() => handlePaymentMethodSelect(item.name)}
    >
      {item.icon}
      {item.name}
    </Label>
  </div>
);

export default PaymentMethodItem;
