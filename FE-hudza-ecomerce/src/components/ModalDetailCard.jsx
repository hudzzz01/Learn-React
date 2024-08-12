import { useContext, useEffect, useState } from "react"
import { BagContext } from "./BagProvider";

export default function ModalDetailCard({ selectedCard }) {
    

    const { bagCollection, addBagCollection, addCountSpecificItem } = useContext(BagContext);
    const [count, setCount] = useState(1);

    useEffect(()=>{
        const id = selectedCard.id
        const items = [...bagCollection];
        // console.log("ini items use effect",items)
        // return

        const index = items.findIndex((i)=>{
            if(i.id === id){    
                return i
            }
        })

        console.log("ini hasil find ID useEffect", index)

        if(index != -1){
            //console.log("ini item use effect",items)
            const temp = items[index].count
            // console.log("ini count use effect", temp)
            setCount(temp)
        }
        if(!selectedCard.count){
            setCount(1);
        }

    },[bagCollection,selectedCard])
    function handlePlusClick() {
        if (count < selectedCard.stock) {
            let temp = count + 1;
            setCount(temp);
        }
    }
    function handleMinusClick() {
        if (count > 1) {
            let temp = count - 1;
            setCount(temp);
        }
    }
    function hanldeClickAddToBag() {
        const buttonCloseModal = document.getElementById("close-modal");
        buttonCloseModal.click()

        // console.log("ini bag collection", bagCollection)
    
        const isAddedIndex = [...bagCollection].findIndex((i) => {
            // console.log(i.id,"selected darc",selectedCard.id)
            if (i.id == selectedCard.id) {
                return i
            }
        })
        console.log(isAddedIndex)
        if (isAddedIndex == -1) {

            const item = selectedCard;
            item.count = count;
            console.log("ga ketemu", item)
            addBagCollection(item)



            return

        }

        console.log("Ketemu")
        console.log(isAddedIndex,count)

        addCountSpecificItem(isAddedIndex,count);






    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => }>open modal</button> */}

            <dialog id="modal-detail-card" className="modal">
                <div className="modal-box flex justify-center gap-4 ">
                    <img className="w-1/2 h-96 object-cover" src={selectedCard.image} alt="" />
                    <div className="w-full h-96">
                        <div className="flex flex-col mt-2 h-full gap-4 text-left font-semibold text-xm">

                            <p>{selectedCard.name}</p>
                            <p>{selectedCard.description}</p>
                            <p>Rp.{selectedCard.price}</p>
                            <p>stock {selectedCard.stock}</p>
                            <div className="flex gap-3">
                                <div onClick={handleMinusClick} > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                </div>
                                <div> {count} </div>

                                <div onClick={handlePlusClick}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                </div>
                            </div>
                            <div className="mt-10">
                                <div className="flex gap-2">
                                    <div className="bg-black text-slate-50 rounded-md text-center text-wrap font-extralight text-md p-3"> Buy Now </div>
                                    <div onClick={hanldeClickAddToBag} className="bg-black text-slate-50 rounded-md text-center text-wrap font-extralight text-md p-3"> Masukan Keranjang </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form method="dialog"  className="modal-backdrop">
                    <button id="close-modal">close</button>
                </form>
            </dialog>
        </div>
    )
}