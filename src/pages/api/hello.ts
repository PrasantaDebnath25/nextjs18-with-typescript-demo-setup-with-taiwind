// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

async function callingApi(
  // req: NextApiRequest,
  // ress: NextApiResponse<Data>,
) {
  const res = await fetch('/api/v1/employees')
  return res.json();
  // return //res.status(200).json({ name: "John Doe" });
}

async function methodCall(
  // req: NextApiRequest,
  // ress: NextApiResponse<Data>,
) {
  const res = await fetch('/api/v1/employee/1')
  return res.json();
  // return //res.status(200).json({ name: "John Doe" });
}

export default async function Call(
  type: number,
  // ress: NextApiResponse<Data>,
) {
  if (type === 1)
    callingApi()
  else {
    methodCall()
  }

  // return //res.status(200).json({ name: "John Doe" });
}