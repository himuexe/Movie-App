'use client';
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";

const formSchema = z.object({
  input: z.string().min(2).max(30),
});

const SearchInput = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });
  const onSubmit =(values: z.infer<typeof formSchema>)=>{
    router.push(`/search/${values.input}`);
    form.reset();
  }

  return (
    <Form {...form}>
      <form className="text-black space-y-1" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search .." {...field}></Input>
              </FormControl>
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
};

export default SearchInput;
