import { createContext, useContext, useEffect, useState } from "react";


export const CardContext = createContext()

export default function CardProvider({ children }) {
    const [cardCollection, setCardCollection] = useState([
        {
            id:"1",
            image: '2.jfif',
            name: 'Baju Conan',
            description:"blablalba",
            price: 1200000,
            stock: 5
        }
        , {
            id:"2",
            image: 'anya.jpg',
            name: 'Baju Anya',
            description:"blablalba",
            price: 1200000,
            stock: 5
        }, {
            id:"3",
            image: '3.jpg',
            name: 'Baju Anime',
            description:"blablalba",
            price: 1200000,
            stock: 5
        },

    ])

    function addCardCollection(item) {
        // console.log(item)
        // return
        const temp = {
            id: item.itemId,
            image: item.itemImage,
            name: item.itemName,
            price: item.itemPrice,
            stock: item.itemStock,
        }
        const data = [...cardCollection];
        data.push(temp)
        console.log(data)

        setCardCollection([...cardCollection, temp])
    }

    function deleteCardCollection(id){
        // console.log(id)
        // return
        let temp = [...cardCollection];
        const index = temp.findIndex((e)=>{
            if(e.id == id){
                return e
            }
        })

        temp.splice(index,1)
        // console.log("ini temp", temp)
        setCardCollection(temp)
        
    }

    function editCardCollection(id,newData){
        // console.log(id,newData)
        // return
        
        let temp = [...cardCollection];
        const index = temp.findIndex((e)=>{
            if(e.id == id){
                return e
            }
        })

        const temp2 = {
            id: newData.itemId,
            image: newData.itemImage,
            name: newData.itemName,
            price: newData.itemPrice,
            stock: newData.itemStock,
        }

        temp[index] = temp2
        // console.log("ini temp", temp)
        setCardCollection(temp)
        
    }

    return <CardContext.Provider value={{
        cardCollection: cardCollection,
        addCardCollection: addCardCollection,
        deleteCardCollection:deleteCardCollection,
        editCardCollection:editCardCollection,
    }}>
        {children}
    </CardContext.Provider>
} 