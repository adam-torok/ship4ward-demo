import logoLayers from '@/assets/logos/logo-1.svg';
import logoSisyphus from '@/assets/logos/logo-2.svg';
import logoCircooles from '@/assets/logos/logo-3.svg';
import logoCatalog from '@/assets/logos/logo-4.svg';
import logoQuotient from '@/assets/logos/logo-5.svg';

const partners = [
    { name: 'Layers', src: logoLayers },
    { name: 'Sisyphus', src: logoSisyphus },
    { name: 'Circooles', src: logoCircooles },
    { name: 'Catalog', src: logoCatalog },
    { name: 'Quotient', src: logoQuotient },
];

export const Logos = () => {
    return (
        <section className="logos--section">
            <header className="logos--section-title">
                Join 4,000+ companies already growing
            </header>

            <div className="logos--section-items">
                {partners.map((partner) => (
                    <img
                        height="auto"
                        width="auto"
                        key={partner.name}
                        src={partner.src}
                        alt={`${partner.name} logo`}
                    />
                ))}
            </div>
        </section>
    );
}