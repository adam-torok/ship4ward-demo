type LinkItem = {
    label: string;
    href: string;
    badge?: string;
};

type FooterItemProps = {
    title: string;
    links: LinkItem[];
};

export const FooterItem = ({ title, links }: FooterItemProps) => {
    return (
        <div className="footer--item">
            <div className="footer--item-title">
                {title}
            </div>

            <div className="flex flex-col gap-3">
                {links.map((link, index) => (
                    <div key={index} className="footer-item-element">
                        <a href={link.href} className="hover:text-[var(--primary-color)] transition-colors">
                            {link.label}
                        </a>

                        {link.badge && (
                            <span className="badge ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                                {link.badge}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};