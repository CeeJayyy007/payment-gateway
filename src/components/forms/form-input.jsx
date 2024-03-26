import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormInput = ({
  label,
  name,
  form,
  placeholder,
  type = "text",
  id,
  maxLength,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              id={id}
              placeholder={placeholder}
              type={type}
              disabled={form?.formState?.isLoading}
              maxLength={maxLength}
              {...field}
            />
          </FormControl>
          {form?.formState?.errors && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default FormInput;
