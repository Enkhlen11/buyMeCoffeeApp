// "use client";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Camera, CameraIcon, Coffee, X } from "lucide-react";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { imageUpload } from "@/util/imageUpload";

// const formSchema = z.object({
//   addPhoto: z
//     .string({ message: "Please enter image" })
//     .nonempty({ message: "Please enter image" }),
//   name: z
//     .string({ message: "Please enter name" })
//     .nonempty({ message: "Please enter name" }),
//   about: z
//     .string({ message: "Please enter info about yourself" })
//     .nonempty({ message: "Please enter info about yourself" }),
//   social: z
//     .string({ message: "Please enter a social link" })
//     .url({ message: "Please enter a social link" }),
// });
// export const CreateProfile = () => {
//   const [profileImageFile, setProffileImageFile] = useState<File | null>(null);
//   const [previewURL, setPreviewURL] = useState<string | null>(null);
//   const router = useRouter();

//   // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       addPhoto: "",
//       name: "",
//       about: "",
//       social: "",
//     },
//   });

//   // 2. Define a submit handler.
//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     const imageURL = await imageUpload(file);
//     values.profileImageFile = imageURL;
//     console.log(values);

//     router.push(`/profile`);
//     console.log(values);
//   }

//   const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files) {
//       return alert("Та зургаа сонгоно уу?");
//     }
//     const imageUrl = URL.createObjectURL(e.target.files[0]);
//     setPreviewURL(imageUrl);
//     setProffileImageFile(e.target.files[0]);
//   };

//   const deleteHandler = () => {
//     return setPreviewURL(null);
//     setProffileImageFile(null);
//   };
//   return (
//     <div className="">
//       <div className="flex justify-between">
//         <div className=" flex gap-3 font-bold pl-15 pt-10">
//           <Coffee />
//           <p>Buy Me Coffee</p>
//         </div>
//         <div className="flex justify-end pr-15 pt-10">
//           <Button variant={"secondary"} onClick={() => router.push("/login")}>
//             Log out
//           </Button>
//         </div>
//       </div>
//       <div className="w-screen h-screen flex flex-col justify-center items-center ">
//         <div className="w-[510px] h-[631px]  flex flex-col gap-4 ">
//           <p className="text-[24px] font-bold">Complete your profile page </p>

//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//               <FormField
//                 control={form.control}
//                 name="addPhoto"
//                 render={({ field }) => (
//                   <FormItem className="relative">
//                     <FormLabel>Add photo</FormLabel>
//                     <FormControl>
//                       <div className="rounded-full border-2 border-dashed w-[160px] h-[160px] flex justify-center items-center overflow-hidden">
//                         {previewURL ? (
//                           <div className="flex justify-center items-center">
//                             <Image
//                               alt=""
//                               src={previewURL}
//                               width={160}
//                               height={160}
//                             ></Image>
//                             <Button
//                               className="absolute bg-white rounded-full w-[30px] h-[30px]"
//                               onClick={deleteHandler}
//                             >
//                               <X className="absolute" color="red" />
//                             </Button>
//                           </div>
//                         ) : (
//                           <div className="flex justify-center items-center">
//                             <Input
//                               type="file"
//                               {...field}
//                               className="rounded-full w-full h-full border-0 opacity-0 z-200"
//                               onChange={inputHandler}
//                             />
//                             <Camera className="absolute opacity-30" />
//                           </div>
//                         )}
//                       </div>
//                     </FormControl>
//                     {/* <div className="absolute my-[85px] ml-[65px]">
//                       <CameraIcon className="text-[gray]" />
//                     </div> */}
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter your name here" {...field} />
//                     </FormControl>

//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="about"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>About</FormLabel>
//                     <FormControl>
//                       <Textarea
//                         placeholder="Write about yourself here"
//                         {...field}
//                       />
//                     </FormControl>

//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="social"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Social media URL</FormLabel>
//                     <FormControl>
//                       <Input placeholder="https://" {...field} />
//                     </FormControl>

//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <div className="flex justify-end">
//                 <Button type="submit">Submit</Button>
//               </div>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };
