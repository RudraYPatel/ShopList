import ItemList from "../week-3/item-list";


export default function Page() {
    return (
        <main className="h-screen-300vh bg-black">
            <h1 className="text-3xl font-bold mb-10 text-purple-800">SHOPPING LIST</h1>
            <ItemList  />
        </main>
    );
}