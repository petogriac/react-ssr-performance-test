import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className={'footer-container'}>
            <Link to='/l/0'>Listing 0</Link>
            <Link to='/l/80'>Listing 80</Link>
            <Link to='/l/120'>Listing 120</Link>
            <Link to='/l/500'>Listing 500</Link>
            <Link to='/l/3500'>Listing 3500</Link>
        </div>
    )
}
