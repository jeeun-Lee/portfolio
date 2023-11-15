import { useEffect, useState } from "react";
import styles from "./Index.module.css";
function IndexPage(){
    const [titleHover, setTitleHover] = useState(0);

    useEffect(() => {
       
    },[])

    return (
        <div className={`${styles.title_wrap}`}>
            <h1 className={`${styles.en} ${styles.title}  ${titleHover ? "hover" : ""}`} style={{opacity : .5}} onMouseOver={() => setTitleHover(true)} onMouseOut={() => setTitleHover(false)}>Hello</h1>
            <h2 className={`${styles.title} ${styles.title_sub}`}>안녕하세요</h2>
        </div>
    )
}
export default IndexPage;