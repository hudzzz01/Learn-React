
import { useContext, useEffect, useState } from "react";
import Card from "../Card";
import FormAddItem from "../FormAddItem";
import { CardContext } from "../CardProvider";
import ModalDelete from "../ModalDetele";
import FormEditItem from "../FormEditItem";
import { Link } from "react-router-dom";

function AdminView({setLogin}) {
    const { cardCollection, deleteCardCollection } = useContext(CardContext)
    const [selectedCard, setSelectedCard] = useState({})
    const [dataCard, setDataCard] = useState(cardCollection);

    function handleLogout(){
        localStorage.clear()
        console.log(localStorage)
        setLogin(false);
    }


    function hanldeClickCard() {


        console.log("ini click card");
    }

    function handleClickEdit(e) {
        setSelectedCard(e)
        document.getElementById('modal_edit').showModal()
    }

    function handleClickDelete(e) {
        setSelectedCard(e)
        document.getElementById('modal_delete').showModal()
    }
    useEffect(() => {
        console.log("card berubah")
        console.log(cardCollection)
        setDataCard(cardCollection)
    }, [cardCollection])
    return (
        <div className="flex flex-col">
            <Link className="bg-red-400 rounded-sm p-5 text-slate-100 text-center" to="/login" onClick={handleLogout}> Logout </Link>
            {/* Ini halaman admin */}
            <button onClick={() => {
                document.getElementById('my_input').showModal()
            }}
                className="bg-slate-500 rounded-sm p-5 text-slate-100"
            >Add Item</button>



            <div className="flex gap-2 flex-wrap justify-center">
                {dataCard.map((e) => (
                    <div className="bg-slate-200 p-5 rounded-xl mt-3">
                        <div className="flex flex-row justify-between pl-6 pr-6 w-full">
                            <div onClick={() => handleClickEdit(e)} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                            </div>
                            <div onClick={() => handleClickDelete(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            </div>
                        </div>
                        <Card data={e} />
                        <ModalDelete selectedCard={selectedCard} deleteCardCollection={deleteCardCollection} />
                    </div>
                ))}
            </div>
            <FormAddItem />
            <FormEditItem selectedCard={selectedCard} />

        </div>
    )

}
export default AdminView; 