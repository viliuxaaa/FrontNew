import Layout from "../Layout/Layout"
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useTranslation } from "react-i18next"
import { computerAEnum as catA,
    categoryTranslationKeys as langFileStrings,
    allArrays,
    cities
  } from '../enums/AllEnumArrays';
import { CiCircleRemove } from 'react-icons/ci'

// ======== PRIDETI EDIT FUNKCIONALUMA ( KAINA, NUOTRAUKOS?, TEL NR, DESCRIPTION )

const PRICE_REGEX = /^[0-9]+$/;
const CATEGORY_CITY_REGEX = /^[a-zA-Z]+$/;
const PHONE_REGEX = /^[+]?\d+$/;

function UploadPoster() {
    const privateAxios = useAxiosPrivate();
    const [t, i18n] = useTranslation("global");
    const [tempLangString, setTempLangString] = useState("");

    const {auth} = useAuth();  

    const createURL="api/v1/poster/"+auth.userId+"/create"; //GALIMAI PERKELTI EDIT FUNKCIONALUMA I KITA FORMA
    // const updateIMG_URL = "api/v1/images/poster/"+auth.userId+"/"+posterId+"/upload"
    const images = new FormData();
    
    
    const [requestError, setRequestError] = useState("");
    const [postName, setPostName] = useState("");
    const [posterDescription, setPosterDescription] = useState("");
    
    const [price, setPrice] = useState('');
    
    const [categoryA, setCategoryA] = useState('');
    const [catBArray, setCatBArray] = useState([]);
    const [categoryB, setCategoryB] = useState("");
    
    const [phoneNumber, setPhoneNumber] = useState(" ");
    
    // for poster succes notification
    const navigate = useNavigate();
    const handlePosterSuccess = () => {
        navigate('/?posterSuccess=true');
    };
    /////////////////////////////////

    const [city, setCity] = useState('');
    const [website, setWebsite] = useState('');
    const [videoLink, setVideoLink] = useState('');

    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [selectedFile3, setSelectedFile3] = useState(null);
    const [selectedFile4, setSelectedFile4] = useState(null);
    const [selectedFile5, setSelectedFile5] = useState(null);
    const [selectedFile6, setSelectedFile6] = useState(null);

    const [selectedFile1Uploaded, setSelectedFile1Uploaded] = useState(false);
    const [selectedFile2Uploaded, setSelectedFile2Uploaded] = useState(false);
    const [selectedFile3Uploaded, setSelectedFile3Uploaded] = useState(false);
    const [selectedFile4Uploaded, setSelectedFile4Uploaded] = useState(false);
    const [selectedFile5Uploaded, setSelectedFile5Uploaded] = useState(false);
    const [selectedFile6Uploaded, setSelectedFile6Uploaded] = useState(false);

    async function handleSubmit(event)  {
        event.preventDefault();
        // const newPoster = { //created poster to be able to inspect whether all parameters are getting through
        //   postName: postName, 
        //   description: posterDescription,
        //   price: +price,
        //   categoryA: categoryA,
        //   categoryB: categoryB,
        //   status: "ACTIVE",
        //   phoneNumber: phoneNumber,
        //   city: city,
        //   website: website,
        //   videoLink: videoLink
        // }
        
        
        try {
            images.append('image', selectedFile1)
            images.append('image', selectedFile2)
            images.append('image', selectedFile3)
            images.append('image', selectedFile4)
            images.append('image', selectedFile5)
            images.append('image', selectedFile6)

            const response = await privateAxios.post(createURL,{
                postName: postName, 
                description: posterDescription,
                price: +price, //konvertuoja i skaiciu
                categoryA: categoryA,
                categoryB: categoryB,
                status: "ACTIVE",
                phoneNumber: phoneNumber,
                city: city,
                website: website,
                videoLink: videoLink
            });
            console.log(response.data);

            handlePosterSuccess();
         
            if ( response.data.posterId ){
/////////////////////////////////////////////////////////////////////////////////////
                uploadImg( response.data.posterId );
            } 
        } catch(err) {
          setRequestError(err.message);
          console.log(requestError);
        }
    }
    async function uploadImg( id ){
        try{
            // console.log("api/v1/images/poster/"+auth.userId+"/"+id+"/upload")
            await privateAxios.post("api/v1/images/poster/"+auth.userId+"/"+id+"/upload", images, {
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            console.log('Image uploaded successfully')
        }catch (error) {
            console.error('Error uploading image: ' + error); 
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //================= Setting all inputs and select windows ==============================
    const handleNameChange = (event) => {
        setPostName(event.target.value);
    }
    const handleDescriptionChange = (e) => {
        setPosterDescription(e.target.value);
    }
    const handlePriceChange = (e) =>{
        setPrice(e.target.value);   
    }
      
      // ======= event watch makes sure that once the primary category is selected, a selection for secondary will appear
    const handleSelectA = (event) => {
        //when not using local simple variable the code displays older selection than it was
        let selection = catA.indexOf(event.target.value)
        setTempLangString(langFileStrings[selection]);
        setCatBArray(allArrays[selection]);
        setCategoryA(event.target.value);
        
        console.log(event.target.value)
        console.log(catA.indexOf(event.target.value)) 
    }
    const handleSelectB = (event) => { //testing using temmporary variable because setCategoryB works slower thus console shows previous meaning of it
        console.log(catBArray)
        const i = event.target.value
        setCategoryB(event.target.value);
        console.log(i);
    }
    const handlePhoneNumberChange = (e) => {
        if ( PHONE_REGEX.test(e.target.value) ){
          setPhoneNumber(e.target.value);
        } 
        
    }
    const handleSelectCity = (e) => {
        setCity(e.target.value);
    }
    const handleWebsiteChange = (e) =>{
        setWebsite(e.target.value);
    }
    const handleVideoLinkChange = (e) => {
        setVideoLink(e.target.value);
    }

   

    const handleInputChange1 = (e) => {
        if (e.target.files[0].size < 2097152 ){
            setSelectedFile1(e.target.files[0])
            setSelectedFile1Uploaded(true);
            console.log()
        }
    }
    const handleInputChange2 = (e) => {
        if (e.target.files[0].size < 2097152){
            setSelectedFile2(e.target.files[0])
            setSelectedFile2Uploaded(true);
        }
    }
    const handleInputChange3 = (e) => {
        if (e.target.files[0].size < 2097152){
            setSelectedFile3(e.target.files[0])
            setSelectedFile3Uploaded(true);
        }
    }
    const handleInputChange4 = (e) => {
        if (e.target.files[0].size < 2097152){
            setSelectedFile4(e.target.files[0])
            setSelectedFile4Uploaded(true);
        }
    }
    const handleInputChange5 = (e) => { //1 923 300
        if (e.target.files[0].size < 2097152){
            setSelectedFile5(e.target.files[0])
            setSelectedFile5Uploaded(true);
        }
    }
    const handleInputChange6 = (e) => {
        if (e.target.files[0].size < 2097152){
            setSelectedFile6(e.target.files[0])
            setSelectedFile6Uploaded(true);
        }
    }

    const inputFIeld = ( x, y, selectedFileUploaded, selectedFile ) => {
        return(
        <div className="flex items-center justify-center w-full">  
            <label
                htmlFor={y}
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6  ">
                {selectedFileUploaded ? 
                (
                <>
                    <button>
                        <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Selected File Preview"
                            className=" object-contain rounded-lg h-[90px]"
                        />
                        <p className="m-2 text-xs text-gray-500 dark:text-gray-400">
                            <span className="font-semibold" >Remove image</span> 
                        </p>
                    </button>
                </>
                ) : (
                <>
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
                        <span className="font-semibold">Upload picture</span>
                        <br/>
                        <span className="font-semibold"> up to 2 Mb size</span> 
                    </p>
                </>)}
                </div>
                <input id={y} type="file" className="hidden"onChange={x} accept="image/png, image/webp, image/jpeg" />
            </label>
        </div>);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <Layout>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen text-text">
                    <div className="w-full bg-gradient-to-t from-accentLower from-10% to-background to-90% rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-2xl flex-rows font-bold leading-tight tracking-tight text-gray-900 md:text-2x">
                                Add a poster
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                {/* ********* TITLE ******** */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="posterName"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="posterName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={postName} 
                                        onChange={handleNameChange}
                                    />
                                </div>

                                {/* ********* CATEGORY A ******** */}
                                <div>
                                    <label
                                        htmlFor="categoryA"
                                        onChange={handleSelectA}
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        First category
                                    </label>
                                    <select id="categoryA" 
                                        onChange={handleSelectA}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        { catA.map((category, index) => {
                                            return(
                                            <option value={category} key={index}  > 
                                                {t("computerCategoryA."+ index)}
                                            </option>
                                            );
                                        })}
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
                                        onChange={handleSelectB}
                                    >
                                        { catBArray.map( ( bCategory, index) => {
                                        return (              
                                            <option value={bCategory} key={index} >
                                            {t( tempLangString+"."+ index)} 
                                            </option>                 
                                        );
                                        })}
                                        {/* {console.log(catBArray)} */}
                                    </select>
                                </div>

                                {/* ********* DESCRIPTION ******** */}
                                <div className="mb-6 flex-rows">
                                    <textarea
                                        id="posterDescription"
                                        rows={7}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Description"
                                        maxLength={1000}
                                        value={posterDescription} 
                                        onChange={handleDescriptionChange}
                                    />
                                </div>

                                {/* ********* PRICE ******** */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Price (eur)
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        step = "1"
                                        min = "0"
                                        value={price} 
                                        onChange={handlePriceChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                {/* ********* FILE UPLOAD ******** */}
                                
                                <div className="grid grid-cols-3 gap-2">
                                    {inputFIeld(handleInputChange1, "dropzone-file1", selectedFile1Uploaded, selectedFile1)}
                                    {inputFIeld(handleInputChange2, "dropzone-file2", selectedFile2Uploaded, selectedFile2)}
                                    {inputFIeld(handleInputChange3, "dropzone-file3", selectedFile3Uploaded, selectedFile3)}
                                    {inputFIeld(handleInputChange4, "dropzone-file4", selectedFile4Uploaded, selectedFile4)}
                                    {inputFIeld(handleInputChange5, "dropzone-file5", selectedFile5Uploaded, selectedFile5)}
                                    {inputFIeld(handleInputChange6, "dropzone-file6", selectedFile6Uploaded, selectedFile6)}
                                </div>

                                {/* ********* BR ******** */}
                                {/* <hr className="h-px my-8 bg-black border-0 dark:bg-gray-700" /> */}

                                {/* ********* STATE ******** PASLEPTAS KOL NERA UPDATED */}
                                <div className="hidden">
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
                                {/* <hr className="h-px my-8 bg-black border-0 dark:bg-gray-700" /> */}

                                {/* ********* STATE ********  PASLEPTAS KOL NERA UPDATED*/}
                                <div className="hidden">
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
                                            onChange={handlePhoneNumberChange}
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
                                        onChange={handleSelectCity}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        { cities.map( ( arrCity, index) => {
                                            return(
                                            <option value={arrCity} key={index} > {arrCity} </option>
                                            );
                                        })}
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
                                        onChange={handleWebsiteChange}
                                        value={website}
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
                                        onChange={handleVideoLinkChange}
                                        value={videoLink}
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
