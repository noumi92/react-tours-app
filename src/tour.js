import { useState } from "react"
import { Button } from "react-bootstrap"

const Tour = ({id, image, name, info, price, removeTour}) => {
    const [readMore, setreadMore] = useState(false)
    return (
        <>
        
        <div className="myArticle">
        <article>
            <img src={image} alt={name} />
            <footer>
                <div className="footerbar">
                    <h4>{name}</h4>
                    <h4>Rs. {price}</h4>
                </div>
                <p>{readMore?info:`${info.substring(0,250)}...`}
                <Button onClick={()=>setreadMore(!readMore)}>{readMore?'Show Less':'Read More'}</Button>
                </p>
            </footer>
            <Button variant="danger" onClick={()=>removeTour(id)}>Delete Tour</Button>
        </article>
        </div>
        </>
    )
}

export default Tour


