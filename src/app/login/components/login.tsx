"use client";
import { Coffee } from "lucide-react";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";
const formSchema = z.object({
  email: z
    .string()
    .email("Invailed email. Use a format like example@email.com"),
  password: z.string().min(2).max(50),
});
export const LogIn = () => {
  const [user, setUser] = useState()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const loginProfile = async () => {
      try {
        const res = await axios.post("/api/login", {
          email: values.email,
          password: values.password,
        });
        toast.success("amjilttai nevterlee");
        console.log(res.data, " useriin data");
        setUser(res.data.users[0])
        // const res = await fetch("api/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: values.email,
        //     password: values.password,
        //   }),
        // });
        // const data = await res.json();
        if (res.data.profile) {
          router.push("/dashboard");
        } else {
          router.push("/profile");
        }
      } catch (error) {
        toast.error("password buruu baina");
      }
    };

    loginProfile();
    console.log(values);
  }

  return (
    <div className="w-screen h-screen flex">
      <div className="w-[50%] h-full bg-[#FBBF24] ">
        <div className=" flex gap-3 font-bold pl-15 pt-10">
          <Coffee />
          <p>Buy Me Coffee</p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src="/illustration.png"></img>
          <p className="font-700 text-[24px]">Fund your creative work</p>
          <p className="text-[16px]">
            Accept support. Start a membership. It's easier than you think.
          </p>
        </div>
      </div>
      <div className="w-[50%] justify-center items-center">
        <div className="flex justify-end pr-15 pt-10">
          <Button variant={"secondary"} onClick={() => router.push("/signup")}>
            Sign up
          </Button>
        </div>
        <div className=" w-full h-full  text-[24px] font-bold  flex flex-col gap-10 justify-center items-center">
          <div className="w-[407px]">
            <p>Welcome back</p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email here" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter password here" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full" type="submit">
                  Continue
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
