import { useContext, useEffect, useState } from "react";
import { BagContext } from "./BagProvider";



function Bag({ bagCollection }) {
    const [total,setTotal] = useState(0);
    const [dataKeranjang, setDataKeranjang] = useState([]);
    const {deleteCountSpecificItem, addCountSpecificItem} = useContext(BagContext);

    useEffect(() => {
        if (bagCollection) {
            console.log(bagCollection)
            setDataKeranjang([...bagCollection])

            let totalPrice = 0;
            bagCollection.forEach(e => {
                console.log("ini bag count",e.count)
                console.log("ini bag price",e.price)
                const subTotal = e.price * e.count;
                totalPrice += subTotal
            });
            setTotal(totalPrice)
        }
    }, [bagCollection])

    function handleClickBayar(){
        let nomorWa = '62895366975992'
        let string = "Halo pak syahid saya mau membeli baju \n\n";
        const temp = [...bagCollection];
        temp.forEach((e,i) => {
            const subTotal = e.price * e.count
            string += `${i+1}. ${e.name} Rp.${e.price} sebanyak ${e.count} = ${subTotal}\n\n`
        });

        string += `\n\ntotal harga seluruhnya adalah ${total}`
        

        window.open(`https://wa.me/${nomorWa}?text=${string}`)
    }

    function handleClickDelete(id){
        // console.log(id)
        deleteCountSpecificItem(id)
    }

    function handleAddClick(index,count){
        console.log("ini add", index, count)
        if(count < bagCollection[index].stock){
            let temp = count + 1;
            addCountSpecificItem(index,temp);
        }
    }

    function handleMinusClick(index,count){
        if(count > 1){
            let temp = count - 1;
            addCountSpecificItem(index,temp);
        }
        console.log("ini minus", index, count)
    }

    return (
        <div id="bag-user" className="w-96 h-96 bg-slate-50 z-10 absolute right-0 top-16 mt-4 rounded flex flex-col">
            {/* loop here */}
            
            {dataKeranjang.length > 0 ?

                <div className="w-full justify-center">
                    <div className="w-full h-80 overflow-y-scroll">
                        {dataKeranjang.map((e,i) => (
                            <div className="bg-slate-200 flex rounded-xl relative left-5 w-80 pt-5 pb-5 justify-center mt-2" >
                                <div className="flex w-full justify-between">
                                    <div>
                                        <img src={e.image} alt={e.image} className="ml-5 rounded w-20 h-20 object-cover" />
                                    </div>
                                    <div className="flex flex-col w-full h-full">
                                        <div className="flex flex-col w-ful">
                                            <div className="flex pl-10 font-bold text-sm">
                                                <p>{e.name}</p>
                                            </div>
                                            <div className="flex pl-10 font-semibold text-m">
                                                <p>Rp. </p>
                                                <p>{e.price}</p>
                                            </div>
                                        </div>
                                        <div className="ml-10 flex gap-2">
                                            <div onClick={()=>handleMinusClick(i,e.count)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </div>
                                            <div>{e.count}</div>
                                            <div onClick={()=>handleAddClick(i,e.count)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex flex-col gap-1">
                                        {/* <div className="flex mr-4 flex-col bg-slate-200 p-5 justify-center rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} stroke="currentColor" className="size-4 -scale-x-100">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                            </svg>
                                        </div> */}
                                        <div onClick={()=> handleClickDelete(e.id)} className="flex mr-4 flex-col bg-slate-200 p-5 justify-center rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="flex pl-12 pr-5 mt-3 w-full justify-between">
                        <div className="flex w-24 text-blue-950 text-sm">
                            <div className="flex justify-center gap-3 w-full text-center">
                                <p className="font-semibold">Total </p>
                                <p>:</p>
                                <p>Rp.{total}</p>
                            </div>
                        </div>
                        <div onClick={handleClickBayar} className="w-full flex justify-end" >
                            <div className="bg-green-700 w-1/2 text-center text-slate-50 p-1 rounded-lg">Bayar</div>
                        </div>
                    </div>
                </div>
                : <></>
            }







        </div>
    )
}

export default Bag;