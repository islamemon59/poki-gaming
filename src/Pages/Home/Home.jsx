import AboutInnLiv from "../../Components/AboutInnliv/AboutInnliv";
import CategoryList from "../../Components/Games/CategoryList/CategoryList";
import Games from "../../Components/Games/Games";

const Home = () => {
  return (
    <div>
      <meta name="robots" content="index, follow" />
      <div className="min-h-[calc(100vh-100px)]">
        <Games />
      </div>
      <CategoryList />
      <AboutInnLiv />
    </div>
  );
};

export default Home;
