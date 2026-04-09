import { Link } from "react-router-dom"

export default function Button({ link, children }) {
	return (

		<Link to={link} className="flex min-w-50 cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold tracking-wide hover:bg-primary/90 transition-all">
			<span>
				{children}
			</span>
		</Link>
	)
}