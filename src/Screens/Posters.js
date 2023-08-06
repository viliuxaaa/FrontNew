import SinglePosterDetailed from "../Components/SinglePosterDetailed"
import Layout from "../Layout/Layout"

function Posters() {
    return (
        <Layout>
            <div className="my-10 min-h-screen px-2 md:px-0">
                <div className="flex-colo gap-5">
                    <div className="flex-rows ">
                        <div className="border-[2px] border-main shadow-md p-2 rounded-3xl font-medium xs:w-52 md:w-[28rem] lg:w-96 flex flex-row justify-center bg-subMain text-text">
                            <h1 className="tracking-wider text-lg font-md font-sans">All posters</h1>
                        </div>
                    </div>
                <SinglePosterDetailed />
                <SinglePosterDetailed />
                <SinglePosterDetailed />
                </div>
            </div>
        </Layout>
    )
}

export default Posters
