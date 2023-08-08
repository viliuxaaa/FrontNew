import React from 'react'
import ImageView from '../ImageView'

function PosterInfo({poster}) {

    const dateCreated = poster?.createdAt.substring(0,10);
    const dateUpdated = poster.updatedAt && poster.updatedAt.substring(0,10);
    
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 md:mt-10 mb-20">
                <div className="xs:order-last lg:order-first lg:mt-12">
                    <ImageView poster={poster}/>
                </div>
                <div className="flex flex-col px-3 md:px-0 items-center mt-5 lg:mt-20 sm:p-5 lg:pr-20 text-text">
                    <div className="bg-main border-[2px] border-darkMain container shadow-xl rounded-xl font-semibold text-3xl w-full mx-auto px-5 py-2 xs:pt-7 xs:pb-3 lg:pt-9 lg:pb-6">
                        <h1>{poster?.postName}</h1>
                    </div>
                    <div className="bg-darkAccent border-[2px] border-darkMain container shadow-xl rounded-xl font-sm text-xl w-full mx-auto my-10">
                        <div className="bg-main rounded-t-xl h-fit text-3xl flex-rows">
                            <h1 className="my-3">Aprašymas</h1>
                        </div>
                        <div className="bg-subMain h-fit p-3 border-y-2 border-darkMain">
                            <p className="break-after-column" dangerouslySetInnerHTML={{ __html: poster?.description }} />                            
                        </div>
                        <div className="bg-subMain h-fit p-3">
                            <p className="text-3xl">Sukurtas: {dateCreated}</p>
                            {dateUpdated && <p className="text-3xl">Atnaujintas: {dateUpdated}</p>}
                        </div>
                        <div className="bg-subMain rounded-b-xl h-fit p-3 border-y-2 border-darkMain">
                            <p className="text-3xl">Kaina: {poster.price} &euro;</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default PosterInfo