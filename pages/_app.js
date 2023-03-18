import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Poppins } from "@next/font/google";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${pop.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
