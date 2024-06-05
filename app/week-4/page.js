import NewItem from "./new-item";


export default function Page() {
    const mainStyles=" container-lg bg-black h-screen"
    return(
        <main className={mainStyles}>
            <NewItem />
        </main>
    );
}