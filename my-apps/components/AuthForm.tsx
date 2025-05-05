"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormReturn } from "react-hook-form"
import { z } from "zod"

// interface Props<T extends FieldValues>

const AuthForm = ({ type, schema, defaultValues, onSubmit }: Props) => {

    const form: UseFormReturn = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    }

  return <div>AuthForm -- {type}</div>;
};

export default AuthForm;
