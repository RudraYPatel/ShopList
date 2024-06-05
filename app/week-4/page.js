import NewItem from "./new-item";


export default function Page() {
    const mainStyles=" container-lg bg-teal-800 h-screen text-center text-black"
    return(
        <main className={mainStyles}>
            <NewItem />
        </main>
    );
}