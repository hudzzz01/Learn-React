import { useEffect, useState } from "react";
import { GetDataApi } from "../../api/api";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Cards from "./Cards";

function Home() {
    const [animes, setAnimes] = useState([]);

    async function getData(page, limit) {
        const allAnime = await GetDataApi(page, limit);
        setAnimes(allAnime.data);
    }

    useEffect(() => {
        console.log("hit Api dilakukan")
        getData(1, 10);
        return
    }, [])



    return (

        <div>
            <div id="hero"
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url('a.jpg')",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hudza Anime List</h1>
                        <p className="mb-5">
                            Selamat Datang Di Hudza Anime List, Temukan Info Anime Menarik Di sini.
                        </p>
                        <Link to="animeList" smooth={true} duration={500}>
                            <button className="btn border-t-cyan-50">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div name="animeList" className="grid grid-cols-4  gap-5 mt-5 mb-5">

                {animes ? animes.map(
                    (e, i) => (
                        <div className="">
                            <Cards key={i} anime={e} />
                        </div>
                    )
                ) : <>Gagal Ambil data</>}

            </div>






        </div>

    )
}

export default Home