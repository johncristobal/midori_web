import Head from "next/head";
import { FC } from "react";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

interface Props {
    children: JSX.Element;
    title: string;
    description: string;
}

const ShopLayout: FC<Props> = ({ children, title, description}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='og:title' content={title} />
                <meta name='og:description' content={description} />
            </Head>

            <Navbar />
            
            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}

export default ShopLayout;