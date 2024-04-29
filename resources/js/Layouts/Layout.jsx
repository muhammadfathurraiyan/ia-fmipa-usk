import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
export default function Layout({ auth, children }) {
    return (
        <>
            <Header auth={auth} />
            <main className="px-24 max-lg:px-4 text-neutral-950">
                {children}
            </main>
            <Footer />
        </>
    );
}
