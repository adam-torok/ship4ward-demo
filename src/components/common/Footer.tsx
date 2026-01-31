import logo from '@/assets/ui/ship4ward-logo.svg';
import { FooterItem } from '@/components/common/FooterItem';

const footerData = [
    {
        title: "Product",
        links: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            { label: "Solutions", href: "#", badge: "New" },
            { label: "Tutorials", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Releases", href: "#" },
        ]
    },
    {
        title: "Company",
        links: [
            { label: "About us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "News", href: "#" },
            { label: "Media kit", href: "#" },
            { label: "Contact", href: "#" },
        ]
    },
    {
        title: "Resources",
        links: [
            { label: "Blog", href: "#" },
            { label: "Newsletter", href: "#" },
            { label: "Events", href: "#" },
            { label: "Help centre", href: "#" },
            { label: "Tutorials", href: "#" },
            { label: "Support", href: "#" },
        ]
    },
    {
        title: "Use cases",
        links: [
            { label: "Startups", href: "#" },
            { label: "Enterprise", href: "#" },
            { label: "Government", href: "#" },
            { label: "SaaS", href: "#" },
            { label: "Marketplaces", href: "#" },
            { label: "Ecommerce", href: "#" },
        ]
    },
    {
        title: "Social",
        links: [
            { label: "Twitter", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "AngelList", href: "#" },
            { label: "Dribbble", href: "#" },
        ]
    },
    {
        title: "Legal",
        links: [
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Cookies", href: "#" },
            { label: "Licenses", href: "#" },
            { label: "Settings", href: "#" },
            { label: "Contact", href: "#" },
        ]
    },
];

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="newsletter--section">
                <header className="newsletter--section-title">
                    <h3>Join our newsletter</h3>
                    <p>We’ll send you a nice letter once per week. No spam.</p>
                </header>

                <div className="newsletter--section-form">
                    <input placeholder='Enter your email' type="email" />
                    <button className="button--primary smaller">Subscribe</button>
                </div>
            </div>

            <div className="footer--items grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {footerData.map((column, index) => (
                    <FooterItem
                        key={index}
                        title={column.title}
                        links={column.links}
                    />
                ))}
            </div>

            <div className="footer--bottom">
                <img src={logo} alt="Ship4ward logo" className="h-8 w-auto" />
                <span>
                    © 2025 SHIP4WARD. All rights reserved.
                </span>
            </div>
        </footer>
    );
}