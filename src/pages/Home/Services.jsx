import Card from "./Card"
import imgHair from "../../assets/img/img-Services-Hair.png"
import imgNail from "../../assets/img/img-Services-Nail.jpg"
import imgMakeup from "../../assets/img/img-Services-Makeup.jpg"

export default function Services({ title, description }) {
	return (
		<section className="py-20" id="services">
			<div className="text-center mb-16">
				<h2 className="text-[#1b0e11] dark:text-white text-4xl font-black mb-4">{title}</h2>
				<p className="text-[#974e60] dark:text-[#c4a1a9] max-w-xl mx-auto">{description}</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Hair */}
				<Card
					img={imgHair}
					title={"Hair Design"}
					price={850}
					desc={"Cortes de precisión, coloración personalizada y peinados profesionales que se adaptan a la forma de tu	rostro y a tu estilo de vida."}
				/>
				<Card
					img={imgNail}
					title={"Nail Art"}
					price={500}
					desc={"Manicuras y pedicuras de lujo con esmaltes no tóxicos y diseños creativos personalizados de decoración de uñas."}
				/>

				<Card
					img={imgMakeup}
					title={"Makeup Art"}
					price={750}
					desc={"Servicio profesional para bodas, eventos o una salida nocturna. Resaltamos tus mejore rasgos."}
				/>
			</div>
		</section>
	)
}