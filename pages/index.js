import Head from '../components/head';
import Link from 'next/link';
import DatoCmsClient from '../utils/DatoCmsClient';

const PostLink = ({id, title}) => (
    <li>
        <Link as={`/a/${id}`} href={`/articolo?id=${id}`} prefetch>
            <a>{title}</a>
        </Link>
    </li>
);

const Index = ({data: articoli}) => (
    <div>
        <Head title="Home"/>
        {console.log(articoli)}
        <ul className="articoli">
            {
                articoli.map(({id, titolo, contenuto}) => (
                            <PostLink key={id} id={id} title={titolo} />
                    )
                )
            }
        </ul>
    </div>
);

Index.getInitialProps = async ({req}) => {
    const res = await DatoCmsClient.getArticoli({'filter[type]': 'articolo'});
    return {data: res}
};

export default Index
