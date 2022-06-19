// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    message: string;
};

const users = [
    { email: 'kim@test.com', password: '123', name: 'Kim' },
    { email: 'lee@test.com', password: '456', name: 'Lee' },
    { email: 'park@test.com', password: '789', name: 'Park' },
    { email: 'shpimit@gmail.com', password: '123', name: 'Park' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        // Sunho
        console.log('req.body.ID=' + req.body.ID);
        console.log('req.body.password=' + req.body.password);
        let user = users.find(user => user.email === req.body.ID);
        let password = users.find(user => user.password === req.body.password);

        console.log('user=' + user);

        if (user == null) {
            return res.status(404).json({ message: 'User does not exist' });
        }
        try {
            // if (bcrypt.compare(req.body.password, user.password)) {
            res.setHeader('Set-Cookie', 'a_name=shpimit@gmail.com;Max-Age=3600;HttpOnly,Secure');
            res.status(200).json({ message: 'ok' });
            // }
        } catch {
            res.status(500).json({ message: 'user not allowed' });
        }
    }
}
