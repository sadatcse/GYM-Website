import { FaAws, FaGratipay, FaMortarPestle, FaPersonBooth, FaRocket, FaServer } from "react-icons/fa"
import VisionCard from "./VisionCard"
function VisionAndValues() {
    return (
        <section className="pb-3">
            <div className="container mx-auto flex flex-col pb-6 mb-4 md:p-10 md:px-12">
            <h1 className="text-4xl font-bold text-center">MORE THAN A HEALTH CLUB</h1>
            <p className="max-w-3xl mx-auto mt-6 text-center">The goal of the Universal Survey and Engagement System is to provide a comprehensive and user-
                    friendly online survey platform that caters to the needs of different user roles – Admin, Company, and
                    User.</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 lg:gap-10 lg:grid-cols-3">
                <VisionCard path={<FaAws className="text-3xl"/>} title="Define the strategy" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
                <VisionCard path={<FaRocket className="text-3xl"/>} title="Improve perfomance" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
                <VisionCard path={<FaServer className="text-3xl"/>} title="Making cleaner service" description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
                <VisionCard path={<FaMortarPestle className="text-3xl"/>} title="Testing and evaluation  " description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
                <VisionCard path={<FaPersonBooth className="text-3xl"/>} title="Updating regularly " description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
                <VisionCard path={<FaGratipay className="text-3xl"/>} title="Top rated gym  " description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to de" />
            </div>
        </section>
    )
}

export default VisionAndValues