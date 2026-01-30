import logo from '@/assets/ui/ship4ward-logo.svg';
import avatar from '@/assets/ui/avatar.svg';

export const Navbar = () => {
    return (
        <header className="header">
            <nav className="header--nav">
                <div className='header--nav-content'>
                    <div className="header--nav-logo">
                        <img src={logo} alt="" />
                    </div>

                    <ul className="header--nav-items">
                        <li>
                            <a href="">Teszt item</a>
                        </li>

                        <li>
                            <a href="">Teszt item</a>
                        </li>

                        <li>
                            <a href="">Teszt item</a>
                        </li>
                    </ul>
                </div>

                <div className='header--nav-avatar'>
                    <img src={avatar} alt="avatar" />
                </div>
            </nav>
        </header>
    );
}