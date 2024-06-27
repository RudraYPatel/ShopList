"use client"

import React, { useState, useEffect } from 'react';
import itemsData from './items.json';
import ItemList from "../week-6/item-list";
import NewItem from "./new-item";


export default function Page() {
    const [items, setItems] = useState(
        itemsData.map((item) => ({ ...item }))
    );

    const [isNewItemFormOpen, setNewItemFormOpen] = useState(false);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const openNewItemForm = () => setNewItemFormOpen(true);
    const closeNewItemForm = () => setNewItemFormOpen(false);
    return (
        <main className="h-screen-300vh bg-lightgray">
        <h1 className="text-4xl font-bold ml-20 text-emerald-800">SHOPPING LIST</h1>
        <div>
            <button className='ml-32 mt-5 mb-5 rounded-md bg-black text-white h-10 w-40' onClick={openNewItemForm}>Add New Item</button>
        </div>
        {
            isNewItemFormOpen && (
                <NewItem closeFormFunc={closeNewItemForm} onAddItem={handleAddItem} />
            )
        }
        <ItemList items={items} />
    </main>
    );
}
