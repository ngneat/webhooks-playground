import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Handle POST request
    res.status(200).json({ message: "POST request received" });
  } else {
    // Handle other methods, e.g., GET
    res.status(200).json({ message: "Hello World" });
  }
}
