import flagHungary from '@/assets/ui/flag-hungary.svg';
import flagGermany from '@/assets/ui/flag-germany.svg';

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
                    <li className="orders--section-stat">
                        <span>
                            4,000+
                        </span>

                        <h3>
                            Happy customers worldwide
                        </h3>

                        <p>
                            More than 4,000 shoppers trust us to deliver their international orders safely and on time.
                        </p>
                    </li>

                    <li className="orders--section-stat">
                        <span>
                            600%
                        </span>

                        <h3>
                            On-time delivery success
                        </h3>

                        <p>
                            Our shipments arrive reliably and damage-free backed by delivery guarantee.
                        </p>
                    </li>

                    <li className="orders--section-stat">
                        <span>
                            10+
                        </span>

                        <h3>
                            Global shipping coverage
                        </h3>

                        <p>
                            We forward packages from more than 10 countries to your doorstep.
                        </p>
                    </li>


                    <li className="orders--section-stat">
                        <span>
                            4.9 / 5
                        </span>

                        <h3>Customer satisfaction rating</h3>

                        <p>
                            Our users love our fast support, transparent pricing, and worry-free delivery.
                        </p>
                    </li>
                </ul>

                <div className="orders--section-form">
                    <div className="custom--select">
                        <label htmlFor="based">I’m based in</label>

                        <div className="relative">
                            <div className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 flex h-[24] w-[34px] items-center justify-center rounded border border-gray-200 bg-gray-50 p-1.5 mr-2">
                                <img
                                    src={flagHungary}
                                    alt="Hungary"
                                    className="h-full w-full"
                                />
                            </div>

                            <select id="based" name="based" className="pl-12">
                                <option value="HU">Hungary</option>
                            </select>
                        </div>

                        <span className="hint">We will deliver your parcel near you</span>
                    </div>

                    <div className="custom--select">
                        <label htmlFor="from">My parcel from</label>

                        <div className="relative">
                            <div className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 flex h-[24] w-[34px] items-center justify-center rounded border border-gray-200 bg-gray-50 p-1.5 mr-2">
                                <img
                                    src={flagGermany}
                                    alt="Germany"
                                    className="h-full w-full"
                                />
                            </div>

                            <select name="from" className="pl-12">
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                        <span className="hint">We are working together with most of the providers</span>
                    </div>

                    <button className="button--primary">
                        Start the journey
                    </button>
                </div>
            </div>
        </section>
    );
}