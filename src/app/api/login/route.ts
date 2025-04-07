import { runQuery } from "@/util/queryService";
import { NextResponse } from "next/server";

type user = {
  username: string;
  email: string;
  password: string;
};

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { email, password } = await req.json();
    const getUserQuery = `SELECT username, password, email FROM "User" WHERE email=$1;`;
    const values = [email];

    const users: user[] = await runQuery(getUserQuery, values);

    if (users.length === 0) {
      return new NextResponse(JSON.stringify({ error: "user not found" }), {
        status: 404,
      });
    }

    const isValid = users[0].password === password;

    if (!isValid) {
      return new NextResponse(JSON.stringify({ error: "password buruu bn" }), {
        status: 404,
      });
    }
    const getProfileQuery=``
    const profiles: user[] = await runQuery(getProfileQuery, values);

    return new NextResponse(
      JSON.stringify({ user, message: "amjilttai nevterlee", profile:true }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Failed to run query:", err);
    return new NextResponse(JSON.stringify({ error: "Failed to run query" }), {
      status: 500,
    });
  }
}
