import { memo } from 'react'
import { PostAndNewsBlockType } from '../../BLL/store'
import "./News.scss"
import Novelty from "./Novelty/Novelty"

interface props {
    News: PostAndNewsBlockType[],
}

const NewsK = (props:props) => {
    const FirstNews = props.News.filter((el, index:number) => index === 0)
        .map((el:PostAndNewsBlockType) => <Novelty text={el.text} img={el.img} key={el.id} />)
    const TwoNews = props.News.filter((el, index:number) => index === 1)
        .map((el:PostAndNewsBlockType) => <Novelty text={el.text} img={el.img} key={el.id} />)
    const freeNews = props.News.filter((el, index:number) => index === 2)
        .map((el:PostAndNewsBlockType) => <Novelty text={el.text} img={el.img} key={el.id} />)
    const fourNews = props.News.filter((el, index:number) => index === 3)
        .map((el:PostAndNewsBlockType) => <Novelty text={el.text} img={el.img} key={el.id} />)
    return (
        <section className="News">
            <div className="News__column">
                {props.News[0] && FirstNews}
            </div>
            <div className="News__column">
                {props.News[1] && TwoNews}
            </div>
            <div className="News__column">
                {props.News[2] && freeNews}
            </div>
            <div className="News__column">
                {props.News[3] && fourNews}
            </div>
        </section>
    )
}

const News = memo(NewsK)
export default News;