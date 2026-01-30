import girlImage from '@/assets/ui/girl.png';
import boyImage from '@/assets/ui/boy.png';
import arrowRight from '@/assets/ui/arrow-right.svg';

export const Hero = () => {
    return (
        <section className="hero--section">
            <div className="hero--section-left">
                <div className="badge badge--primary">
                    <span className="badge--inner">New feature</span>
                    <span className='badge--text'>Check out the new tracking page</span>
                    <img src={arrowRight} alt="Arrow right icon" />
                </div>

                <hgroup className="hero--section-content">
                    <h1>
                        Just shopping <br /> around the world
                    </h1>
                    <p>Shop the world without limits. You choose what you love, and we’ll handle the shipping, logistics and delivery fast, safe, and hassle-free.</p>
                </hgroup>

                <div className="buttons--container">
                    <a className='button--primary' href="/receive">
                        I'm receiving something
                    </a>

                    <a className='button--secondary' href="/how-it-works">
                        How it’s work?
                    </a>
                </div>
            </div>

            <figure className="hero--section-right">
                <img id='image-lady' src={girlImage} alt="a very happy lady holding a package." />
                <img id='image-boy' src={boyImage} alt="a very happy gentleman holding a package." />
            </figure>
        </section>
    );
}