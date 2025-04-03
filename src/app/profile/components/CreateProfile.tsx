"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Camera, CameraIcon, Coffee } from "lucide-react";
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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  addPhoto: z.string().nonempty({ message: "Please enter image" }),
  name: z.string().nonempty({ message: "Please enter name" }),
  about: z.string().nonempty({ message: "Please enter info about yourself" }),
  social: z.string().url({ message: "Please enter a social link" }),
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
  const router = useRouter();
  return (
    <div className="">
      <div className="flex justify-between">
        <div className=" flex gap-3 font-bold pl-15 pt-10">
          <Coffee />
          <p>Buy Me Coffee</p>
        </div>
        <div className="flex justify-end pr-15 pt-10">
          <Button variant={"secondary"} onClick={() => router.push("/signup")}>
            Log out
          </Button>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center ">
        <div className="w-[510px] h-[631px]  flex flex-col gap-4 ">
          <p className="text-[24px] font-bold">Complete your profile page </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="addPhoto"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Add photo</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="w-40 h-40 rounded-full border-[2px]"
                        {...field}
                      />
                    </FormControl>
                    <div className="absolute my-[85px] ml-[65px]">
                      <CameraIcon className="text-[gray]" />
                    </div>
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
    </div>
  );
};
