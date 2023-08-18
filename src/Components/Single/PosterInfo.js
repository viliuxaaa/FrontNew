import React, { useEffect, useState } from 'react'
import ImageView from '../ImageView'
import PosterMenu from './PosterMenu';
import useAuth from '../../hooks/useAuth';
import { TbCurrencyEuro } from 'react-icons/tb'
import { useTranslation } from 'react-i18next';
import { computerAEnum as catA,
    allBCategoriesMix
  } from '../../enums/AllEnumArrays';


function PosterInfo({poster, t}) {
    const {auth} = useAuth(); 

    const dateCreated = poster?.createdAt.substring(0,10);
    const dateUpdated = poster.updatedAt && poster.updatedAt.substring(0,10);
    const [catADisplay, setCatADisplay] = useState('');
    const [catBDisplay, setCatBDisplay] = useState('');

    useEffect(() => {
        translateCategories();
    },[])
    
    function translateCategories(){
        //LOOK AT ALL CATA ENUM VALUES TO FIND MATCH THEN DISPLAY TRANSLATABLE STRING
        for( let i = 0; i < catA.length; i++ ){
            if( catA[i] === poster?.categoryA ){
                setCatADisplay(t("computerCategoryA."+ i))
            }
        }
        translateBCategories();
        
    }
    function translateBCategories(){
        for(let j=0 ;j<allBCategoriesMix.length; j++){
            if ( allBCategoriesMix[j] === poster?.categoryB ){
                setCatBDisplay(t("allCategoryBMix."+j))
            }
        }
    }


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 md:mt-10 mb-20">
        <div className="xs:order-last lg:order-first lg:mt-12">
            <ImageView poster={poster}/>
        </div>
        <div className="flex flex-col px-3 md:px-0 items-center mt-5 lg:mt-20 sm:p-5 lg:pr-20 text-text ">
            <div className="bg-main border-[2px] border-darkMain container shadow-xl rounded-xl font-semibold text-3xl w-full mx-auto px-2 mb-5 py-2 xs:pt-7 xs:pb-3 lg:py-6">
                <h1 className='text-lg lg:text-2xl'>{poster?.postName}</h1>
            </div>
            { +auth.userId === poster.userId && <PosterMenu id={poster.posterId}/>}
            {/* ////////////////////////////// */}
            <div className="bg-main border-[2px] border-darkMain container shadow-xl rounded-xl font-semibold text-3xl w-full mt-2 mx-auto px-2 py-2 xs:pt-7 xs:pb-3 lg:py-6">
            <table className="bg-main border-2 border-darkMain container font-medium text-3xl w-full mx-auto px-5 py-2 xs:pt-7 xs:pb-3 lg:py-6">
                <tbody>
                    <tr className="bg-subMain h-fit p-3 border-b-2 border-darkMain">
                        <td className="text-base md:text-2xl px-4">{t("single.tel")}</td>
                        <td className="text-base md:text-2xl flex"><span className="font-normal">+{poster.phoneNumber}</span></td>
                    </tr>
                    <tr className="bg-subMain h-fit p-3 border-t-2 border-darkMain">
                        <td className="text-base md:text-2xl px-4">{t("single.miestas")}</td>
                        <td className="text-base md:text-2xl flex"><span className="font-normal">{poster.city}</span></td>
                    </tr>
                    <tr className="bg-subMain h-fit p-3 border-t-2 border-darkMain">
                        <td className="text-base md:text-2xl px-4">{t("single.kat")}</td>
                        <td className="text-base md:text-2xl flex"><span className="font-normal">{catADisplay}</span></td>
                    </tr>
                    <tr className="bg-subMain h-fit p-3 border-t-2 border-darkMain">
                        <td className="text-base md:text-2xl px-4">{t("single.status")}</td>
                        <td className="text-base md:text-2xl flex"><span className="font-normal">{poster.status}</span></td>
                    </tr>
                    <tr className="bg-subMain h-fit p-3 border-t-2 border-darkMain">
                        <td className="text-base md:text-2xl px-4">{t("single.website")}</td>
                        <td className="text-base md:text-2xl flex"><span className="font-normal">{poster.website ? poster.website : '-'}</span></td>
                    </tr>
                    <tr className="bg-subMain h-fit p-3 border-t-2 border-darkMain">
                        <td className="text-base md:text-2xl px-4">{t("single.video")}</td>
                        <td className="text-base md:text-2xl flex"><span className="font-normal">{poster.videolink ? poster.videolink : '-'}</span></td>
                    </tr>
                    <tr className="bg-subMain rounded-b-xl h-fit p-3 border-y-2 border-darkMain">
                        <td className="text-base md:text-2xl px-4">{t("single.sukurtas")}</td>
                        <td className="text-base md:text-2xl flex"><span className="font-normal">{dateCreated ? dateCreated : '-'}</span></td>
                    </tr>
                    <tr className="bg-subMain rounded-b-xl h-fit p-3 border-y-2 border-darkMain">
                        <td className="text-base md:text-2xl px-4">{t("single.atnaujintas")}</td>
                        <td className="text-base md:text-2xl flex"><span className="font-normal">{dateUpdated ? dateUpdated : '-'}</span></td>
                    </tr>
                    <tr className="bg-subMain h-[60px] p-3">
                        <td className="text-base md:text-2xl px-4">{t("single.kaina")}</td>
                        <td className="text-6xl flex pt-2"><span className="font-normal text-green-500">{poster.price}</span> <TbCurrencyEuro size={36}/></td>
                    </tr>
                </tbody>
            </table>
            </div>
            {/* /////////////////// */}
            <div className="bg-darkAccent border-[2px] border-darkMain container shadow-xl rounded-xl font-sm text-xl w-full mx-auto my-5">
                <div className="bg-main rounded-t-xl h-fit text-3xl flex-rows">
                    <h1 className="my-1 text-lg lg:text-2xl">{t("single.aprasymas")}</h1>
                </div>
                <div className="bg-subMain rounded-b-xl h-fit p-3 border-y-2 border-darkMain">
                    <p style={{ whiteSpace: "pre-line" }} className="break-after-column text-base sm:text-2xl pb-10" dangerouslySetInnerHTML={{ __html: poster?.description }} /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default PosterInfo