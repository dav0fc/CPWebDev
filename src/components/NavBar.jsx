import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function NavBar() { 
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    const isActive = (pathname) => activePath === pathname;

    return (
        <>
            <header className="header">
                <nav>
                    <ul className="ul">
                        <li>
                            <Link className={isActive("/") ? 'active' : ''} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={isActive("/sobre") ? 'active' : ''} to="/sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link className={isActive("/contato") ? 'active' : ''} to="/contato">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
