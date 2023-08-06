import Category from "../Components/Category"
import LatestPosters from "../Components/LatestPosters"
//import SinglePoster from "../Components/SinglePoster"
import Layout from "../Layout/Layout"

function HomeScreen() {
    const category7 = ["Vienas", "Du", "Trys", "Keturi", "Penki", "Sesi", "Septyni"]
    const category6 = ["Vienas", "Du", "Trys", "Keturi", "Penki", "Sesi"]
    const category5 = ["Vienas", "Du", "Trys", "Keturi", "Penki"]
    const category4 = ["Vienas", "Du", "Trys", "Keturi"]
    const category3 = ["Vienas", "Du", "Trys"]
    const category2 = ["Vienas", "Du"]
    const category1 = ["Vienas"]
    return (
        <Layout>
            <div className="container flex-rows mx-auto min-h-screen px-10 py-10 text-text">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                    <div className="flex lg:justify-center lg:col-span-2 lg:row-span-2">
                        <LatestPosters />
                    </div>
                    <div className="">
                        <Category category={category1} />
                    </div>
                    <div>
                        <Category category={category2}/>
                    </div>
                    <div>
                        <Category category={category3} />
                    </div>
                    <div>
                        <Category category={category4} />
                    </div>
                    <div>
                        <Category category={category5} />
                    </div>
                    <div>
                        <Category category={category6} />
                    </div>
                    <div>
                        <Category category={category7} />
                    </div>
                    <div>
                        <Category category={category7} />
                    </div>
                </div>
            </div>
        </Layout>
    ) 
}

export default HomeScreen

