import { memo } from 'react'
import "./Headline.scss"

interface props {
    Notes?:"Рекомендуем",
    NotesNews?: "Новости",

}

const HeadlineK = (props:props) => {
    return (
        <div className="testing">
            <h3 className="text__recomend">{props.Notes || props.NotesNews}</h3>
        </div>
    )
}

const Headline = memo(HeadlineK)

export default Headline;