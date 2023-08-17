import React from 'react'
import ImageView from '../ImageView'
import PosterMenu from './PosterMenu';
import useAuth from '../../hooks/useAuth';
import { TbCurrencyEuro } from 'react-icons/tb'

function PosterInfo({poster, t}) {
    const {auth} = useAuth(); 

    const dateCreated = poster?.createdAt.substring(0,10);
    const dateUpdated = poster.updatedAt && poster.updatedAt.substring(0,10);
  
    
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
            <table class="bg-main border-2 border-darkMain container font-medium text-3xl w-full mx-auto px-5 py-2 xs:pt-7 xs:pb-3 lg:py-6">
                <tr class="bg-subMain h-fit p-3 border-b-2 border-darkMain">
                    <td class="text-base md:text-2xl px-4">{t("single.tel")}</td>
                    <td class="text-base md:text-2xl flex"><span class="font-normal">+{poster.phoneNumber}</span></td>
                </tr>
                <tr class="bg-subMain h-fit p-3 border-t-2 border-darkMain">
                    <td class="text-base md:text-2xl px-4">{t("single.miestas")}</td>
                    <td class="text-base md:text-2xl flex"><span class="font-normal">{poster.city}</span></td>
                </tr>
                <tr class="bg-subMain h-fit p-3 border-t-2 border-darkMain">
                    <td class="text-base md:text-2xl px-4">{t("single.kat")}</td>
                    <td class="text-base md:text-2xl flex"><span class="font-normal">{poster.categoryA}</span></td>
                </tr>
                <tr class="bg-subMain h-fit p-3 border-t-2 border-darkMain">
                    <td class="text-base md:text-2xl px-4">{t("single.status")}</td>
                    <td class="text-base md:text-2xl flex"><span class="font-normal">{poster.status}</span></td>
                </tr>
                <tr class="bg-subMain h-fit p-3 border-t-2 border-darkMain">
                    <td class="text-base md:text-2xl px-4">{t("single.website")}</td>
                    <td class="text-base md:text-2xl flex"><span class="font-normal">{poster.website ? poster.website : '-'}</span></td>
                </tr>
                <tr class="bg-subMain h-fit p-3 border-t-2 border-darkMain">
                    <td class="text-base md:text-2xl px-4">{t("single.video")}</td>
                    <td class="text-base md:text-2xl flex"><span class="font-normal">{poster.videolink ? poster.videolink : '-'}</span></td>
                </tr>
                <tr class="bg-subMain rounded-b-xl h-fit p-3 border-y-2 border-darkMain">
                    <td class="text-base md:text-2xl px-4">{t("single.sukurtas")}</td>
                    <td class="text-base md:text-2xl flex"><span class="font-normal">{dateCreated ? dateCreated : '-'}</span></td>
                </tr>
                <tr class="bg-subMain rounded-b-xl h-fit p-3 border-y-2 border-darkMain">
                    <td class="text-base md:text-2xl px-4">{t("single.atnaujintas")}</td>
                    <td class="text-base md:text-2xl flex"><span class="font-normal">{dateUpdated ? dateUpdated : '-'}</span></td>
                </tr>
                <tr class="bg-subMain h-[60px] p-3">
                    <td class="text-base md:text-2xl px-4">{t("single.kaina")}</td>
                    <td class="text-6xl flex pt-2"><span class="font-normal text-green-500">{poster.price}</span> <TbCurrencyEuro size={36}/></td>
                </tr>
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