import React, { useState, useEffect } from "react";
import { CgSpinner } from "react-icons/cg";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "../Layout/Layout";
import PosterMaxDetail from "../Components/PosterMaxDetail";
import AxiosFetch from "../hooks/AxiosFetch";

function Posters() {
  
  const maxPage = 3;
  const [page, setPage] = useState(maxPage);
  const [maxPosters, setMaxPosters] = useState(true);

  const HandleLoadingMore = () => {
    setPage(page + maxPage);
  };

  const { searchType } = useParams();
  const getAllPosters = `/api/v1/poster/get/search?${searchType}`;
  const [posters, isPending, error] = AxiosFetch(getAllPosters);

  useEffect(() => {
    if (posters && posters.length <= page) {
      setMaxPosters(false);
    } else {
      setMaxPosters(true);
    }
  }, [posters, page]);

  const [t, i18n] = useTranslation("global");

  return (
    <Layout>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="10"
        className="my-10 min-h-screen px-2 md:px-0"
      >
        <div className="flex-colo gap-5">
          <div className="flex-rows">
            <div className="border-[2px] border-main shadow-md px-10 py-2 rounded-3xl font-medium justify-center bg-subMain text-text">
              <p className="tracking-wider text-lg font-md font-sans">
              {t("posters.totalText")}{' '}
                <span className="font-extrabold text-text">
                  {posters?.length}
                </span>{' '}
                {t("posters.itemsFoundText")}
              </p>
            </div>
          </div>
          {posters &&
            posters.slice(0, page)?.map((poster, i) => (
              <PosterMaxDetail key={i} poster={poster} />
            ))}
        </div>
        {/* Loading More */}
        {maxPosters && (
          <div className="w-full flex-colo md:my-20 my-10">
            <button
              onClick={HandleLoadingMore}
              className="flex hover:scale-105 transition items-center gap-3 text-text py-3 bg-subMain px-8 rounded-md font-semibold border-2 border-main"
            >
              {t("posters.loadMore")} <CgSpinner className="animate-spin" />
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Posters;
