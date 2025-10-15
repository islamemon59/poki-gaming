import CategoryList from '../../Components/Games/CategoryList/CategoryList';
import GameCategories from '../../Components/Games/CategoryList/CategoryList';
import Games from '../../Components/Games/Games';

const Home = () => {
    return (
        <div>

                <div className='min-h-[calc(100vh-100px)]'>
                    <Games/>
                </div>
                <CategoryList/>
        </div>
    );
};

export default Home;