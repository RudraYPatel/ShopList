import React from 'react';

export default function Item({itemObj}) {
    let {name, quantity, category} = itemObj;
    return (
        <li className="p-4 bg-purple-700 ">
        <div className=" flex flex-col">
            <span className="font-bold text-bold text-orange-500 text-xl ">{name}</span>
            <span className="text-gray-100 text-medium">Buy {quantity} in {category}</span>
        </div>
    </li>
    );
}