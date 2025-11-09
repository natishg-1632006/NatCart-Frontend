import React, { createContext, useState } from 'react'

export const AppContext=createContext();

export const AppContextProvider=(props)=>{
    const [addItems,setAddItems]=useState([]);

    const removeItem=(id)=>{
        setAddItems((prev)=>prev.filter((item)=>item._id!=id))
    }

    const updateItem=(id,quantity,stock)=>{
        if(quantity<=0){
            removeItem(id);
        }
        else if(quantity>stock){
            setAddItems((prev=>prev.map((item)=>item._id==id?{...item,stock}:item)))
        }
        else{
            setAddItems((prev=>prev.map((item)=>item._id==id?{...item,quantity}:item)))
        }
    }
    
    return(
        <AppContext.Provider value={{addItems,setAddItems,updateItem,removeItem}}>
            {props.children}
        </AppContext.Provider>
    )
}
