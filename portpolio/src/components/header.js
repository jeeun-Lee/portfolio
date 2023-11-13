import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className={styles.header__wrap}>
            <ul className={styles.header}>
                <li>
                    <Link to={`/`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={`/skill`}>
                        Skill
                    </Link>
                </li>
                <li>
                    <Link to={`/project`}>
                        Project
                        </Link>
                </li>
                <li>
                    <Link to={`/info`}>
                        Infomation
                    </Link>
                </li>
            </ul>
        </div>
        
    )
}
export default Header;