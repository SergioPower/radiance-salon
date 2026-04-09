import imgOurStory1 from "../../assets/img/imgOurStory1.png";
import imgOurStory2 from "../../assets/img/imgOurStory2.png";

export default function OurStory({ title, desc1, desc2 }) {
	return (
		<section className="py-20 border-b border-[#f3e7ea] dark:border-[#3a2228]" id="story">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<div className="flex flex-col gap-6">
					<h2 className="text-[#1b0e11] dark:text-white text-4xl font-black leading-tight tracking-tight">
						{title}
					</h2>

					{/* description */}
					<p className="text-[#1b0e11] dark:text-[#d1c1c4] text-lg leading-relaxed">
						{desc1}
					</p>
					<p className="text-[#1b0e11] dark:text-[#d1c1c4] text-lg leading-relaxed">
						{desc2}
					</p>

					{/* icons */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
						<div className="flex items-center gap-3">
							<span className="material-symbols-outlined text-primary">verified</span>
							<span className="font-bold">Certified Pros</span>
						</div>
						<div className="flex items-center gap-3">
							<span className="material-symbols-outlined text-primary">eco</span>
							<span className="font-bold">Organic Products</span>
						</div>
					</div>
				</div>

				{/* images */}
				<div className="grid grid-cols-2 gap-4">
					<img
						src={imgOurStory1}
						alt="Stylist working on client hair"
						loading="lazy"
						decoding="async"
						className="h-64 w-full object-cover rounded-2xl"
					/>

					<img
						src={imgOurStory2}
						alt="Close up of luxury beauty products"
						loading="lazy"
						decoding="async"
						className="h-64 w-full object-cover rounded-2xl translate-y-8"
					/>

				</div>

			</div>
		</section>
	)
}