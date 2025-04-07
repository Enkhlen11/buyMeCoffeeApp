import { runQuery } from "@/util/queryService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { addPhoto, name, about, social } = await req.json();
    const insertProfile = `INSERT INTO "public"."usersProfile" ("addPhoto", name, about, social) VALUES ($1, $2, $3, $4) RETURNING *`;
    const insertedProfile = await runQuery(insertProfile, [
      addPhoto,
      name,
      about,
      social,
    ]);
// update user profileId with insertedProfile.id
    

    return new NextResponse(JSON.stringify({ insertedProfile }));
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "aldaa garlaa" }));
  }
}


// insert bolon create table 2 iin yalgaag oilgoh n