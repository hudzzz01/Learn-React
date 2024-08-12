import { createContext, useState } from "react";


export const BagContext = createContext();

export default function BagProvider({children}) { 
    const [bagCollection, setBagCollection] = useState([

    ])

    function addCountSpecificItem(index,count){
        let temp = [...bagCollection];
        temp[index].count = count;

        setBagCollection(temp);
    }
    



    function deleteCountSpecificItem(id){
        const temp = [...bagCollection];
        const index = temp.findIndex((e)=>{
            if(e.id == id){
                return e
            }
        })

        temp.splice(index,1)
        console.log("ini temp", temp)
        setBagCollection(temp)
    }

    function addBagCollection(item) {
        
        const temp = item
        // console.log(temp)

        
        const data = [...bagCollection];
        data.push(temp)
        // console.log(data)

        setBagCollection([...bagCollection, temp])
        // console.log(bagCollection)
    }

    return(
        <BagContext.Provider value={{ 
            bagCollection:bagCollection,
            addBagCollection:addBagCollection,
            addCountSpecificItem:addCountSpecificItem,
            deleteCountSpecificItem:deleteCountSpecificItem,
        }}>
            {children}
        </BagContext.Provider>
    )
} 


