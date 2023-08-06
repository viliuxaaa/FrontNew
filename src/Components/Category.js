function Category({category}) {
    return (
        <>
            <div className="text-text">
                <div className="border-[2px] border-main shadow-lg flex-col bg-main md:w-80 lg:w-96 xl:w-96 rounded-lg my-5 sm:mx-10"> {/*flex-col bg-main w-[27rem] rounded-lg m-4*/}
                    <div className="font-semibold flex-rows p-2">
                        Category                        
                    </div>
                    <div className="font-medium flex flex-col items-center bg-subMain w-full h-48 rounded-b-lg p-1">
                        {
                            category.map((element) => (
                                <span>{element}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
