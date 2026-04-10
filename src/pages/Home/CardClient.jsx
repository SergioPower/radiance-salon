export default function CardClient({ rating, quote, name, role, avatar }) {

	return (
		<article className="bg-white dark:bg-[#2d181d] p-8 rounded-2xl shadow-sm border border-[#f3e7ea] dark:border-[#3a2228] flex flex-col gap-4 relative">

			<div className="flex gap-1">
				{[...Array(5)].map((_, i) => (
					<span
						key={i}
						className={`material-symbols-outlined fill-1 ${i < rating ? "text-yellow-300" : "text-primary"
							}`}
					>
						star
					</span>
				))}
			</div>
			<p className="text-lg italic text-[#1b0e11] dark:text-white font-medium">
				{quote}
			</p>

			<div className="flex items-center gap-4 mt-4">
				<img
					src={avatar}
					alt="Portrait of a happy customer"
					loading="lazy"
					decoding="async"
					className="size-12 rounded-full object-cover object-center"
				/>
				<div>
					<p className="font-bold">
						{name}
					</p>
					<p className="text-sm text-[#974e60]">
						{role}
					</p>
				</div>
			</div>
		</article>
	)
}