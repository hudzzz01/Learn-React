import { useState } from "react";
import { NavLink } from "react-router-dom";

function Cards({ anime }) {
    const [animeId, setAnimeId] = useState(`anime/${anime.mal_id}`);
    const [id, setId] = useState("card-" + anime.mal_id)

    function hideText() {
        // console.log("hide"+id)
        const card = document.getElementById(id);
        card.style.opacity = "0.5";

    }

    function showText() {
        // console.log("show"+id)
        const card = document.getElementById(id);
        card.style.opacity = "1";
    }

    return (

        <div>
            <NavLink
            
                to={animeId}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                <div className="" onMouseLeave={() => { showText() }} onMouseEnter={() => { hideText() }} >

                    <div className=" overflow-hidden bg-black">
                        <img className="w-full h-full object-cover" src={anime.images.jpg.image_url} alt="Anime" />

                    </div>
                    <div id={id} className="z-20 p-1 bg-black" >
                        <p className=" text-white">{anime.title}</p>
                    </div>
                </div>


            </NavLink>
        </div>




    )
}

export default Cards;