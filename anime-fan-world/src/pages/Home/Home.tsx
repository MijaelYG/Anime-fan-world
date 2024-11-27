import { useEffect } from "react";
import Popularanime from "../../components/Popularanime"
const Home = () => {
  const tokencod = localStorage.getItem("token");
  useEffect(() => {
    console.log(tokencod);
  }, []);
  return (
    <Popularanime></Popularanime>
  )
}

export default Home
