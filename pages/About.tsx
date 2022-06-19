import type { NextPage } from 'next';
import { Header, Divider, List, Form, TextArea, Checkbox, Button } from 'semantic-ui-react';

const about: NextPage = () => {
    return (
        <div>
            <Header as="h3" style={{ paddingTop: 40 }} color="teal">
                IT Playgroud 소개
            </Header>
            <Divider />
            <List>
                <List.Item>
                    <List.Icon name="users" />
                    <List.Content>Semantic UI</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>New Tork, NY</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="mail" />
                    <List.Content>
                        <a href="mailto:shpimit@gmail.com">shpimit@gamil.com</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="linkify" />
                    <List.Content>
                        <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                    </List.Content>
                </List.Item>
            </List>
            <Header as="h3" style={{ paddingTop: 40 }} color="teal">
                문의사항
            </Header>
            <Divider />
            <Form>
                <Form.Field>
                    <label>제목</label>
                    <input placeholder="subject" />
                </Form.Field>
                <Form.Field>
                    <label>내용</label>
                    <input placeholder="content" />
                </Form.Field>
                <Form.Field>
                    <label>내용(More)</label>
                    <TextArea placeholder="Tell us more" />
                </Form.Field>
                <Form.Field>
                    <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field>
                <Button type="submit">Submit</Button>
            </Form>

            {/* <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>
                </div>
            </main> */}
        </div>
    );
};

export default about;
