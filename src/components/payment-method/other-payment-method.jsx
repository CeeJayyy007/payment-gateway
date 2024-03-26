import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

const OtherPaymentMethod = ({
  count,
  otherPaymentMethods,
  toggleIconsArray,
  handleOtherPaymentMethodSelect,
}) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <Label
        htmlFor="others"
        className="flex flex-col items-center justify-between rounded-md border-2 border-none bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
      >
        {toggleIconsArray[count].icon}
        <Select
          onValueChange={(value) => handleOtherPaymentMethodSelect(value)}
        >
          <SelectTrigger id="others"></SelectTrigger>
          <SelectContent>
            {otherPaymentMethods.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Label>
    </div>
  );
};

export default OtherPaymentMethod;
