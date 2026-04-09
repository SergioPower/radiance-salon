import Header from "../components/layout/Header"

export default function Home() {
	return (
		<>
			<Header title="Mi App 🚀" links={[{ to: "/booking", label: "Booking" }]} />

			<div className="p-6">
				<h2 className="text-2xl font-bold">Bienvenido</h2>
			</div>
		</>
	)
}