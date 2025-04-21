import { Button } from "@/components/ui/button";
import { Copy, ExternalLinkIcon } from "lucide-react";
import LeftSide from "@/app/_components/LeftSide";
export default function Dashboard() {
  return (
    <div className="w-[950px] h-[955px] ">
      <div className="w-[902px] h-[250px]"> </div>
      <Button>
        <Copy />
        Share page link
      </Button>
      <div></div>
    </div>
  );
}
