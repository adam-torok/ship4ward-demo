import logoLayers from '@/assets/logos/logo-1.png';
import logoSisyphus from '@/assets/logos/logo-2.png';
import logoCircooles from '@/assets/logos/logo-3.png';
import logoCatalog from '@/assets/logos/logo-4.png';
import logoQuotient from '@/assets/logos/logo-5.png';


export const Logos = () => {
    return (
        <section className="logos--section">
            <header className="logos--section-title">
                Join 4,000+ companies already growing
            </header>

            <div className="logos--section-items">
                <img width="auto" height="48px" src={logoLayers} alt="img" />
                <img width="auto" height="48px" src={logoSisyphus}  alt="img" />
                <img width="auto" height="48px" src={logoCircooles}  alt="img" />
                <img width="auto" height="48px" src={logoCatalog}  alt="img" />
                <img width="auto" height="48px" src={logoQuotient}  alt="img" />
            </div>
        </section>
    );
}