import AboutInnLiv from '../../Components/AboutInnliv/AboutInnliv';
import CategoryList from '../../Components/Games/CategoryList/CategoryList';
import GameCategories from '../../Components/Games/CategoryList/CategoryList';
import Games from '../../Components/Games/Games';
import useDynamicTitle from '../../Hooks/useDynamicTitle';

const Home = () => {
    useDynamicTitle("Home");
    return (
        <div>

                <div className='min-h-[calc(100vh-100px)]'>
                    <Games/>
                </div>
                <CategoryList/>
                <AboutInnLiv/>
        </div>
    );
};

export default Home;