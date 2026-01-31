import { Fade } from "react-awesome-reveal";
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
                <Fade triggerOnce>
                    Join 4,000+ companies already growing
                </Fade>
            </header>

            <div className="logos--section-items">
                <Fade cascade damping={0.1} direction="up" triggerOnce>
                    {partners.map((partner) => (
                        <img
                            height="auto"
                            width="auto"
                            key={partner.name}
                            src={partner.src}
                            alt={`${partner.name} logo`}
                            className="hover:opacity-100 transition-opacity duration-300"
                        />
                    ))}
                </Fade>
            </div>
        </section>
    );
}