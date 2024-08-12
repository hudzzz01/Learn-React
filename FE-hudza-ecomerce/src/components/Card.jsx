function Card({data,setSelectedCard}) {
  function handleClickDetail(){
    setSelectedCard(data);
    console.log(data)
    document.getElementById('modal-detail-card').showModal()
  }
  return (
    <div className="w-80  flex flex-col h-80 mt-3">
      <img src={data.image} alt={data.image} className="object-fill w-full h-full bg-slate-200 rounded-3xl" />
      
      <div className="bg-slate-50 flex rounded-xl relative left-5 bottom-28 w-72 pt-5 pb-5 justify-center" >
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-ful">
            <div className="flex pl-10 font-bold text-xl">
              <p>{data.name}</p>
            </div>
            <div className="flex pl-10 font-semibold text-lg">
              <p>Rp. </p>
              <p>{data.price}</p>
            </div>
          </div>
          <div className="">
            <div onClick={handleClickDetail} className="flex h-16 w-16 mr-4 flex-col bg-slate-200 p-5 justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} stroke="currentColor" className="size-6 -scale-x-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  )


  // return(
  //     <div className="card bg-base-100 w-96 shadow-xl">
  //     <figure>
  //       <img
  //         src={image}
  //         alt="Shoes" />
  //     </figure>
  //     <div className="card-body">
  //       <h2 className="card-title">{name}</h2>
  //       <p>Price : {price}</p>
  //       <p>Stock : {stock}</p>
  //       <div className="card-actions justify-end">
  //         <button className="btn btn-primary">Buy Now</button>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Card;