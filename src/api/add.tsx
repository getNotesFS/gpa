import type { NextApiRequest, NextApiResponse } from 'next';
 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const added ="11111";
  res.status(200).json(added);
}