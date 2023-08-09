
import {useState} from "react";
// import { posters } from "../../Data/PosterData"
import SinglePoster from "../PosterMinDetail";
import AxiosFetch from "../../hooks/AxiosFetch";
import PosterMinDetail from "../PosterMinDetail";


const posterListURL = "api/v1/poster/get/latest";

function LatestPosters() {
    const [isScrollable, setIsScrollable] = useState(false);

    const [posters, isPending, error] = AxiosFetch(posterListURL);

    const handleScroll = () => {
        setIsScrollable(true);
    };

    return (
        <>
            <div className="bg-background border-[2px] border-main shadow-lg lg:w-full md:w-full rounded-lg my-5 sm:mx-10">
                <div className="xxs:w-80 xs:w-full justify-center items-center flex-rows md:w-full font-semibold text-text p-2 bg-main rounded-t-lg leading-4 tracking-wide">
                    LatestPosters
                </div>
                { isPending && <p></p>}
                { posters && <div className="md:h-[28rem] xxs:h-[28rem] xs:h-[28rem]  overflow-y-scroll">
                    {posters.map((poster, index) => (
                        <div
                        key={index}
                        className="p-2"
                        onScroll={handleScroll}
                        style={isScrollable ? { overflow: "scroll" } : {}}
                        >
                        <PosterMinDetail key={index} poster={poster}/>
                        </div>
                    ))}
                </div>
                }
            </div>
        </>
    )
}

export default LatestPosters
