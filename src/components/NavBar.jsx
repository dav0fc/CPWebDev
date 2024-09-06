import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <>
            <header className="header">
                <nav>
                    <ul className="ul">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive && "active"
                                }
                                to="/sobre"
                            >
                                Sobre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive && "active"
                                }
                                to="/contato"
                            >
                                Contato
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
