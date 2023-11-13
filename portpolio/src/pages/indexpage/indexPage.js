import { useEffect, useState } from "react";

function IndexPage(){
    const [titleHover, setTitleHover] = useState(0);
    useEffect(() => {
    },[])

    return (
        <h1 className={`title ${titleHover ? "hover" : ""}`} onMouseOver={() => setTitleHover(true) } onMouseOut={() => setTitleHover(false)}>Hello</h1>
    )
}
export default IndexPage;