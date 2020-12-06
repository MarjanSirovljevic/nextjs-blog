import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export default function Home({ posts }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    I'm passionate chess player, and one day I'll be grandmaster
                    in chess.
                </p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{' '}
                    <a href='https://nextjs.org/learn'>our Next.js tutorial</a>
                    .)
                </p>
            </section>
            <section className={utilStyles.headingMd}>
                <h2>List of files:</h2>
                <ul className={utilStyles.list}>
                    {posts.map(({ id, title, date }) => (
                        <li key={id}>
                            <p>
                                <strong>Title:</strong> {title} <br />
                                <strong>File name:</strong> {id} <br />
                                <strong>Release date:</strong> {date}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const posts = getSortedPostsData();

    return {
        props: {
            posts
        }
    };
}
