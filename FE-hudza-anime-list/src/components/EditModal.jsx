import { useState } from "react";


function EditModal({ handleEditData, selectedData, setSelectedData }) {




    const handleClickUpdate = (selectedData) => {

        console.log(selectedData)

        


        handleEditData(selectedData)
    }

    const handleOnChange = (e) => {
        let newData = selectedData

        if (e.id === "editTitle") {
            newData.title = e.value

        } else if (e.id === "editTodo") {
            newData.todo = e.value
        }

        setSelectedData(newData)

    }



    return (
        <div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box w-11/12 max-w-5xl flex flex-col gap-3">
                    EDIT MODAL
                    

                    <label className="input input-bordered flex items-center gap-2">
                        <input id="editTitle" onChange={(e) => handleOnChange(e.target)} type="text" placeholder="Judul Todo Kamu" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">

                        <input id="editTodo" onChange={(e) => handleOnChange(e.target)} type="text"  placeholder="Isi Todo Kamu" />
                    </label>
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-2">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                            <button className="btn" onClick={() => handleClickUpdate(selectedData)}>Update</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default EditModal;