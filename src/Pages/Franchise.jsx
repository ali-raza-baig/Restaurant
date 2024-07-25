import Layout from "../Components/Layout/Layout"
import Contact from "../Components/Sections/Contact"
import Slider from "../Components/Sections/Slider"

const Franchise = () => {
    return (
        <Layout>

            <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center" style={{ backgroundImage: 'url("/img/pic.png")', height: 400 }}>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white">
                            <h2 className="mb-4 text-4xl font-semibold">Our Branches</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 1  */}
            <div className="container">
                <div className="text-center mt-10 mb-5 text-4xl font-semibold">Introducing New Look </div>
                <div className="slider m-auto w-3/4">
                    <Slider />
                </div>
                <div className="details">
                    <Contact />
                </div>
            </div>
            {/* Section 2  */}

            <div className="container">
                <div className="text-center text-4xl font-semibold">We are in Bristol</div>
                <div className="slider m-auto w-3/4">
                    <Slider />
                </div>
                <div className="details">
                    <Contact />
                </div>
            </div>

        </Layout>
    )
}

export default Franchise