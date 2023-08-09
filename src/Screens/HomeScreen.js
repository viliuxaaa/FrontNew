import Category from "../Components/Category"
import LatestPosters from "../Components/Home/LatestPosters"
import Layout from "../Layout/Layout"
import Categories from "../enums/Categories"

function HomeScreen() {
    const categories = Categories();

    return (
        <Layout>
            <div className="container flex-rows mx-auto min-h-screen py-10 text-text">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                    <div className="flex lg:justify-center lg:col-span-2 lg:row-span-2">
                        <LatestPosters />
                    </div>
                    <div className="">
                        <Category category={categories.category1} />
                    </div>
                    <div>
                        <Category category={categories.category2}/>
                    </div>
                    <div>
                        <Category category={categories.category3} />
                    </div>
                    <div>
                        <Category category={categories.category4} />
                    </div>
                    <div>
                        <Category category={categories.category5} />
                    </div>
                    <div>
                        <Category category={categories.category6} />
                    </div>
                    <div>
                        <Category category={categories.category7} />
                    </div>
                    <div>
                        <Category category={categories.category8} />
                    </div>
                </div>
            </div>
        </Layout>
    ) 
}

export default HomeScreen