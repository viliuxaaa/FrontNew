function SinglePoster() {
    return (
        <>
            <div className="shadow-md flex flex-row gap-2 bg-subMain rounded-lg">
                <div className="flex-shrink-0">
                    <img src="https://picsum.photos/200/300" alt="Image" className="w-32 h-32 aspect-[1/1] rounded-xl"/>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">This is a title</h2>
                    <p>
                        This is some text that will be displayed in the second column.
                        This is some text that will be displayed in the second column.
                    </p>
                    <br/>
                    <p className="align-text-bottom sm:text-sm xs:text-base md:text-base text-b">
                        50 eur
                    </p>  
                </div>
                
            </div>
        </>
    )
}

export default SinglePoster
