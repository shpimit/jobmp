import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Header, Image, Table } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerType from '../stores/CustomerType';
// import withAuth from './withAuth';
import { signOut, useSession } from "next-auth/react";

const Profile: NextPage = () => {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { data: session, status } = useSession();

    if (status === "authenticated") console.log("session", session)    

    // const API_URL = process.env.NEXT_PUBLIC_API_URL;

    function getData() {
        axios.get('/api/customers').then(res => {
            console.log(res.data);
            setList(res.data);
            setIsLoading(false);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    const cellTitle = [
        '번호',
        '프로필 이미지',
        '이름',
        '이메일',
        '성별',
        '등급',
        '좋아요',
        '생년월일',
        '보유기술',
        'KISA이수',
        '프로젝트',
        '기간',
        '설정',
    ];

    return (
        <div>
            <Table basic="very" celled collapsing>
                <Table.Header>
                    <Table.Row>
                        {cellTitle.map((cl, idx) => (
                            <Table.HeaderCell key={idx}>{cl}</Table.HeaderCell>
                        ))}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {list &&
                        list.map((customer: CustomerType) => (
                            <Table.Row key={customer.id}>
                                <Table.Cell>{customer.id}</Table.Cell>
                                <Table.Cell>
                                    <Header as="h4" image>
                                        <Image src={customer.image} rounded size="mini" />
                                        <Header.Content>
                                            {customer.name}
                                            <Header.Subheader>{customer.gender}</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{customer.name}</Table.Cell>
                                <Table.Cell>{customer.email}</Table.Cell>
                                <Table.Cell>{customer.gender}</Table.Cell>
                                <Table.Cell>{customer.grade}</Table.Cell>
                                <Table.Cell>{customer.like}</Table.Cell>
                                <Table.Cell>{customer.birthday}</Table.Cell>
                                <Table.Cell>{customer.skill}</Table.Cell>
                                <Table.Cell>{customer.eduyn}</Table.Cell>
                                <Table.Cell>{customer.project}</Table.Cell>
                                <Table.Cell>{customer.period}</Table.Cell>
                                <Table.Cell>{customer.gubun}</Table.Cell>
                            </Table.Row>
                        ))}
                </Table.Body>
            </Table>
        </div>
    );
};

// export default withAuth(Profile);
export default Profile;
