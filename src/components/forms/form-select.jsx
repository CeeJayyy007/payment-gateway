import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

const FormSelect = ({
  form,
  name,
  label,
  options,
  props,
  placeholder,
  onValueChange,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            value={field.value ? field.value : ""}
            {...props}
          >
            <FormControl>
              <SelectTrigger
                className={field.value ? "" : "text-muted-foreground"}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((item) => (
                <SelectItem key={item.label} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form?.formState?.errors && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default FormSelect;
