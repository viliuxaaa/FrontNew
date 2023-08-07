import React from 'react'
import ImageView from '../ImageView'

function PosterInfo(post) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 md:mt-10 mb-20">
                <div className="xs:order-last lg:order-first lg:mt-12">
                    <ImageView />
                </div>
                <div className="flex flex-col px-3 md:px-0 items-center mt-5 lg:mt-20 sm:p-5 lg:pr-20 text-text">
                    <div className="bg-main border-[2px] border-darkMain container shadow-xl rounded-xl font-semibold text-3xl w-full mx-auto px-5 py-2 xs:pt-7 xs:pb-3 lg:pt-9 lg:pb-6">
                        {/* Title */}
                        <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>
                            {post?.postName}
                        </h1>
                    </div>
                    <div className="bg-darkAccent border-[2px] border-darkMain container shadow-xl rounded-xl font-sm text-xl w-full mx-auto my-10">
                        <div className="bg-main rounded-t-xl h-fit text-3xl flex-rows">
                            <h1 className="my-3">ApraÅ¡ymas</h1>
                        </div>
                        <div className="bg-subMain h-fit p-3 border-y-2 border-darkMain">
                            <p className="break-after-column">
                                sasdasd<br/>
                                asdasdasd dsf sf sdf sdf sdf sdf sdf sdfgfhgdf dS DF SDF 
                                asdasdasdsa<br/>
                                sasdasd<br/>
                                asdasdasd<br/>
                                asdasdasdsa<br/>
                                sasdasd<br/>
                                asdasdasd<br/>
                                asdasdasdsa<br/>
                                sasdasd<br/>
                                asdasdasd<br/>
                                asdasdasdsa<br/>
                                asdasdasd<br/>
                                asdasdasdsa<br/>
                                sasdasd<br/>
                                asdasdasd<br/>
                                asdasdasdsa<br/>
                            </p>
                        </div>
                        <div className="bg-subMain rounded-b-xl h-fit p-3">
                            <p className="text-3xl">Tel. nr: +3706148256</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default PosterInfo