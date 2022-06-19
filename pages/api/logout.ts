// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=0;HttpOnly,Secure');
        res.status(200).json({ message: 'ok' });
    }
}
