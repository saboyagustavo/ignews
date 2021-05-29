import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class NextDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
                    <meta name="description" content="Subscription News about React library, Next.js framework and front-end technologies" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>  
        );
    }
}