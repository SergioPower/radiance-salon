export default function Footer() {
	return (
		<footer className="bg-white dark:bg-[#1b0e11] border-t border-[#f3e7ea] dark:border-[#3a2228] py-12 px-6">
			<div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-2 text-primary">
						<div className="size-6">
							<svg
								fill="none"
								viewBox="0 0 48 48"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
									fill="currentColor"
								/>
							</svg>
						</div>
						<span className="font-bold text-lg text-[#1b0e11] dark:text-white">Radiance Salon</span>
					</div>
					<p className="text-sm text-[#974e60] dark:text-[#c4a1a9]">Luxury beauty sanctuary where elegance meets expertise.
						Dedicated to making you feel radiant every day.</p>
				</div>

				<div>
					<h4 className="font-bold mb-4">Quick Links</h4>
					<ul className="flex flex-col gap-2 text-sm text-[#974e60] dark:text-[#c4a1a9]">
						<li><a className="hover:text-primary" href="#">Our Services</a></li>
						<li><a className="hover:text-primary" href="#">Pricing List</a></li>
						<li><a className="hover:text-primary" href="#">Gift Cards</a></li>
						<li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
					</ul>
				</div>

				<div>
					<h4 className="font-bold mb-4">Contact</h4>
					<ul className="flex flex-col gap-2 text-sm text-[#974e60] dark:text-[#c4a1a9]">
						<li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">location_on</span> 123
							Beauty Lane, Glow City</li>
						<li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">call</span> +1 (555)
							000-RADIANCE</li>
						<li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">mail</span>
							hello@radiance-salon.com</li>
					</ul>
				</div>

				<div>
					<h4 className="font-bold mb-4">Hours</h4>
					<ul className="flex flex-col gap-2 text-sm text-[#974e60] dark:text-[#c4a1a9]">
						<li>Mon - Fri: 9am - 8pm</li>
						<li>Saturday: 10am - 6pm</li>
						<li>Sunday: Closed</li>
					</ul>
				</div>

			</div>



			<div
				className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-[#f3e7ea] dark:border-[#3a2228] text-center text-xs text-[#974e60]">
				© 2024 Radiance Salon. All rights reserved.
			</div>
		</footer>
	)
}