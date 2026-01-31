import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { type ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}