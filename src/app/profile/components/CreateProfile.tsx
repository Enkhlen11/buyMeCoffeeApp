import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const CreateProfile = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[510px] h-[631px] border-1">
        <p>Complete your </p>
        <p>Add photo</p>
        <p>Name</p>
        <input
          type="text"
          placeholder="Enter your name here "
          className="border-1 rounded-[6px]"
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
          className="border-1 rounded-[6px]"
        />
        <Button>Continue</Button>
      </div>
    </div>
  );
};
