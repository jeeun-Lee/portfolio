import { useEffect, useState } from "react";
import styles from "./Index.module.css";
import "./index.css";
function IndexPage(){
    const [titleHover, setTitleHover] = useState(0);

    useEffect(() => {
       
    },[])

    return (
        <div className="wrap">
            <div className={`${styles.title_wrap}`}>
            <h1 className={` ${styles.en} ${styles.title}  ${titleHover ? "hover" : ""}`} style={{opacity : .5}} onMouseOver={() => setTitleHover(true)} onMouseOut={() => setTitleHover(false)}>Hello</h1>
            <h2 className={`title ${styles.title} ${styles.title_sub}`}>안녕하세요</h2> 
            </div>
            <div className="welcome-wrap">
                <h1 className={`${styles.en} ${styles.title}`}>Welcome!<br />JeEun Portfolio</h1>
                <h1 className={`${styles.title}`} style={{opacity: .5}}>꾸준하게 성장하는 <br />프론트엔드 개발자입니다.</h1>

                <p className={`infomation`}>
                    안녕하세요:D 이제은이라고 합니다.<br />
                    이곳은 제가 가진 스킬과 그동안 작업했던 프로젝트들을 보여드리고 있습니다.<br />
                    잘 부탁드립니다!
                </p>
            </div>
            
        </div>
    )
}
export default IndexPage;

 // 