import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const body = await req.json();
  console.log(body);
  return Response.json({ status: "Success" }, { status: 200 });
};
