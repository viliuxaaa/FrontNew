import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

function PosterMaxDetail({poster}) {

    const [t, i18n] = useTranslation("global");
    const getPosterImg = `/api/v1/images/poster/get/${poster.posterId}/0`
    // mazinam title teksta
    let shortTitle = poster.postName.substring(0, 40);
    const lastSp = shortTitle.lastIndexOf(" ");

    if (lastSp !== -1) {
        shortTitle = shortTitle.substring(0, lastSp) + "...";
    } else {
        shortTitle = shortTitle + "...";
    }
    // telefonam descriptionas
    let shortDescription = poster.description.substring(0, 55);
    const lastSpace = shortDescription.lastIndexOf(" ");
    
    if (lastSpace !== -1) {
        shortDescription = shortDescription.substring(0, lastSpace) + "...";
    } else {
        shortDescription = shortDescription + "...";
    }
    // website descriptionas
    let longDescription = poster.description.substring(0, 75);
    const lastSpac = longDescription.lastIndexOf(" ");
    
    if (lastSpace !== -1) {
        longDescription = longDescription.substring(0, lastSpac) + "...";
    } else {
        longDescription = longDescription + "...";
    }

    const [titleToDisplay, setTitleToDisplay] = useState(poster.postName);
    const [descToDisplay, setDescToDisplay] = useState(poster.description);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 760) {
                setTitleToDisplay(shortTitle);
                setDescToDisplay(shortDescription);
            } else {
                setTitleToDisplay(poster.postName);
                setDescToDisplay(longDescription);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial call

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [shortTitle, poster.postName, shortDescription, poster.description]);

    return (
        <> 
            <div className="hover:scale-105 transition flex flex-row justify-center sm:w-9/12 xs:mx-2 xs:gap-1 text-text"> {/**/}
                <Link to={`/skelbimas/${poster?.posterId}`} className="flex">
                    <div className="flex-shrink-0 pr-2">
                            <img 
                                src={getPosterImg} 
                                alt="Imaasdasdge" 
                                className="w-40 h-40 border-[2px] border-darkAccent shadow-md rounded-l-xl"
                            />
                    </div>
                    <div className="xs:w-[400px] md:w-[800px] border-[2px] border-main xs:p-1 h-40 p-2 shadow-md bg-subMain rounded-r-lg flex flex-col justify-between">
                    <div>
                        <h2 className="xs:text-base md:text-xl font-semibold">{titleToDisplay}</h2>
                        <p>{descToDisplay}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="align-text-bottom sm:text-sm xs:text-base md:text-base">
                        {poster?.city}
                        </p>
                        <p className="align-text-bottom sm:text-sm xs:text-base md:text-base">
                        {t("allPosters.price")} {poster?.price} &euro;
                        </p>
                    </div>
                    </div>
                </Link>    
            </div>
        </>
    )
}

export default PosterMaxDetail
