
import { memo } from 'react'
import { PostAndNewsBlockType } from '../../BLL/store'
import Homepost from "./Homepost/Homepost"
import Post from "./Post/Post"
import "./Posts.scss"
interface props {
    Post:PostAndNewsBlockType[]
}

const PostsM = (props:props) => {
    const PostBlockFirstTwo = props.Post.filter((el, index:number) => index === 0 || index === 1)
    .map((el:PostAndNewsBlockType) => <Post text={el.text} key={el.id} img={el.img} lastBlockClass={el.class} />);
    const PostBlockLastTwo = props.Post.filter((el, index:number) => index === 2 || index === 3)
    .map((el:PostAndNewsBlockType) => <Post text={el.text} key={el.id} img={el.img} lastBlockClass={el.class} />);
    const PostHomeBlog = props.Post.filter((el, index:number) => index === 4)
    .map((el:PostAndNewsBlockType) => <Homepost text={el.text} key={el.id} img={el.img} />)
    return (
        <section className="section">
            <div className="section__column">
                {props.Post[0] && props.Post[1] && PostBlockFirstTwo}
            </div>
            <div className="section__column-2">
                {props.Post[4] && PostHomeBlog}
            </div>
            <div className="section__column">
            {props.Post[2] && props.Post[3] && PostBlockLastTwo}
            </div>
        </section>
    )
}

const Posts = memo(PostsM)

export default Posts;