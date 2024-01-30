import { Outlet, NavLink } from "react-router-dom"


export const Layout = () => {
    
    const activeLink = ({isActive}) => isActive ? 'menu__item-active':'menu__item';  
    
    return (
        <header>
            <nav className="menu">
             <NavLink className={activeLink} to="/">Главная</NavLink>
             <NavLink className={activeLink} to="/drift">Дрифт-такси</NavLink>
             <NavLink className={activeLink} to="/timeattack">Time Attack</NavLink>
             <NavLink className={activeLink} to="/forza">Forza Karting</NavLink>
            </nav>
            <Outlet/>
        </header>
    )   
}