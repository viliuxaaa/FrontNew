import { Link, useParams } from "react-router-dom";
import PosterMaxDetail from "../Components/PosterMaxDetail"
import AxiosFetch from "../hooks/AxiosFetch";
import { useTranslation } from "react-i18next";
import Layout from "../Layout/Layout"
import { CgSpinner } from "react-icons/cg";
import { useState } from "react";

function Posters() {
    const maxPage = 3
    const [page,setPage] = useState(maxPage)
    const HandleLoadingMore = () => {
      setPage(page + maxPage)
    }

    const [t, i18n] = useTranslation("global");
    const {searchType} = useParams();
    
    const getAllPosters = `/api/v1/poster/get/search?${searchType}`;
    const [posters, isPending, error] = AxiosFetch(getAllPosters)
    console.log(posters)

    return (
        <Layout>
            <div 
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="10"
                className="my-10 min-h-screen px-2 md:px-0">
                <div className="flex-colo gap-5">
                    <div className="flex-rows ">
                        <div className="border-[2px] border-main shadow-md p-2 rounded-3xl font-medium xs:w-52 md:w-[28rem] lg:w-96 flex flex-row justify-center bg-subMain text-text">
                            <h1 className="tracking-wider text-lg font-md font-sans">{t("allPosters.allPostersText")}</h1>
                            <p className='tracking-wider text-lg font-md font-sans pl-10'>
                                Total <span className='font-extrabold text-text'>{posters?.length}</span>{' '} items Found
                            </p>
                        </div>
                    </div>
                    {posters && posters.slice(0,page)?.map((poster, i) => (
                        <PosterMaxDetail key={i} poster={poster}/>
                    ))}
                </div>
                {/* Loading More */}
                <div className='w-full flex-colo md:my-20 my-10'>
                <button onClick={HandleLoadingMore} className='flex hover:scale-105 transition items-center gap-3 text-text py-3 bg-subMain px-8 rounded-md font-semibold border-2 border-main'>
                    Loading More <CgSpinner className="animate-spin"/>
                </button>
                </div>
            </div>
        </Layout>
    )
}

export default Posters
