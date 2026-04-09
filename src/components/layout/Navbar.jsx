function Nav() {
	const links = [
		{ label: "Servicios", href: "#services" },
		{ label: "Nuestra Historia", href: "#story" },
		{ label: "Testimonios", href: "#testimonials" },
	];

	return (
		<nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
			<div className="flex items-center gap-9">
				{links.map((link) => (
					<a
						key={link.href}
						href={link.href}
						className="text-[#1b0e11] dark:text-white text-sm font-medium hover:text-primary transition-colors"
					>
						{link.label}
					</a>
				))}
			</div>

			<button className="flex min-w-30 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-transform hover:scale-105">
				<span>Reserva Ahora</span>
			</button>
		</nav>
	);
}

export default Nav;