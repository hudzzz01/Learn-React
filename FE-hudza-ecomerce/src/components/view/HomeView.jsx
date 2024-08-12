import { useContext, useState } from "react";
import './css/homeView.css'
import { CardContext } from "../CardProvider";
import Card from "../Card";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';

import ModalDetailCard from "../ModalDetailCard";


function HomeView() {

    const [heroIndex, setHeroIndex] = useState(0);
    const [selectedCard, setSelectedCard] = useState({});
    const { cardCollection, addCardCollection } = useContext(CardContext);



    const [heroItems, setHeroItems] = useState(
        [...cardCollection]
    )



    const [product, setProduct] = useState([
        ...cardCollection
    ])

    console.log(product)
    function handleClickNextheroItem(e) {
        let index = heroIndex;
        index += 1;
        if (index > heroItems.length - 1) {
            index -= heroItems.length;
        }
        console.log(index)
        setHeroIndex(index)
    }

    function handleClickPrevHeroItem(e) {
        let index = heroIndex;
        index -= 1;
        if (index < 0) {
            index += heroItems.length;
        }
        console.log(index)
        setHeroIndex(index)
    }

    function handleClickShop() {
        //..
    }

    return (
        <div>
            <div className="w-full">
                <div id="hero-home" className="w-full bg-slate-50">
                    <div className="carousel w-full">
                        <div id="hero-home" className="w-full">
                            <div className="slide overflow-hidden">
                                <img src={heroItems[heroIndex].image} alt="" className="object-cover w-full rounded-3xl" style={{ height: "550px" }} />
                                <div className="hero-button-position w-24 rounded flex justify-center gap-2">
                                    {/* previus hero item button */}
                                    <div onClick={(e) => handleClickPrevHeroItem(e)} className="hero-button rounded-full w-10 h-10 bg-slate-50 flex flex-col justify-center p-2" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                        </svg>
                                    </div>
                                    {/* next hero item button */}
                                    <div onClick={(e) => handleClickNextheroItem(e)} className="hero-button rounded-full w-10 h-10 bg-slate-50 flex flex-col justify-center p-2" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 -scale-x-100">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>
                                <div id="hero-button-star-shop" className="flex justify-center gap-1" onClick={handleClickShop}>
                                    <div className="bg-slate-50 rounded-full w-40 h-10 flex flex-col justify-center ">
                                        <Link to="top-fashion" smooth={true} duration={500}> 
                                            <p className="text-center font-bold">Start Shoping</p>
                                        </Link>
                                    </div>
                                    <div className="bg-slate-50 w-10 h-10 rounded-full p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6 -scale-x-100">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center bg-slate-50 h-24">
                    <div className="font-semibold text-4xl text-slate-800 w-96 text-center">
                        Fashion And Offer For Evrybody
                    </div>

                </div>
                <div id="top-fashion"  className="flex gap-2 flex-wrap justify-center bg-slate-50">
                    {/* {console.log(cardCollection)} */}

                    {
                        product.map((data) => (
                            <Card data={data} setSelectedCard={setSelectedCard} />
                        ))
                    }
                </div>
                <ModalDetailCard selectedCard={selectedCard} />
            </div>

        </div>
    )
}

export default HomeView;