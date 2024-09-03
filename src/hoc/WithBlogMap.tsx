import Spinner from '../components/Spiner/Spiner'

export function withBlogMap(Component: any) {
	return function EnhancedComponent(props: any) {
		const Content = props.Content?.articles.slice(0, 8)

		if (!Content) {
			return <Spinner />
		}

		return <Component Content={Content} />
	}
}
