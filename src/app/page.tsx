"use client";

import { AddCoverImageButton } from "./_components/AddCoverImage";
import { Button } from "@/components/ui/button";
import { UserType } from "@/util/type";
import { Camera } from "lucide-react";
import { useEffect, useState } from "react";
export default function Home() {
  const [users, setUser] = useState<UserType[] | null>(null);
  useEffect(() => {
    fetch("./api/user")
      .then((data) => data.json())
      .then((json) => setUser(json));
  }, []);
  console.log(users);
  return (
    <div>
      {users && users[0]?.username}
      <Button>
        <Camera /> Add a cover image
      </Button>
      <AddCoverImageButton />
    </div>
  );
}
