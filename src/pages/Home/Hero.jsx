import Button from "../../components/ui/Button"
import fondoHero from "../../assets/img/bg-hero.png"

export default function Hero({ title, description }) {
	return (
		<section id="hero" className="py-10">
			<div className="@container">
				<div className="@[480px]:p-0">
					<div className="flex min-h-140 flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 lg:p-28 text-center relative overflow-hidden"
						data-alt="Modern chic luxury beauty salon interior" style={{
							backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${fondoHero})`
						}}>
						<h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
							{title}
						</h1>
						<p className="text-white text-lg font-normal opacity-90">
							{description}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 mt-6">
							<Button link="/booking">
								Reserva Ahora
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}