import { getUser } from "@/back_end/user";
import { runQuery } from "@/util/queryService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, username, password } = await req.json();

    const createTable = `INSERT INTO "public"."User" (email, username, password) VALUES ($1, $2, $3)`;

    const users = await runQuery(createTable, [email, username, password]);

    return new NextResponse(JSON.stringify({ users }));
  } catch (error) {}
  // const user = await getUser();
  // return new Response(JSON.stringify({ data: user }));
}
// export async function POST(req: Request) {
//   const body = await req.json();
//   console.log({ body });
//   return new Response("Hello World");
// }
export async function DELETE(req: Request) {}
