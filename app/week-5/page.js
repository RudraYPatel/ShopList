import ItemList from "../week-5/item-list";


export default function Page() {
    return (
        <main className="h-screen-300vh bg-lightgray">
            <h1 className="text-4xl font-bold ml-20 text-emerald-800">SHOPPING LIST</h1>
            <ItemList />
        </main>
    );
}