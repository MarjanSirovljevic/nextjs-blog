import Head from 'next/head';
import Layout from '../../components/layout';

export default function Jokes({ data: jokes }) {
    return (
        <Layout>
            <section>
                <h1>Jokes Section</h1>
                <ul>
                    {jokes.map(({ id, setup, punchline }) => (
                        <li key={id}>
                            <h3>{setup}</h3>
                            <p>{punchline}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const response = await fetch(
        'https://official-joke-api.appspot.com/jokes/ten'
    );
    const data = await response.json();

    return {
        props: {
            data
        }
    };
}
