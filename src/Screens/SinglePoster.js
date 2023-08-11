import Layout from "../Layout/Layout"
import { useParams } from "react-router-dom";
import AxiosFetch from "../hooks/AxiosFetch";
import PosterInfo from "../Components/Single/PosterInfo";
import PosterMinDetail from '../Components/PosterMinDetail';
import { useEffect, useState } from "react";

function SinglePoster() {

    const { id } = useParams();
    const posterInfoURL = "/api/v1/poster/get/" + id;
    const postersInfoURL = "/api/v1/poster/get/search";

    const [poster, isLoaded, error] = AxiosFetch(posterInfoURL);
    const [posters, isLoadeds, errors] = AxiosFetch(postersInfoURL);
    const [relatedPosters, setRelatedPosters] = useState([]);

    useEffect(() => {
        if (!isLoaded && !isLoadeds) {
            const related = posters.filter(p => p.city === poster.city);
            setRelatedPosters(related);
        }
    }, [isLoaded, isLoadeds, poster, posters]);


    return (
        <Layout>
            <div className="min-h-screen">
            { error && <p> Error in the fetch</p>}
            { posters && poster &&<> 
                <PosterInfo poster={poster} />
                <div className='container mx-auto h-full px-3 my-6 border bg-darkAccent border-gray-800 rounded-md'>
                    <div className='my-10'>
                        <h1 className="text-text font-semibold text-2xl text-center">Jus gali sudominti</h1>
                        <div className='grid sm:mt-10 mt-6 md:grid-cols-2 gap-2 w-full text-text'>
                            {
                                relatedPosters.slice(0,10).map((poster,index) => (
                                    <PosterMinDetail key={index} poster={poster}/>
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </> 
            }
            </div>
        </Layout>
        
    )
}

export default SinglePoster