import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/Validations'
import React from 'react'

const page = () => (
    <AuthForm type="SIGN_IN" schema={signInSchema} defaultValues={{email: "", password: ""}}/>
)

export default page