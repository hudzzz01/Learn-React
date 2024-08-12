import { useContext, useEffect, useState } from "react";
import { CardContext } from "./CardProvider";
import { useNavigate } from "react-router-dom";

function FormEditItem({ selectedCard }) {
    const { addCardCollection, cardCollection, editCardCollection } = useContext(CardContext);
    const nav = useNavigate()

    const [imagePreview, setImagePreview] = useState(null);
    const [item, setItem] = useState({})
    const [click, setClick] = useState(0)
    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    }
    function handleClickInsertEdit() {
        const temp = {
            itemId: document.getElementById("item-id-e").value,
            itemName: document.getElementById("item-name-e").value,
            itemPrice: document.getElementById("item-price-e").value,
            itemImage: imagePreview,
            itemStock: document.getElementById("item-stock-e").value,
        }

        const myFormEdit = document.getElementById('myFormEdit');




        let count = click
        setClick(count + 1)

        // console.log(temp)
        editCardCollection(selectedCard.id, temp)
        console.log(cardCollection)
        setImagePreview('');
        // nav("/")
        myFormEdit.reset();
    }

    // useEffect(() => {
    //     document.getElementById("item-id-e").defaultValue = "";
    //     document.getElementById("item-name-e").defaultValue = "";
    //     document.getElementById("item-price-e").defaultValue = "";
    //     document.getElementById("item-image-e").defaultValue = "";
    //     document.getElementById("item-stock-e").defaultValue = "";

    // }, [click])



    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="modal_edit" className="modal">
                {/* {console.log("selectedcard",selectedCard)} */}
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action flex justify-center">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                                </svg>


                                <input id="item-id-e" type="text" className="grow" placeholder="id" defaultValue={selectedCard.id} />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                                </svg>

                                <input id="item-name-e" type="text" className="grow" placeholder="Name" defaultValue={selectedCard.name} />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>


                                <input id="item-price-e" type="text" className="grow" placeholder="Price" defaultValue={selectedCard.price} />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                </svg>


                                <input id="item-stock-e" type="text" className="grow" placeholder="Stock" defaultValue={selectedCard.stock} />



                            </label>

                            {/* <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>


                                <input id="item-image-e" type="text" className="grow" placeholder="Image link" defaultValue={selectedCard.image} />
                            </label> */}

                            <label className="input input-bordered flex items-center gap-2">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg> */}
                                <form id="myFormEdit">

                                <input onChange={handleImageChange} id="item-image-e" type="file" defaultValue="" className="file-input w-full max-w-xs" />
                                </form>
                                {/* <input id="item-image" type="text" className="grow" placeholder="Image link" /> */}
                            </label>

                            <div className="flex justify-center gap-3 mt-5">

                                <button className="btn" onClick={handleClickInsertEdit}>Insert</button>
                                <button className="btn">Close</button>
                            </div>

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default FormEditItem;