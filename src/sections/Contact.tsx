import { Fade } from "react-awesome-reveal";
import mapImage from '@/assets/ui/map.svg';

export const Contact = () => {
    return (
        <section className="contact--section">
            <header className="contact--section-title">
                <Fade direction="up" cascade damping={0.2} triggerOnce>
                    <span>The world is closer than you think</span>
                    <h3>From anywhere to everywhere</h3>
                    <p>Real routes. Real deliveries. Real customers from every corner of the world.</p>
                </Fade>
            </header>

            <div className="contact--section-map">
                <Fade delay={400} duration={1200} triggerOnce>
                    <img src={mapImage} alt="Global shipping map" />
                </Fade>
            </div>
        </section>
    );
}