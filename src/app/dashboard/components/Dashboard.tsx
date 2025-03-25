import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="w-[100%]  mt-[30px]">
      <div className="flex flex-col items-start">
        <Button variant={"default"}>Home</Button>
        <Button variant={"outline"}>Explore</Button>
        <Button variant={"secondary"}>
          View page <ExternalLinkIcon />
        </Button>
        <Button>Account settings</Button>
      </div>
      <div></div>
    </div>
  );
}
