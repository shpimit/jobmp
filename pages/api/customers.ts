// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = [
    {
        id: number;
        image: string;
        name: string;
        email: string;
        gender: string;
        grade: string;
        like: string;
        birthday: string;
        skill: string;
        eduyn: string;
        project: string;
        period: string;
        gubun: string;
    },
    {
        id: number;
        image: string;
        name: string;
        email: string;
        gender: string;
        grade: string;
        like: string;
        birthday: string;
        skill: string;
        eduyn: string;
        project: string;
        period: string;
        gubun: string;
    },
    {
        id: number;
        image: string;
        name: string;
        email: string;
        gender: string;
        grade: string;
        like: string;
        birthday: string;
        skill: string;
        eduyn: string;
        project: string;
        period: string;
        gubun: string;
    }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'GET') {
        res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=3600;HttpOnly,Secure');
        res.status(200).json([
            {
                id: 1,
                image: 'https://placeimg.com/64/64/1',
                name: '홍길동',
                email: 'shpimit@nate.com',
                gender: '남자',
                grade: '특급',
                like: '좋아요',
                birthday: '961222',
                skill: 'Java, C',
                eduyn: '수료',
                project: 'Vaatz 생산자재',
                period: '2007~2009',
                gubun: '',
            },
            {
                id: 2,
                image: 'https://placeimg.com/64/64/2',
                name: '나동빈',
                email: 'shpi@nate.com',
                gender: '남자',
                grade: '특급',
                like: '좋아요',
                birthday: '960508',
                skill: 'Java, C, C++',
                eduyn: '수료',
                project: 'Vaatz 일반자재',
                period: '2007~2009',
                gubun: '',
            },
            {
                id: 3,
                image: 'https://placeimg.com/64/64/3',
                name: '이순신',
                email: 'sss@nate.com',
                gender: '남자',
                grade: '특급',
                like: '좋아요',
                birthday: '961222',
                skill: 'C#',
                eduyn: '수료',
                project: 'Vaatz 마스터',
                period: '2007~2009',
                gubun: '',
            },
        ]);
    }
}
