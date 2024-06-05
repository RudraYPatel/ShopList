"use client"

import { useState } from "react"

export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        
        event.preventDefault();
        
        let item = {
            itemName: name,
            itemQuantity: quantity,
            itemCategory: category,
        };
        
        console.log(item);
        
        alert(`Added item: ${item.itemName}, quantity: ${item.itemQuantity}, category: ${item.itemCategory}`);

        setName("");
        setQuantity("1");
        setCategory("produce");
    }

    return(
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        placeholder="Item Name"
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        id="quantity" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                    />
                </div>
                <div>
                    <select 
                        id="category" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                        <option value="bakery">Bakery</option>
                        <option value="beverages">Beverages</option>
                        <option value="frozen">Frozen</option>
                        <option value="snacks">Snacks</option>
                    </select>
                </div>
                <button type="submit">Add Item</button>
            </form>
        </main>
    );
}