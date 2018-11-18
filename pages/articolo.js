import Head from "../components/head";
import DatoCmsClient from '../utils/DatoCmsClient';
import * as Markdown from 'react-markdown';

const Articolo = ({data: {titolo, contenuto, image}}) => (
    <div>
        <Head title={titolo}/>
        <div className='Articolo'>
            <h1>{titolo}</h1>
            <Markdown source={contenuto}/>
            <img src={`https://www.datocms-assets.com${image.path}`} alt={image.alt}/>
        </div>
        <style jsx global>{`
            img {
                width: 100%;
                height: auto;
            }
            blockquote {
                margin: 0;
                padding-left: 40px;
                border-left: 5px solid #000;
            }
        `}
        </style>
    </div>
);

Articolo.getInitialProps = async (context) => {
    const { id } = context.query;
    const res = await DatoCmsClient.getArticolo(id);
    console.log(res);
    return {data: res}
};

export default Articolo;
