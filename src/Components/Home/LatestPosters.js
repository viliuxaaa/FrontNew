
import {useState} from "react";
import { posters } from "../../Data/PosterData"
import PosterMinDetail from "../PosterMinDetail";


function LatestPosters() {
    const [isScrollable, setIsScrollable] = useState(false);

    const handleScroll = () => {
        setIsScrollable(true);
    };

    return (
        <>
            <div className="bg-background border-[2px] border-main shadow-lg lg:w-full md:w-80 rounded-lg my-5 sm:mx-10">
                <div className="xxs:w-80 xs:w-full flex-rows lg:w-full md:w-80 font-semibold text-text p-2 bg-main rounded-t-lg leading-4 tracking-wide">
                    LatestPosters
                </div>
                <div className="lg:h-[28rem] md:h-48 xxs:h-[28rem] xs:h-[28rem]  overflow-y-scroll">
                    {posters.slice(0, 6).map((post, index) => (
                        <div
                        key={index}
                        className="p-4"
                        onScroll={handleScroll}
                        style={isScrollable ? { overflow: "scroll" } : {}}
                        >
                        <PosterMinDetail key={index} post={post}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default LatestPosters
