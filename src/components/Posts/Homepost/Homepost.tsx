import "./HomePost.scss"

interface props {
    img: string,
    text: string,
    key: number,
}

const Homepost = (props:props) => {
    return (
        <article className={`homePost `}>
            <a href="#" className="homePost__a">
                <div className="homePost__img"><img className="homePost__icn" src={props.img} alt="" /></div>
                <h3 className="homePost__text">{props.text}</h3>
            </a>
        </article>
    )
}



export default Homepost;