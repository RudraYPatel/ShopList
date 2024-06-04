

export default function Item({name, quantity, category}) {
    return (
        <li className="p-4 bg-purple-100">
        <div className=" flex flex-col">
            <span className="font-bold text-bold">{name}</span>
            <span className="text-gray-500 text-medium">Buy {quantity}</span>
            <span className="text-orange-500 text-medium ">in {category}</span>
        </div>
    </li>
    );
}