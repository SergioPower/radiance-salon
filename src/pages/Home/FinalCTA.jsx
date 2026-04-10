import { Link } from "react-router-dom"

export default function FinalCTA({ title, desc }) {
	return (
		<section className="py-20">
			<div className="bg-primary rounded-3xl p-12 text-center text-white flex flex-col items-center gap-8 shadow-2xl shadow-primary/20">
				<h2 className="text-4xl md:text-5xl font-black">
					{title}
				</h2>
				<p className="text-xl max-w-2xl opacity-90">
					{desc}
				</p>
				<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
					<Link to="/booking">
						<button className="bg-white text-primary px-10 py-4 rounded-xl font-black text-lg hover:bg-[#f3e7ea] transition-all flex items-center justify-center gap-2">
							<span className="material-symbols-outlined">calendar_today</span>
							Book Online
						</button>
					</Link>

					<button className="bg-[#25D366] text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2">
						<svg className="size-6 fill-current" viewBox="0 0 24 24">
							<path
								d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.91 0-3.791-.459-5.469-1.334l-6.528 1.711zm6.114-3.722l.441.262c1.452.862 3.126 1.317 4.841 1.317 5.18 0 9.397-4.218 9.397-9.397.001-4.572-3.519-8.291-7.85-8.291-4.331 0-7.85 3.719-7.85 8.291.001 1.836.543 3.58 1.57 5.061l.289.414-1.001 3.652 3.754-.984zm9.734-5.503c-.266-.134-1.576-.777-1.821-.865-.245-.089-.423-.134-.601.134-.178.267-.689.867-.845 1.045-.155.178-.312.2-.578.066-.266-.134-1.125-.415-2.144-1.325-.792-.707-1.327-1.58-1.482-1.847-.156-.267-.017-.411.117-.544.121-.119.266-.312.4-.467.133-.156.178-.267.266-.445.089-.178.044-.334-.022-.467-.067-.134-.601-1.446-.823-1.98-.216-.52-.454-.449-.622-.457-.16-.007-.344-.008-.528-.008-.184 0-.484.069-.738.347-.253.278-.967.945-.967 2.302 0 1.357.988 2.669 1.127 2.854.14.184 1.944 2.968 4.709 4.16.658.283 1.171.453 1.571.58.661.21 1.261.18 1.736.11.53-.079 1.576-.645 1.799-1.268.223-.623.223-1.157.155-1.268-.066-.111-.244-.178-.51-.312z">
							</path>
						</svg>
					</button>

				</div>
			</div>

		</section>
	)
}