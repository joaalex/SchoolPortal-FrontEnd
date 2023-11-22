
import Footer from "./shared/Footer";
import Nav from "./shared/Nav";

const Container = ({children})=>{
  return(
    <>
      <Nav/>
        {children}
      <Footer/>
    </>
  )
};
export default Container