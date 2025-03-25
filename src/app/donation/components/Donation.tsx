"use client";
import { Button } from "@/components/ui/button";
import { Camera, Coffee, Heart } from "lucide-react";

import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50),
});

export const Donation = ({ amounts }: { amounts: number[] }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="">
      <div className="h-[300px] w-[100%] flex justify-center items-center">
        <Button>
          <Camera /> Add a cover image
        </Button>
      </div>
      <div className="flex justify-cente gap-[60px] justify-around">
        <div>
          <div>
            <div className="w-[630px] h-[233px] ">
              <div className="w-[30px] h-[30px] rounded-full bg-[gray]"></div>
              <Button>Edit page</Button>
              <p>Enke</p>
            </div>
            <div className="border-t">
              <p>About Jake</p>
              <p>
                I'm a typical person who enjoys exploring diffrent things. I
                also make music art as a hobby. Follow me along.
              </p>
            </div>
            <div className="h-[116px]">
              <p>Social media URL</p>
              <p>http://buyymeacoffee.com/speecerulz44</p>
            </div>
          </div>
          <div className="w-[632px] h-[236px] border-[1px]">
            <p>Recent Supporters </p>
            <div className="flex flex-col justify-center items-center w-[584px] h-[140px] border-[1px]">
              <p>
                <Heart fill="black" />
              </p>
              Be the first one to support jake
            </div>
          </div>
        </div>
        <div className="w-[628px] h-[509px] flex flex-col gap-[20px]">
          <p>Buy Jake a Coffee</p>
          <ToggleGroup className="flex flex-col gap-2" type="single">
            <p>Select amount:</p>
            <div className="flex  ">
              {amounts.map((amount, index) => {
                return (
                  <div key={index}>
                    <DonationCard index={index} amount={amount} />
                  </div>
                );
              })}
            </div>
          </ToggleGroup>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Enter BuyMeCoffee or social acount Url:
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="buymecoffee.com?/" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special message:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please write your message here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Support</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export const DonationCard = ({
  amount,
  index,
}: {
  amount: number;
  index: number;
}) => {
  return (
    <div>
      <ToggleGroupItem value={index.toString()} aria-label="Toggle bold">
        <Coffee />
        <p>${amount}</p>
      </ToggleGroupItem>
    </div>
  );
};
