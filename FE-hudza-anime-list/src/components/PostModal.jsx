function PostModal({handlePostData, setAdd}) {

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl flex flex-col gap-3">
                    <label className="input input-bordered flex items-center gap-2">
                        
                        <input id="postTitle" type="text" className="grow" placeholder="Judul Todo Kamu" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        
                        <input id="postTodo" type="text" className="grow" placeholder="Isi Todo Kamu" />
                    </label>
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-2">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn" onClick={()=>{setAdd(false)}}>Close</button>
                            <button className="btn" onClick={()=>{handlePostData(
                                {
                                    title:document.getElementById("postTitle").value,
                                    todo:document.getElementById("postTodo").value
                                }
                            )}}>Add</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default PostModal;