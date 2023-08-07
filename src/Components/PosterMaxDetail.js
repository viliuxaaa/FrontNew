import { Link } from "react-router-dom"

function PosterMaxDetail({post}) {
    return (
        <> 
            <div className="hover:scale-105 transition flex flex-row justify-center sm:w-9/12 xs:mx-2 xs:gap-1 text-text"> {/**/}
                <Link to={`/skelbimas/${post?.postName}`} className="flex">
                    <div className="flex-shrink-0 pr-2">
                            <img 
                                src="https://picsum.photos/200/300" 
                                alt="Imaasdasdge" 
                                className="w-40 h-40 border-[2px] border-darkAccent shadow-md rounded-l-xl"
                            />
                    </div>
                    <div className="xs:w-[400px] md:w-[800px] border-[2px] border-main xs:p-1 h-40 p-2 shadow-md bg-subMain rounded-r-lg">
                        <h2 className="sm:text-sm xs:text-base md:text-xl font-semibold">{post?.postName}</h2>
                        <p className="sm:text-sm xs:text-sm xxs:text-sm md:text-base">
                            {post?.description}                     
                        </p>
                        <br/>
                        <p className="align-text-bottom sm:text-sm xs:text-base md:text-base">
                            Kaina: {post?.price} &euro;
                        </p>              
                    </div>
                </Link>    
            </div>
        </>
    )
}

export default PosterMaxDetail
