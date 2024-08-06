import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GetAnimeApiById } from "../../api/api";
function DetailAnime() {
    const [animeData2,setAnimeData2] = useState([]);

    const [title, setTitle] = useState("");
    const [rank, setRank] = useState("");
    const [rating, setRating] = useState("");
    const [statuss, setStatuss] = useState("");
    const [score, setScore] = useState("");
    const [episode, setEpisode] = useState("");
    const [genre, setGenre] = useState("");
    const [sinopsis, setSinopsis] = useState("");
    const [imageUrl, setImageUrl] = useState();
    const [animeData, setAnimeData] = useState();
    const { id } = useParams()
    async function getAnimeDataById(id) {
        const anime = await GetAnimeApiById(id);

        console.log(anime);

        setAnimeData2(anime.data);

        setImageUrl(anime.data.images.jpg.large_image_url)
        setTitle(anime.data.title);
        setSinopsis(anime.data.synopsis)
        setStatuss(anime.data.status)
        setScore(anime.data.score)
        setEpisode(anime.data.episodes)
        setAnimeData(anime.data)
        setRating(anime.data.rating);
        setRank(anime.data.rank)

        let textGenre = "";
        const temp = anime.data.genres

        temp.forEach(e => {
            textGenre += `${e.name} `
        });
        
        setGenre(textGenre)

    
    }
    
    useEffect(() => {
        getAnimeDataById(id)
    }, [])




    return (
        <div>
            <div className="fixed z-50">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }


                >
                    <button className="ml-10 mt-10 btn btn-neutral bg-gray-700 w-20 h-20 rounded-full" >

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>


                    </button>
                </NavLink>
            </div>



            <div className="flex flex-row p-16">
                {console.log(animeData2, 'ini data')}
                <img className="rounded w-1/2 h-full object-cover " src={animeData2?.images?.jpg?.large_image_url} alt="" />
                <div className="ml-3" >
                    <p className="text-6xl text-slate-500">{title}</p>
                    <p className="w-full h-3 mt-2 mb-8 bg-slate-500 rounded-lg"></p>
                    <p className="mb-3 text-slate-600">Synopsis : </p>
                    <p className="text-justify text-slate-600">{sinopsis}</p>
                    <p className="w-full h-3 mt-2 mb-8 bg-slate-500 rounded-lg"></p>
                    {/* {console.log(animeData)} */}
                    <div className="flex flex-row gap-5 justify-start">
                        <div>
                            <p>Rank </p>
                            <p>Score </p>
                            <p>Status </p>
                            <p>Rating </p>
                            <p>Episode </p>
                            <p>Genre </p>
                        </div>
                        <div>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>

                        </div>
                        <div>
                            {/* {console.log(rank,score,statuss,rating,episode)} */}
                            <p> {rank} </p>
                            <p> {score} </p>
                            <p> {statuss} </p>
                            <p> {rating} </p>
                            <p> {episode} </p>
                            <p> {genre}</p>
                            
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default DetailAnime;