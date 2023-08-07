import AxiosFetch from "../hooks/AxiosFetch"
function SinglePoster({poster}) {
    const posterIMG_URL="/api/v1/images/poster/get/" + poster.posterId + "/0";
    console.log(posterIMG_URL)
    const [image, isPending, error ] = AxiosFetch(posterIMG_URL);
    console.log(image)

    return (
        <>
            <div className="shadow-md flex flex-row gap-2 bg-subMain rounded-lg">
                <div className="flex-shrink-0">
                    <img src={posterIMG_URL} alt="dog" className="w-32 h-32 aspect-[1/1] rounded-xl"/>
                </div>
                <div>
                    <h2 className="text-xl text-text font-semibold">This is a title</h2>
                    <p className="text-text max-w-2xl">
                        This is some text that will be displayed in the second column.
                        This is some text that will be displayed in the second column.
                    </p>
                    <br/>
                    <p className="align-text-bottom text-text sm:text-sm xs:text-base md:text-base text-b">
                        50 eur
                    </p>  
                </div>
                
            </div>
        </>
    )
}

export default SinglePoster
