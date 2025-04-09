import { runQuery } from "@/util/queryService";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<Response> {
  try {
    const { addPhoto, name, about, social, userId } = await req.json();
    const insertProfile = `INSERT INTO "usersProfile" ("avatarImage", name, about, "socialMediaURL") VALUES ($1, $2, $3, $4) RETURNING *`;
    const insertedProfile = await runQuery(insertProfile, [
      addPhoto,
      name,
      about,
      social,
    ]);

    if (!insertedProfile) {
      return new NextResponse(
        JSON.stringify({ error: "Profile uusgehed aldaa garlaa " }),
        {
          status: 400,
        }
      );
    }

    // update user profileId with insertedProfile.id
    const updateUser = `UPDATE "User" SET "User".profileId = $1 WHERE user.id = $2 `;
    await runQuery(updateUser, [insertedProfile[0].id, userId]);
    return new NextResponse(
      JSON.stringify({
        profile: insertedProfile,
        message: "amjilttai uusgelee",
      })
    );
    //end userprofile baival dashboardluu bhgv baival
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "aldaa garlaa userprofile post huselt " })
    );  
  }
}

// insert bolon create table 2 iin yalgaag oilgoh n
