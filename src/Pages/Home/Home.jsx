import MainCompo from "./Main/MainCompo";
import OurDoctor from "./OurDoctor/OurDoctor";
import Review from "./Review/Review";
import Time from "./Time/Time";

const Home = () => {
    return (
        <div>
            <MainCompo></MainCompo>
            <Time></Time>
            <OurDoctor></OurDoctor>
        </div>
    );
};

export default Home;