import { ChevronDown, Coffee } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <div className="w-full h-[70px] bg-[gray] flex px-[40px]">
      <div className="w-full  flex gap-3 font-bold items-center">
        <Coffee />
        <p>Buy Me Coffee</p>
      </div>
      <div className="flex items-center gap-20">
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] bg-[green] rounded-full"></div>
          <p>Enke</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
