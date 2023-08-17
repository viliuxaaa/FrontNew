import Layout from "../Layout/Layout"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import axios from '../api/axios';
import AxiosFetch from '../hooks/AxiosFetch';
import { useTranslation } from "react-i18next";
import { computerAEnum as catA,
    categoryTranslationKeys as langFileStrings,
    allArrays,
    cities
  } from '../enums/AllEnumArrays';

const PRICE_REGEX = /^[0-9]+$/;
const CITY_REGEX = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ\s]+$/;
const PHONE_REGEX = /^\d{8,15}$/;
const CATEGORY_REGEX = /^(?=.*[a-zA-Z_]{4,})[a-zA-Z_]*$/;

function UploadPoster() {
    const privateAxios = useAxiosPrivate();
    const [t, i18n] = useTranslation("global");
    const [tempLangString, setTempLangString] = useState("");

    const {auth} = useAuth();
    const { id } = useParams();
    
    const [submitAttempt, setSubmitAttempt] = useState(0);

    const posterInfoURL = `api/v1/poster/get/`+ id;
    const createURL="api/v1/poster/"+auth.userId+"/create"; //GALIMAI PERKELTI EDIT FUNKCIONALUMA I KITA FORMA
    const updateURL="api/v1/poster/"+auth.userId+"/update/"+id;
    const ImgDelURL="api/v1/images/poster/"+auth.userId+"/"+id+"/delete"; //+deleteIMG position
    // const updateIMG_URL = "api/v1/images/poster/"+auth.userId+"/"+posterId+"/upload"
    //Cannot use updateIMGURL because it updates too slow with the poster ID

    const images = new FormData();

    const [posterEdit, setPosterEdit] = useState( null ); 
    const [imgRed, setImgRed] = useState(false);

    const [requestError, setRequestError] = useState('');

    const [postName, setPostName] = useState("");
    

    const [posterDescription, setPosterDescription] = useState("");
    
    
    const [price, setPrice] = useState('');
    const [priceValid, setPriceValid] = useState(false);

    const [categoryA, setCategoryA] = useState('');
    const [categoryAValid, setCategoryAValid] = useState(false);

    const [catBArray, setCatBArray] = useState([]);
    const [categoryB, setCategoryB] = useState("");
    const [categoryBValid, setCategoryBValid] = useState(false);
    
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberValid, setPhoneNumberValid] = useState(false);

    const [city, setCity] = useState('');
    const [cityValid, setCityValid] = useState(false);

    const [website, setWebsite] = useState('');
    const [videoLink, setVideoLink] = useState('');
    
    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [selectedFile3, setSelectedFile3] = useState(null);
    const [selectedFile4, setSelectedFile4] = useState(null);
    const [selectedFile5, setSelectedFile5] = useState(null);
    const [selectedFile6, setSelectedFile6] = useState(null);

    const functionalArr = [ 
        setSelectedFile1,
        setSelectedFile2,
        setSelectedFile3,
        setSelectedFile4,
        setSelectedFile5,
        setSelectedFile6
    ]

    // for poster succes notification
    const navigate = useNavigate();
    const handlePosterSuccess = () => {
        navigate('/?posterSuccess=true');
    };
    /////////////////////////////////

    function changeImgRed(){
        setImgRed(true);
    }
    const delay = 1000;
    const timerImgRed = setTimeout(changeImgRed, delay)

    //CLICKING NAUJAS SKELBIMAS FROM UPDATING RESET
    useEffect(() => {
        function resetHandle(){
            if ( !id ){
                setPostName("");
                
                setPosterDescription("");
                
                setPrice("");
                setPriceValid(false)
                setCategoryA("");
                setCategoryAValid(false);
                setCategoryB("");
                setCategoryBValid(false);
                setPhoneNumber("");
                setPhoneNumberValid(false);
                setCity("");
                setCityValid(false);
                setWebsite("");
                setVideoLink("")
                //sets all files to null
                for ( let i = 0; i < 6; i++ ){
                    functionalArr[i](null);
                }
            } 
        }
        resetHandle();
    },[])
    

    function posterCheck(){
        if ( postName &&
            posterDescription &&
            priceValid &&
            categoryAValid &&
            categoryBValid &&
            phoneNumberValid &&
            cityValid &&
            fileCheck()
        ){
            return true;
        } else {
            return false;
        }
    }
    function fileCheck(){
        if (
            selectedFile1 ||
            selectedFile2 ||
            selectedFile3 ||
            selectedFile4 ||
            selectedFile5 ||
            selectedFile6 
        ){
            return true;
        }
        return false;
    }
    
    async function handleSubmit(event)  {
        console.log(price)
        setSubmitAttempt(submitAttempt+1)
        event.preventDefault();
        let check = posterCheck();

        if ( check ){try {
            images.append('image', selectedFile1);
            images.append('image', selectedFile2);
            images.append('image', selectedFile3);
            images.append('image', selectedFile4);
            images.append('image', selectedFile5);
            images.append('image', selectedFile6);

            if ( id ) {
                try{
                    const response = await privateAxios.delete( ImgDelURL )
                    console.log(response)
                } catch {
                    console.log("image deletion failed")
                }

                const response = await privateAxios.put(updateURL,{
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
             
                if ( response.data.posterId && imgRed ){
                    uploadImg( response.data.posterId );
                }

            } else {
                console.log(createURL)
                console.log(
                    postName, 
                    posterDescription,
                     +price, //konvertuoja i skaiciu
                     categoryA,
                    categoryB,
                    
                    phoneNumber,
                    city,
                     website,
                     videoLink
                )
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
                uploadImg( response.data.posterId );
            }
            } 
        } catch(err) {
          setRequestError(err.message);
          console.log(requestError);
        }}
    }
    async function uploadImg( id ){
        try{
            console.log("api/v1/images/poster/"+auth.userId+"/"+id+"/upload")
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
    //============================= POSTER UPDATE - LOAD POSTER DATA FUNCTIONALITY =======================
    useEffect(() => {
        if ( id ){ 
        async function loadPoster() {
            try{
                const response = await axios.get(posterInfoURL);
                
                console.log(response.data)

                setPostName(response.data.postName);

                setPosterDescription(response.data.description);

                setPrice(response.data.price);
                setPriceValid(true);
            
                setPhoneNumber(response.data.phoneNumber);
                setPhoneNumberValid(true);
    
                setCategoryA(response.data.categoryA);
                setCategoryAValid(CATEGORY_REGEX.test(response.data.categoryA));

                setCategoryB(response.data.categoryB);
                setCategoryBValid(CATEGORY_REGEX.test(response.data.categoryB)); 

                setCity(response.data.city);
                setCityValid(CITY_REGEX.test(response.data.city));

                setWebsite(response.data.website);
                setVideoLink(response.data.videoLink);

                setPosterEdit(response.data);
                // setPosterEditImageCount(Object.keys(posterEdit.images).length); //sets how many times should useEffect owrk to lead images
                
                const loadImageFromBackend = async () => {
                    if (id) {
                      try {
                        getImgs();             
                      } catch (err) {
                        console.log(err);
                      }
                    }
                  };
                  loadImageFromBackend();
                  timerImgRed();
            } catch (error){
                console.log("Some of poster info was not loaded")
            }
        }
        loadPoster();
  
       }
      },[])

    //================= Setting all data and select windows ==============================
    const handleNameChange = (e) => {
        
        setPostName(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        
        setPosterDescription(e.target.value);
    }
    const handlePriceChange = (e) =>{
        setPriceValid(PRICE_REGEX.test(e.target.value));
        setPrice(e.target.value);
        console.log(e.target.value)   
    }
      // ======= event watch makes sure that once the primary category is selected, a selection for secondary will appear
    const handleSelectA = (e) => {
        setCategoryAValid(CATEGORY_REGEX.test(e.target.value));
        //when not using local simple variable the code displays previous selection, (with const and setConst it works too slow)
        let selection = catA.indexOf(e.target.value)
        setTempLangString(langFileStrings[selection]);
        setCatBArray(allArrays[selection]);
        setCategoryA(e.target.value);
    }
    const handleSelectB = (e) => { //testing using temmporary variable because setCategoryB works slower thus console shows previous meaning of it
        setCategoryBValid(CATEGORY_REGEX.test(e.target.value) )
        setCategoryB(e.target.value);
    }
    const handlePhoneNumberChange = (e) => {
        setPhoneNumberValid( PHONE_REGEX.test(e.target.value) )
        setPhoneNumber(e.target.value);
    }
    const handleSelectCity = (e) => {
        setCityValid( CITY_REGEX.test(e.target.value ));
        setCity(e.target.value);
    }
    const handleWebsiteChange = (e) =>{
        setWebsite(e.target.value);
    }
    const handleVideoLinkChange = (e) => {
        setVideoLink(e.target.value);
    }
    ///////////////////////////////////////////////////////FILE INPUT HANDLING//////////////////////////////////
    const handleInputChange1 = (e) => {
        setSelectedFile1(e.target.files[0]);
    }
    const handleInputChange2 = (e) => {
        setSelectedFile2(e.target.files[0]); 
    }
    const handleInputChange3 = (e) => {
        setSelectedFile3(e.target.files[0]);
    }
    const handleInputChange4 = (e) => {
        setSelectedFile4(e.target.files[0]);
    }
    const handleInputChange5 = (e) => {
        setSelectedFile5(e.target.files[0]);
    }
    const handleInputChange6 = (e) => {
        setSelectedFile6(e.target.files[0]);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async function getImgs(){
        let imgArray = [];
        try{
            for(let i= 0 ; i < 6 ; ++i){
                try{
                    const response = await axios.get(`/api/v1/images/poster/get/${id}/${i}`,{
                        responseType: 'blob',
                    })
                    imgArray.push(response.data); 
                } catch {
                    console.log("image was not found")
                    continue
                }   
            }
            for ( let j =0; j < imgArray.length ; j++ ){
                functionalArr[j](imgArray[j]);
            }
        } catch(err) {
            console.log(err)
        }
        
    }

    ///////////////////////////////////////FIX POPPING UP NEW INPUT FIELD ////////////////////////////////////////
    const inputFIeld = ( handleInputChange, selectedFile, setSelectedFile, imgNo ) => {
        return(
        <div className="flex items-center justify-center w-full">  
            <label
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                { selectedFile ? 
                (
                <>
                    <div className="flex flex-colo items-center justify-center pt-5 pb-6  ">
                    <button onClick={() => {
                        setSelectedFile(null)
                    }}>
                        <img
                            src={ URL.createObjectURL(selectedFile) }
                            alt="Selected File Preview"
                            className=" object-contain rounded-lg h-[90px]"
                        />
                        <p className="m-2 text-xs text-gray-500 dark:text-gray-400">
                            <span className="font-semibold" >{t("uploadPosterFrame.removeImage")}</span> 
                        </p>
                    </button>
                    </div>
                </>
                ) : (
                <>
                    <div className="flex flex-col items-center justify-center z-10 pt-5 pb-6  ">
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
                        <span className="font-semibold">{t("uploadPosterFrame.uploadImageIconText")}</span>
                        <br/>
                        <span className="font-semibold">{t("uploadPosterFrame.max2Mb")}</span> 
                    </p>
                     <input type="file" className="hidden" onChange={handleInputChange} accept="image/png, image/webp, image/jpeg" />
                    </div>
                </>)}
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
                            { id ? <h1 className="text-2xl flex-rows font-bold leading-tight tracking-tight text-gray-900 md:text-2x">
                            {t("uploadPosterFrame.EditPosterText")} {postName}
                            </h1> : <h1 
                                className="text-2xl flex-rows font-bold leading-tight tracking-tight text-gray-900 md:text-2x"
                            >
                                {t("uploadPosterFrame.AddPosterText")}
                            </h1>
                            }
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                {/* ********* TITLE ******** */}
                                <div className={ id ? "hidden" : "mb-6"}>
                                    <label
                                        htmlFor="posterName"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        {t("uploadPosterFrame.titleText")}
                                    </label>
                                    <input
                                        type="text"
                                        id="posterName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={postName} 
                                        onChange={handleNameChange}
                                    />
                                    <p className={ ( !postName && submitAttempt > 0 ) ?
                                        "bg-red-500 pl-2 text-white rounded-md":"hidden" }>
                                        {t("uploadPosterFrame.titleLongerThan10Char")}
                                    </p>
                                </div>

                                {/* ********* CATEGORY A ******** */}
                                <div className={ id ? "hidden" : ""}>
                                    <label
                                        htmlFor="categoryA"
                                        onChange={handleSelectA}
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                       {t("uploadPosterFrame.firstCat")}
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
                                    <p className={ (!categoryAValid && categoryA) || (!categoryAValid && submitAttempt > 0)  ?
                                        "":"hidden" }>
                                       {t("uploadPosterFrame.1stCatMustBePicked")}
                                    </p>
                                    
                                </div>

                                {/* ********* CATEGORY B ******** */}
                                <div className={ id ? "hidden" : ""}>
                                    <label
                                        htmlFor="categoryB"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        {t("uploadPosterFrame.2ndCat")}
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
                                    <p className={ (!categoryBValid && categoryB) || ( !categoryBValid && submitAttempt > 0 )  ?
                                        "":"hidden" }>
                                        {t("uploadPosterFrame.2ndCatMustBePicked")}
                                    </p>
                                </div>

                                {/* ********* DESCRIPTION ******** */}
                                <div>
                                    <div className="mb-6 flex-rows">
                                        <textarea
                                            id="posterDescription"
                                            rows={7}
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder={t("uploadPosterFrame.descriptionPlaceHolder")}
                                            maxLength={1000}
                                            value={posterDescription} 
                                            onChange={handleDescriptionChange}
                                        />
                                    </div>
                                    <p className={  !posterDescription && submitAttempt > 0  ?
                                            "bg-red-500 rounded-md pl-2 text-white":"hidden" }>
                                            {t("uploadPosterFrame.descriptionLongerThan10Char")}
                                    </p>
                                </div>
                                {/* ********* PRICE ******** */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                       {t("uploadPosterFrame.priceText")}
                                    </label>
                                    <input
                                        type="text"
                                        id="price"
                                        step = "1"
                                        min = "0"
                                        value={price} 
                                        onChange={handlePriceChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <p className={ (!priceValid && price) || (!priceValid && submitAttempt > 0) ?
                                        "bg-red-500 pl-2 text-white rounded-md":"hidden" }>
                                        {t("uploadPosterFrame.priceMustBeWhole")}
                                    </p>
                                </div>
                                {/* ********* FILE UPLOAD ******** */}
                                <p className={ id ? "hidden" : "block mb-2 text-sm font-medium text-gray-900 dark:text-white"} >{t("uploadPosterFrame.imgUploadText")} </p>
                                { id && !imgRed && <p className="grid grid-cols-3 gap-2">{t("uploadPosterFrame.imgEditLoading")}</p>}
                                <div>   
                                <div className=  { id && !imgRed ? "hidden": "grid grid-cols-3 gap-2"} >
                                    {/* handleInputChange,  selectedFile,  setSelectedFile  */}
                                    {inputFIeld( handleInputChange1, selectedFile1, setSelectedFile1 )}
                                    {inputFIeld( handleInputChange2, selectedFile2, setSelectedFile2 )}
                                    {inputFIeld( handleInputChange3, selectedFile3, setSelectedFile3 )}
                                    {inputFIeld( handleInputChange4, selectedFile4, setSelectedFile4 )}
                                    {inputFIeld( handleInputChange5, selectedFile5, setSelectedFile5 )}
                                    {inputFIeld( handleInputChange6, selectedFile6, setSelectedFile6 )}
                                </div>
                                <p className={ !fileCheck() && submitAttempt > 0  ?
                                    "":"hidden" }
                                >
                                    {t("uploadPosterFrame.mustUpload1")}
                                </p>
                                </div>

                                {/* ********* BR ******** */}
                                {/* <hr className="h-px my-8 bg-black border-0 dark:bg-gray-700" /> */}

                                {/* ********* STATE ******** PASLEPTAS KOL NERA UPDATED */}
                                <div className="hidden">
                                    <label
                                        htmlFor="state"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        {t("uploadPosterFrame.stateText")}
                                    </label>
                                    <select
                                        id="state"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>{t("uploadPosterFrame.stateNew")}</option>
                                        <option>{t("uploadPosterFrame.stateUsed")}</option>
                                    </select>
                                    {/* Needs validation if it's goig to be used */}
                                </div>

                                {/* ********* BR ******** */}
                                {/* <hr className="h-px my-8 bg-black border-0 dark:bg-gray-700" /> */}

                                {/* ********* STATE ********  PASLEPTAS KOL NERA UPDATED*/}
                                <div className="hidden">
                                    <label
                                        htmlFor="who"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        {t("uploadPosterFrame.youAre")}
                                    </label>
                                    <select
                                        id="who"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>{t("uploadPosterFrame.private")}</option>
                                        <option>{t("uploadPosterFrame.company")}</option>
                                    </select>
                                    {/* needs validation if it's going to be used */}
                                </div>

                                {/* ********* Tel Nr *********/}
                                <div className={ id ? "hidden" : "mb-6"}>
                                    <label
                                        htmlFor="tel"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        {t("uploadPosterFrame.phoneNumberText")}
                                    </label>
                                    <div className="flex-rows">
                                        <h1>+</h1>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            maxLength={15}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={handlePhoneNumberChange}
                                        />
                                    </div>
                                    <p className={ (!phoneNumberValid && submitAttempt>0) || (!phoneNumberValid && phoneNumber) ?
                                        "":"hidden" }>
                                        {t("uploadPosterFrame.phoneNumberMustHave")}
                                    </p>  
                                </div>

                                {/* ********* City ******** */}
                                <div className={ id ? "hidden" : ""}>
                                    <label
                                        htmlFor="city"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        {t("uploadPosterFrame.cityText")}
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
                                    <p className={ (!cityValid && city) || (!cityValid && submitAttempt > 0) ?
                                        "bg-red-500 pl-2 text-white rounded-md":"hidden" }>
                                        {t("uploadPosterFrame.cityMustBePicked")}
                                    </p>
                                </div>

                                {/* ********* WEB LINK ******** */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="web"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        
                                    >
                                       {t("uploadPosterFrame.webLink")}
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
                                        {t("uploadPosterFrame.videoLink")}
                                    </label>
                                    <input
                                        type="text"
                                        id="video"
                                        onChange={handleVideoLinkChange}
                                        value={videoLink}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div className="mb-6">
                                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        {t("uploadPosterFrame.requiredFields")}
                                    </p>
                                </div>
                                { id ?
                                (<button
                                    type="submit"
                                    className="border-[2px] border-main w-full shadow-md bg-subMain hover:text-black text-text bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Save updated poster
                                </button> 
                                ) : (
                                <button
                                    type="submit"
                                    className="border-[2px] border-main w-full shadow-md bg-subMain hover:text-black text-text bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    {t("uploadPosterFrame.addButton")}
                                </button>)}
                                <p className={ requestError ? "bg-red-500 pl-2 text-white rounded-md" : "hidden"} >
                                    {t("uploadPosterFrame.errorConnecting")}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default UploadPoster
