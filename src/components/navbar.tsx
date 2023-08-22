import { Link } from "react-router-dom"
import {useSearchParams} from 'react-router-dom'



const Navbar = () => {

    const [searchParams] = useSearchParams()
    let todosdData = searchParams.get('todos');

    return (
        <>
            <nav>
                <Link to='/' className={todosdData === null ? 'active' : ''}> All </Link>
                <Link to='/?todos=active' className={todosdData === 'active' ? 'active' : ''}> Active </Link>
                <Link to='/?todos=completed' className={todosdData === 'completed' ? 'active' : ''}> Completed </Link>
            </nav>
        </>
    )
}

export default Navbar