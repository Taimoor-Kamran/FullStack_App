"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  UseFormReturn,
  DefaultValues,
} from "react-hook-form";
import { z } from "zod";

// Import the schema directly inside this file instead of passing as a prop
const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  universityId: z.coerce.number(),
  universityCard: z.string().nonempty("University Card is required."),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

interface Props {
  defaultValues: SignUpFormData;
  onSubmit: (data: SignUpFormData) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = ({ type, defaultValues, onSubmit }: Props) => {
  const form: UseFormReturn<SignUpFormData> = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues,
  });

  const handleSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    await onSubmit(data);
  };

  return <div>AuthForm -- {type}</div>;
};

export default AuthForm;
