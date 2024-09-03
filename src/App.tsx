import axios from 'axios'
import { useEffect, useReducer, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Blog } from './components/Blog/Blog'
import { LoginModal } from './components/LoginModal/LoginModal'
import NavContainer from './components/Nav/NavContainer'
import PosttwoK from './components/PostBlockTwo/Posttwo'
import { PostCreation } from './components/PostCreation/PostCreation'
import SearchPage from './components/SearchPage/SearchPage'
import { useData } from './hook/useData'

interface BlogContent {
	articles: {
		author: string
		title: string
		description: string
		content: string
		publishedAt: string
		urlToImage: string
		url: string
	}[]
}
function App(props: any) {
	const [isSize, setSize] = useState<boolean>(true)
	const [BlogContent, setBlogContent] = useState<BlogContent>()
	const { data } = useData()
	const [CheachSearchList, setCheckSearchList] = useState<boolean>(false)
	const [isOpenModal, setIsOpenModal] = useState(false)

	useEffect(() => {
		axios
			.get(
				'https://newsapi.org/v2/everything?sources=techcrunch&apiKey=836af64713b54e1188b0513dccf80e8a&page=2'
			)
			.then(response => {
				setBlogContent(response.data)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	const SearchReducer = (state = initialState, action: string) => {
		if (CheachSearchList) {
			setCheckSearchList(false)
		}
		switch (action.toUpperCase().trim()) {
			case 'GAME': {
				const SearchPost = data._state.PageContent.Post.filter(
					atl => atl.Atl == 'GAME'
				).map(el => ({
					id: el.id,
					key: el.id,
					text: el.text,
					img: el.img,
					description: el.description,
					name: el.name,
				}))
				return SearchPost
			}
			case 'NEWS': {
				const SearchPost = data._state.PageContent.NewsColumn.filter(
					atl => atl.Atl === 'NEWS'
				).map(el => ({
					id: el.id,
					key: el.id,
					text: el.text,
					img: el.img,
					description: el.description,
					name: el.name,
				}))
				return SearchPost
			}
			case '': {
				const SearchPost = data._state.PageContent.AllPost.filter(
					atl => atl.Atl === atl.Atl
				).map(el => ({
					id: el.id,
					key: el.id,
					text: el.text,
					img: el.img,
					description: el.description,
					name: el.name,
				}))
				return SearchPost
			}
			default:
				const SearchPost = {}
				setCheckSearchList(true)
				return SearchPost
		}
	}
	let initialState = {}

	const [state, dispatch] = useReducer(SearchReducer, initialState)
	const PostBlock = data._state.PageContent.AllPost
	const BlogPage = PostBlock.map((el: any) => {
		return (
			<Route
				path={`/blog/${el.id}/${el.name}`}
				element={
					<Blog
						Blogs={data._state.PageContent.AllPost}
						Name={el.name}
						name={el.name}
						text={el.text}
						img={el.img}
						id={el.id}
					/>
				}
			/>
		)
	})
	const BlogPageAPI = BlogContent?.articles.map((el: any) => {
		return (
			<Route
				path={`/blogs/${el.title}`}
				element={
					<Blog
						name={el.author}
						text={el.title}
						img={el.urlToImage}
						content={el.content}
						key={el.id}
					/>
				}
			/>
		)
	})
	return (
		<div
			className={`app-wrapper ${
				isOpenModal
					? (document.body.style.overflow = 'hidden')
					: (document.body.style.overflow = 'auto')
			}`}
		>
			<NavContainer
				dispatch={dispatch}
				setSize={setSize}
				isSize={isSize}
				setIsOpenModal={setIsOpenModal}
			/>
			{isOpenModal && (
				<LoginModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
			)}
			<main className='page-content'>
				<div className={`blog__body ${isSize ? 'blog__resize' : ''}`}>
					<Routes>
						<Route
							path='/home'
							element={
								<PosttwoK
									Post={props.data.getState().PageContent}
									isSize={isSize}
									BlogContent={BlogContent}
								/>
							}
						/>
						<Route
							path='/search'
							element={
								<SearchPage
									SearchState={state}
									dispatch={dispatch}
									Post={props.data.getState().PageContent}
									CheachSearchList={CheachSearchList}
									BlogContent={BlogContent}
								/>
							}
						/>
						<Route
							path='/'
							element={
								<PosttwoK
									Post={props.data.getState().PageContent}
									isSize={isSize}
									BlogContent={BlogContent}
								/>
							}
						/>
						{BlogPage}
						{BlogPageAPI}
						<Route path='/create-post' element={<PostCreation />} />
					</Routes>
				</div>
			</main>
		</div>
	)
}

export default App
