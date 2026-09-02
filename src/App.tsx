import "./App.css";
// import WelcomeCard from "./WelcomeCard";
// import Footer from "./Footer";
// import ProfileCard from "./ProfileCard";
// import ErrorFix from "./ErrorFix";
import ProductCard from "./ProductCard";
export default function App() {
  return (
    <>
      <ProductCard productName="Android" price={15000}></ProductCard>
      <ProductCard productName="Laptop" price={50000}></ProductCard>
      {/* <ErrorFix></ErrorFix> */}
      {/* <ProfileCard name="Alauddin" age={29} favHobby="Swimming"></ProfileCard> */}
      {/*<ProfileCard name="Salahuddin" age={age} favHobby="Cycling"></ProfileCard> */}
      {/*<WelcomeCard></WelcomeCard>
      <Footer></Footer> */}
    </>
  );
}
