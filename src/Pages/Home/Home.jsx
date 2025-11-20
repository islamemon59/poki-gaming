import AboutInnLiv from "../../Components/AboutInnliv/AboutInnliv";
import CategoryList from "../../Components/Games/CategoryList/CategoryList";
import Games from "../../Components/Games/Games";
import useDynamicTitle from "../../Hooks/useDynamicTitle";
import Meta from "../../Components/Meta/Meta";

const Home = () => {
  useDynamicTitle("Home");
  return (
    <div>
      <Meta
        description={
          "We are obsessed with the best free online games obviously, respect the daylights out of our players, and yeah, we are not shy about ruffling a few feathers if that means making something truly epic."
        }
      />
      <div className="min-h-[calc(100vh-100px)]">
        <Games />
      </div>
      <CategoryList />
      <AboutInnLiv />
    </div>
  );
};

export default Home;
