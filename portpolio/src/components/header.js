import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { Link, NavLink  } from "react-router-dom";
function Header(){
        useEffect(() => {
        }, [])
    
    return(
        <div className={styles.header__wrap}>
            <ul className={`${styles.header} nav`}>
                <li>
                    <NavLink  to={`/`}  className={({isActive}) => (isActive ? "navActive" : "")}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/skill`}  className={({isActive}) => (isActive ? "navActive" : "")}>
                        Skill
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/project`} className={({isActive}) => (isActive ? "navActive" : "")}>
                        Project
                        </NavLink>
                </li>
                <li>
                    <NavLink to={`/info`} className={({isActive}) => (isActive ? "navActive" : "")}>
                        Infomation
                    </NavLink>
                </li>
            </ul>
        </div>
        
    )
}
export default Header;