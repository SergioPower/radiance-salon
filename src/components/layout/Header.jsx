import Navbar from "./Navbar"
import Logo from "../../components/ui/Logo"

export default function Header({ logo, title }) {

	return (
		<header className="sticky top-0 z-50 w-full border-b border-solid border-[#f3e7ea] dark:border-[#3a2228] bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-6 md:px-20 lg:px-40 py-3">

			<div className="flex items-center justify-between max-w-300 mx-auto">
				{/* Logo / título */}
				<div className="flex items-center gap-4 text-primary">
					<Logo />

					<h2 className="text-[#1b0e11] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">{title}</h2>

				</div>

				{/* Navbar */}
				<Navbar />
			</div>

		</header>
	)
}