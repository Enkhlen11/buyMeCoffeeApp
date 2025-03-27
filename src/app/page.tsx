"use client";

import { AddCoverImageButton } from "./_components/AddCoverImage";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState<{ data: string } | null>(null);
  useEffect(() => {
    fetch("./api/user")
      .then((data) => data.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <div>
      {data?.data}
      <Button>
        <Camera /> Add a cover image
      </Button>
      <AddCoverImageButton />
    </div>
  );
}
