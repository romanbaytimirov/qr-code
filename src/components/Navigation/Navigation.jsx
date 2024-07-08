import { Link } from "react-router-dom"
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/generate">Generate</Link>
            <Link to="/scan">Scan</Link>
            <Link to="/generate-history">Generate History</Link>
            <Link to="/scan-history">Scan History</Link>
        </nav>
    )
}