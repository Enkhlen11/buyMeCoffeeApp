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

const formSchema = z.object({
  email: z
    .string()
    .email("Invailed email. Use a format like example@email.com"),
  password: z.string().min(2).max(50),
});
export const SignUp2 = ({
  username,
  setCurrentSlide,
  currentSlide,
}: {
  username: string;
  setCurrentSlide: () => void;
  currentSlide: number;
}) => {
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
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/login");
  }
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[50%] h-full bg-[#FBBF24] ">
        <div className=" flex gap-3 font-bold ">
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
        <div className="flex justify-end">
          <Button>Log in</Button>
        </div>
        <div className=" w-full h-full  text-[24px] font-bold  flex flex-col gap-10 justify-center items-center">
          <div className="w-[407px] ">
            <p>Welcome, {username}</p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-6">
                      <FormDescription>
                        Connect email and set a password
                      </FormDescription>
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
                    <FormItem className="flex flex-col gap-6">
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
