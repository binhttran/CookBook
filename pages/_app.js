import "@/styles/globals.css";
import SignIn from "./auth/signin";


export default function App({ Component, pageProps }) {
  return(
    <>
      <SignIn/>
      <Component {...pageProps} />;
    </>
 
  ) 
}
