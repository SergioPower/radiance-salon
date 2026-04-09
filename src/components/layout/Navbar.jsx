import { Link } from "react-router-dom"

export default function Navbar({ links = [] }) {
	return (
		<nav className="flex gap-6">
			{links.map((link) => (
				<Link
					key={link.to}
					to={link.to}
					className="text-slate-700 dark:text-slate-200 hover:text-blue-500 transition"
				>
					{link.label}
				</Link>
			))}
		</nav>
	)
}