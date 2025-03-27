import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Camera } from "lucide-react";

export const CreateProfile = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="w-[510px] h-[631px]  flex flex-col gap-4 ">
        <p className="text-[24px] font-bold">Complete your profile page </p>
        <div className="flex flex-col gap-2">
          <p>Add photo</p>
          <div className="w-[150px] h-[150px] border-2 border-dotted rounded-full flex justify-center items-center">
            <Camera color="gray" />
          </div>
        </div>

        <p>Name</p>
        <input
          type="text"
          placeholder="Enter your name here "
          className="border-1 rounded-[6px] w-full"
        />
        <p>About</p>
        <Textarea
          className="border-1 rounded-[6px]"
          placeholder="Write about yourself here"
        />
        <p>Social media URL</p>
        <input
          type="text"
          placeholder="https://"
          className="border-1 rounded-[6px] w-full"
        />
        <div className="flex justify-end">
          <Button className="w-[246px]">Continue</Button>
        </div>
      </div>
    </div>
  );
};
