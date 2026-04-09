import CardClient from "./CardClient"
import avatar1 from "../../assets/img/avatar1.png"
import avatar2 from "../../assets/img/avatar2.png"

export default function Testimonials({ title }) {
	return (
		<section className="py-20 bg-soft-beige dark:bg-[#1a0c0f] rounded-3xl px-8 sm:px-12 my-10" id="testimonials">
			<div className="text-center mb-12">
				<h2 className="text-[#1b0e11] dark:text-white text-3xl font-black leading-tight tracking-tight text-center">
					{title}
				</h2>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<CardClient
					rating={5}
					quote={"La experiencia más relajante que he tenido nunca en un salón de belleza. Mi pelo nunca ha tenido un	aspecto tan sano y el ambiente es sencillamente mágico."}
					name={"Jose Martinez"}
					role={"Cliente Fiel"}
					avatar={avatar1}
				/>

				<CardClient
					rating={4}
					quote={"Fui a hacerme una prueba de maquillaje para mi boda y me quedé impresionada. El equipo realmente escuchó lo que quería y me hizo sentir preciosa"}
					name={"Alma Gutierrez"}
					role={"Cliente de novias"}
					avatar={avatar2}
				/>

			</div>



		</section>
	)

}