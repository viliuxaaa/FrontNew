import { Link } from "react-router-dom"

function PosterMinDetail({post}) {
    return (
        <>
            <div className="hover:scale-95 transition shadow-md flex flex-row gap-2 bg-subMain rounded-lg">
                <Link to={`/skelbimas/${post?.postName}`} className="w-full flex">
                    <div className="flex-shrink-0">
                        <img src="https://picsum.photos/200/300" alt="dog" className="w-32 h-32 aspect-[1/1] rounded-xl"/>
                    </div>
                    <div className="pl-5">
                        <h2 className="text-xl text-text font-semibold">{post.postName}</h2>
                        <p className="text-text max-w-2xl">
                            {post.description}
                        </p>
                        <br/>
                        <p className="align-text-bottom text-text sm:text-sm xs:text-base md:text-base text-b">
                            {post.price}
                        </p>  
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PosterMinDetail
