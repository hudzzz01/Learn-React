function ModalDelete({selectedCard,deleteCardCollection}) {

    function handleClickYes(){
        const temp = selectedCard;
        console.log(temp)
        deleteCardCollection(selectedCard.id);
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('modal_delete').showModal()}>open modal</button> */}
            <dialog id="modal_delete" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Serius mau hapus ?</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-3">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={handleClickYes} className="btn">Yes</button>
                            <button className="btn">No</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
export default ModalDelete;