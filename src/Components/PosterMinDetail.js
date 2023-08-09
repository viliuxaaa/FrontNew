import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import AxiosFetch from "../hooks/AxiosFetch"

function PosterMinDetail({poster}) {
    const posterIMG_URL="/api/v1/images/poster/get/" + poster.posterId + "/0";
    
    const [image, isPending, error ] = AxiosFetch(posterIMG_URL);

      // mazinam title teksta
      let shortTitle = poster.postName.substring(0, 30);
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
      let longDescription = poster.description.substring(0, 85);
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
              if (window.innerWidth < 1028) {
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
            <div className="hover:scale-95 transition shadow-md flex flex-row bg-subMain rounded-lg">
                <Link to={`/skelbimas/${poster?.posterId}`} className="w-full flex">
                    <div className="flex-shrink-0">
                        <img src={posterIMG_URL} alt="dog" className="w-32 h-32 aspect-[1/1] rounded-xl"/>
                    </div>
                    <div className="pl-5 flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-xl text-text font-semibold">{titleToDisplay}</h2>
                        <p className="text-text max-w-2xl">{descToDisplay}</p>
                    </div>
                    <div className="mt-auto pt-3">
                        <p className="align-text-bottom sm:text-sm xs:text-base md:text-base">
                            Kaina: <span className="font-medium pl-2">{poster.price}</span> &euro;
                        </p>
                    </div>
                </div>
                </Link>
            </div>
        </>
    )
}

export default PosterMinDetail
