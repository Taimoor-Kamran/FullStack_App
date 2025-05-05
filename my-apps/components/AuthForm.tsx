"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { Schema, z } from "zod"

// interface Props<T extends FieldValues>

const AuthForm = ({ type, schema, defaultValues, onSubmit }: Props) => {

    const form: UseFormReturn = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
      })
     
      // 2. Define a submit handler.
      const handleSubmit: SubmitHandler<T> = async (data) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    }

  return <div>AuthForm -- {type}</div>;
};

export default AuthForm;
