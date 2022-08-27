import lock from './lock.png';
import './Styles.css';

export default function Nav(){
    return(
        <nav className="navbar">
            <img src={lock} className="lock-logo" alt="lock logo"/>
            
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link link active" aria-current="page" href="#"><b>Home</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link" href="#"><b>About</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link" href="#"><b>Contact</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link"><b>Sign Up</b></a>
                </li>
            </ul>
        </nav>
    );
};