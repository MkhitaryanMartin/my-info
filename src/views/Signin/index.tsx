"use client"

import client from "@/apollo/client";
import { LOGIN_MUTATION, MY_PROFILE_QUERY, USER } from "@/apollo/user";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Cookies from "@/utils/cookies";
import { signInValidationSchema } from "@/utils/yupSchema";
import { useMutation, useQuery } from "@apollo/client";
import { setCookie } from "cookies-next";
import { useFormik, FormikProvider, Form } from "formik";
import { useEffect, useState } from "react";
import {signIn, useSession} from "next-auth/react"
import { useUserStore } from "@/store/user";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";


export default function LoginForm() {
  const {getUser } = useUserStore();
  const [loader, setLoader] = useState(false)



  const formikSignIn = useFormik({
    initialValues: {
      email: "john@mail.com",
      password: "",
    },

    validationSchema: signInValidationSchema,
    onSubmit: async ({email, password}) => {
       setLoader(true)
  const auth  =   await signIn("credentials",{
      email,
      password,
      redirect: false
     })

     if(auth && !auth?.error){
      const { data } = await client.query({query: MY_PROFILE_QUERY});
      formikSignIn.resetForm();
      getUser(data?.myProfile);
      window.location.replace('/my_info');
     }else{
      setLoader(false)
      formikSignIn.setErrors({
            email: " ",
            password: "Incorrect login or password",
          }); 
     }

    },
  });

  return (
    <div className="w-full h-[calc(100vh-86px)] flex items-center justify-center">
   {loader ? (
       <div className="w-[80%] flex flex-col space-y-3 absolute z-20">
       <Skeleton className="h-[300px] w-[100%] rounded-xl" />
       <div className="space-y-2">
         <Skeleton className="h-[30px] w-[250px]" />
         <Skeleton className="h-[30px] w-[200px]" />
       </div>
     </div>
   ):(<Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle className="text-2xl">Login</CardTitle>
      <CardDescription>Enter your email and password to log in</CardDescription>
    </CardHeader>
    <FormikProvider value={formikSignIn}>
      <Form onSubmit={formikSignIn.handleSubmit} className="signIn-form">
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              value={formikSignIn.values.email}
              onChange={formikSignIn.handleChange}
              onBlur={formikSignIn.handleBlur}
              className={formikSignIn.errors.email && formikSignIn.touched.email ? "border-red-500" : ""}
            />
            {formikSignIn.errors.email && formikSignIn.touched.email && (
              <p className="text-red-500 text-sm">{formikSignIn.errors.email}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Your password"
              value={formikSignIn.values.password}
              onChange={formikSignIn.handleChange}
              onBlur={formikSignIn.handleBlur}
              className={formikSignIn.errors.password && formikSignIn.touched.password ? "border-red-500" : ""}
            />
            {formikSignIn.errors.password && formikSignIn.touched.password && (
              <p className="text-red-500 text-sm">{formikSignIn.errors.password}</p>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-end flex-col gap-[10px]">
          <Button
            type="submit"
            className="w-full"
            disabled={!(formikSignIn.isValid && formikSignIn.dirty)}
          >
            Sign in
          </Button>
        </CardFooter>
      </Form>
    </FormikProvider>
  </Card>)}  
    </div>
  );
}
