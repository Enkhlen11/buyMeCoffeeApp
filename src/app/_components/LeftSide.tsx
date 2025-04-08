import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";

export default function LeftSide() {
  return (
    <div className="w-[25%]  mt-[30px]">
      <div className="flex flex-col  gap-3 ml-[40px]">
        <Button
          variant={"outline"}
          className="w-[100%] flex justify-start px-10"
        >
          Home
        </Button>
        <Button variant={"outline"} className="w-[100%] justify-start px-10">
          Explore
        </Button>
        <Button variant={"outline"} className="w-[100%] justify-start px-10">
          View page
          <ExternalLinkIcon />
        </Button>
        <Button variant={"outline"} className="w-[100%] justify-start px-10">
          Account settings
        </Button>
      </div>
      <div></div>
    </div>
  );
}
