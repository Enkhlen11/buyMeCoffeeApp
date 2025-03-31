"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Camera } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useState } from "react";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Please enter name" }),
  about: z.string().nonempty({ message: "Please enter info about yourself" }),
  social: z.string().min(2, { message: "Please enter a social link" }),
});
export const CreateProfile = () => {
  const [profileImageFile, setProffileImageFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="w-[510px] h-[631px]  flex flex-col gap-4 ">
        <p className="text-[24px] font-bold">Complete your profile page </p>
        <div className="flex flex-col gap-2">
          <p>Add photo</p>
          <div className="w-[150px] h-[150px] border-2 border-dotted rounded-full flex justify-center items-center">
            <Camera color="gray" />
          </div>
          {/* <input type="file" /> */}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add photo</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      className="w-40 h-40 rounded-full border-[2px]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write about yourself here"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="social"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Social media URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
