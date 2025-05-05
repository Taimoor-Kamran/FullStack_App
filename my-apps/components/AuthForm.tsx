"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { Schema, z } from "zod"

interface Props<T extends FieldValues> {
    schema
}

const AuthForm = ({ type, schema, defaultValues, onSubmit }: Props) => {

    const form: UseFormReturn = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
      })
     
      // 2. Define a submit handler.
      const handleSubmit: SubmitHandler<T> = async (data) {}
    }

  return <div>AuthForm -- {type}</div>;
};

export default AuthForm;
