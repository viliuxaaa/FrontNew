import { Link } from "react-router-dom"


function Category({category}) {
    
    return (
        <>
            <div className="text-text">
                <div className="border-[2px] border-main shadow-lg flex-col bg-main md:w-80 lg:w-96 xl:w-96 rounded-lg my-5 sm:mx-10"> {/*flex-col bg-main w-[27rem] rounded-lg m-4*/}
                    <div className="font-semibold flex-rows p-2">
                        <Link to={`/posters/search/${category.search}`} className="hover:border-b hover:border-t border-text">
                            {category.name}                        
                        </Link>
                    </div>
                    <div className="font-medium  flex flex-col items-center bg-subMain w-full h-48 rounded-b-lg p-1">
                        {
                            category.subCat.map((subCat, index) => (
                                <Link key={index} to={`/posters/search/${subCat.search}`} className="hover:border-b hover:border-t hover:bg-main border-text">
                                    <span className="">{subCat.name}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
