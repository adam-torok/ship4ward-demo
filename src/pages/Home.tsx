import Layout from '../layouts/Layout';
import { Contact } from '../sections/Contact';
import { Faq } from '../sections/Faq';
import { Hero } from '../sections/Hero';
import { Logos } from '../sections/Logos';
import { Orders } from '../sections/Orders';

export const Home = () => {
    return (
        <Layout>
            <Hero />
            <Orders />
            <Logos />
            <Contact />
            <Faq />
        </Layout>
    );
}