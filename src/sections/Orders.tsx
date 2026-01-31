import flagHungary from '@/assets/ui/flag-hungary.svg';
import flagGermany from '@/assets/ui/flag-germany.svg';
import { OrderStat } from '../components/sections/OrderStat';
import { CountrySelect } from '../components/inputs/CountrySelect';

const orderStats = [
    {
        value: "4,000+",
        label: "Happy customers worldwide",
        description: "More than 4,000 shoppers trust us to deliver their international orders safely and on time.",
    },
    {
        value: "600%",
        label: "On-time delivery success",
        description: "Our shipments arrive reliably and damage-free backed by delivery guarantee.",
    },
    {
        value: "10+",
        label: "Global shipping coverage",
        description: "We forward packages from more than 10 countries to your doorstep.",
    },
    {
        value: "4.9 / 5",
        label: "Customer satisfaction rating",
        description: "Our users love our fast support, transparent pricing, and worry-free delivery.",
    },
]

export const Orders = () => {
    return (
        <section className="orders--section">
            <header className="orders--section-title">
                <span>Launch faster</span>
                <h2>
                    Trusted by thousands of global shoppers
                </h2>
                <p>We deliver packages from anywhere in the world directly to your doorstep or closest locker fast, secure and hassle-free.</p>
            </header>

            <div className="orders--section-content">
                <ul className="orders--section-stats">
                    {orderStats.map((stat, index) => (
                        <OrderStat
                            key={index}
                            value={stat.value}
                            label={stat.label}
                            description={stat.description}
                        />
                    ))}
                </ul>

                <div className="orders--section-form">
                    <CountrySelect
                            id="based"
                            label="I’m based in"
                            flagSrc={flagHungary}
                            countryName="Hungary"
                            countryCode="HU"
                            hint="We will deliver your parcel near you"
                        />

                        <CountrySelect
                            id="from"
                            label="My parcel from"
                            flagSrc={flagGermany}
                            countryName="Germany"
                            countryCode="DE"
                            hint="We are working together with most of the providers"
                        />

                    <button className="button--primary">
                        Start the journey
                    </button>
                </div>
            </div>
        </section>
    );
}