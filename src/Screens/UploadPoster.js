import Layout from "../Layout/Layout"

function UploadPoster() {
    return (
        <>
            <Layout>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen text-text">
                    <div className="w-full bg-gradient-to-t from-accentLower from-10% to-background to-90% rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-2xl flex-rows font-bold leading-tight tracking-tight text-gray-900 md:text-2x">
                                Add a poster
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                {/* ********* TITLE ******** */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="base-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="base-input"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                {/* ********* CATEGORY A ******** */}
                                <div>
                                    <label
                                        htmlFor="categoryA"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        First category
                                    </label>
                                    <select
                                        id="categoryA"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </select>
                                </div>

                                {/* ********* CATEGORY B ******** */}
                                <div>
                                    <label
                                        htmlFor="categoryB"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Second category
                                    </label>
                                    <select
                                        id="categoryB"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </select>
                                </div>

                                {/* ********* DESCRIPTION ******** */}
                                <div className="mb-6 flex-rows">
                                    <textarea
                                        id="message"
                                        rows={7}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Description"
                                        defaultValue={""}
                                    />
                                </div>

                                {/* ********* PRICE ******** */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                {/* ********* FILE UPLOAD ******** */}
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="flex items-center justify-center w-full">
                                        <label
                                            htmlFor="dropzone-file1"
                                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="m-2 text-xs text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            </div>
                                            <input id="dropzone-file1" type="file" className="hidden" />
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-center w-full">
                                        <label
                                            htmlFor="dropzone-file2"
                                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="m-2 text-xs text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            </div>
                                            <input id="dropzone-file2" type="file" className="hidden" />
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-center w-full">
                                        <label
                                            htmlFor="dropzone-file3"
                                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="m-2 text-xs text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            </div>
                                            <input id="dropzone-file3" type="file" className="hidden" />
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-center w-full">
                                        <label
                                            htmlFor="dropzone-file4"
                                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="m-2 text-xs text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            </div>
                                            <input id="dropzone-file4" type="file" className="hidden" />
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-center w-full">
                                        <label
                                            htmlFor="dropzone-file5"
                                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="m-2 text-xs text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            </div>
                                            <input id="dropzone-file5" type="file" className="hidden" />
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-center w-full">
                                        <label
                                            htmlFor="dropzone-file6"
                                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="m-2 text-xs text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            </div>
                                            <input id="dropzone-file6" type="file" className="hidden" />
                                        </label>
                                    </div>
                                </div>

                                {/* ********* BR ******** */}
                                <hr className="h-px my-8 bg-black border-0 dark:bg-gray-700" />

                                {/* ********* STATE ******** */}
                                <div>
                                    <label
                                        htmlFor="state"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        State
                                    </label>
                                    <select
                                        id="state"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>New</option>
                                        <option>Used</option>
                                    </select>
                                </div>

                                {/* ********* BR ******** */}
                                <hr className="h-px my-8 bg-black border-0 dark:bg-gray-700" />

                                {/* ********* WHO ******** */}
                                <div>
                                    <label
                                        htmlFor="who"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        You are
                                    </label>
                                    <select
                                        id="who"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>Privatus</option>
                                        <option>Juridinis</option>
                                    </select>
                                </div>

                                {/* ********* Tel Nr ******** */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="tel"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Phone number
                                    </label>
                                    <div className="flex-rows">
                                        <h1>+</h1>
                                        <input
                                            type="tel"
                                            id="price"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    
                                </div>

                                {/* ********* City ******** */}
                                <div>
                                    <label
                                        htmlFor="city"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        City
                                    </label>
                                    <select
                                        id="city"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>Vilnius</option>
                                        <option>Kaunas</option>
                                    </select>
                                </div>

                                {/* ********* WEB LINK ******** */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="web"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Web link
                                    </label>
                                    <input
                                        type="text"
                                        id="web"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                {/* ********* VIDEO LINK ******** */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="video"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Video link
                                    </label>
                                    <input
                                        type="text"
                                        id="video"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="border-[2px] border-main w-full shadow-md bg-subMain hover:text-black text-text bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default UploadPoster
