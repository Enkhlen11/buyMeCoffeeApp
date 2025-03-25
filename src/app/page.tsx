import Image from "next/image";
import { AddCoverImageButton } from "./_components/AddCoverImage";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Button>
        <Camera /> Add a cover image
      </Button>
      <AddCoverImageButton />
    </div>
  );
}
