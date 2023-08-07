import { Link } from "react-router-dom"
import AxiosFetch from "../hooks/AxiosFetch"

function PosterMinDetail({poster}) {
    const posterIMG_URL="/api/v1/images/poster/get/" + poster.posterId + "/0";
    
    const [image, isPending, error ] = AxiosFetch(posterIMG_URL);
   

    return (
        <>
            <div className="hover:scale-95 transition shadow-md flex flex-row gap-2 bg-subMain rounded-lg">
                <Link to={`/skelbimas/${poster?.posterId}`} className="w-full flex">
                    <div className="flex-shrink-0">
                        <img src={posterIMG_URL} alt="dog" className="w-32 h-32 aspect-[1/1] rounded-xl"/>
                    </div>
                    <div className="pl-5">
                        <h2 className="text-xl text-text font-semibold">{poster.postName}</h2>
                        <p className="text-text max-w-2xl">
                            {poster.description}
                        </p>
                        <br/>
                        <p className="align-text-bottom text-text sm:text-sm xs:text-base md:text-base text-b">
                            {poster.price}
                        </p>  
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PosterMinDetail
