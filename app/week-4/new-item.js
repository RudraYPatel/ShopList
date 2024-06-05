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
                        className="m-5 border-4 border-cyan-400"
                        type="text" 
                        id="name" 
                        value={name} 
                        placeholder="Item Name"
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <input
                        className="m-5 border-4 border-cyan-400" 
                        type="number" 
                        id="quantity"
                        min="0" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                    />
                </div>
                <div>
                    <select 
                        className="m-5 border-4 border-cyan-400"
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
                <button className="p-4 bg-white rounded-[10px] mt-5" type="submit">Add Item</button>
            </form>
        </main>
    );
}