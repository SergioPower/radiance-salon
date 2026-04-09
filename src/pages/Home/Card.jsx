export default function Card({ img, title, price, desc }) {
	return (
		<article className="group flex flex-col gap-4 bg-white dark:bg-[#2d181d] p-4 rounded-2xl shadow-sm border border-[#f3e7ea] dark:border-[#3a2228] transition-all hover:shadow-xl hover:-translate-y-2">
			<img
				src={img}
				alt={title}
				loading="lazy"
				decoding="async"
				className="w-full aspect-4/5 object-cover object-center rounded-xl"
			/>

			<div className="p-2">
				<div className="flex justify-between items-center mb-2">
					<h3 className="text-[#1b0e11] dark:text-white text-xl font-bold">
						{title}
					</h3>
					<span className="text-primary font-bold">
						{`From $${price}`}
					</span>
				</div>

				<p className="text-[#974e60] dark:text-[#c4a1a9] text-sm mb-4 leading-relaxed">
					{desc}
				</p>
				<button
					className="w-full py-2 rounded-lg border-2 border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-colors">
					Detalles
				</button>
			</div>
		</article>
	)

}