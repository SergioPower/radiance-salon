import Navbar from "./Navbar"

export default function Header({ title, links }) {
	return (
		<header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-800 shadow-md">

			{/* Logo / título */}
			<h1 className="text-xl font-bold text-slate-800 dark:text-white">
				{title}
			</h1>

			{/* Navbar */}
			<Navbar links={links} />
		</header>
	)
}