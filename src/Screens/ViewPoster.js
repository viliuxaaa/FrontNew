import { useEffect, useState } from "react";
import Layout from "../Layout/Layout"
import ImageView from "../Components/ImageView";

function ViewPoster() {
    return (
        <Layout>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-0 md:mt-10 mb-20">
                <div className="">
                    <ImageView />
                </div>
                <div className="flex flex-col items-center mt-5 lg:mt-32 lg:pr-20 text-text">
                    <div className="bg-darkAccent font-semibold text-3xl w-full mx-auto px-5 py-2 lg:p-12">
                        Labas
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ViewPoster
