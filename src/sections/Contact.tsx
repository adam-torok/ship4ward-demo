import mapImage from '@/assets/ui/map.svg';

export const Contact = () => {
    return (
        <section className="contact--section">
            <header className="contact--section-title">
                <span>The world is closer than you think</span>
                <h3>From anywhere to everywhere</h3>
                <p>Real routes. Real deliveries. Real customers from every corner of the world.</p>
            </header>

            <div className="contact--section-map">
                <img src={mapImage} alt="A map." />
            </div>
        </section>
    );
}