import Footer from "./Footer";
import Header from "./Header";
import { Poppins } from "@next/font/google"

const pop = Poppins({subsets: ['latin'], weight: ['300','400','500','600']})

export default function Layout({ children }) {
    return (
        <div className={`${pop.className}`}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}