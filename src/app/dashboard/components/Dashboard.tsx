import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="w-[100%] bg-[#e6afaf] mt-[30px]">
      <div className="flex flex-col items-start">
        <Button variant={"ghost"}>Home</Button>
        <Button variant={"ghost"}>Explore</Button>
        <Button variant={"ghost"}>View page</Button>
        <Button variant={"ghost"}>Account settings</Button>
      </div>
      <div></div>
    </div>
  );
}
