import Header from "../../components/layout/Header"
import Hero from "./Hero"
import OurStory from "./OurStory"


export default function Home() {
	return (
		<>
			<Header title="Radiance Salon" />
			<main className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
				<Hero
					title={"Descubre Tu Luminosidad Natural"}
					description={"Disfruta de tratamientos de belleza de lujo personalizados para ti. Tu viaje hacia el cuidado personal y los mimos profesionales comienza aquí."}
				/>
				< OurStory
					title={"Potenciando La	Belleza Desde 2010"}
					desc1={"En Radiance Salon creemos que la belleza es algo más que la simple apariencia: tiene que ver con la confianza en una misma y el cuidado personal. Desde hace más de una década, hemos creado un refugio donde cada mujer puede sentirse escuchada, mimada y transformada."}
					desc2={"Nuestro equipo de expertos utiliza únicamente los mejores productos orgánicos y de alta gama para garantizar	que tu cabello, tu piel y tus uñas reciban el tratamiento de primera calidad que se merecen."}
				/>

			</main>
		</>
	)
}