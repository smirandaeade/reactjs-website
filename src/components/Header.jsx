import VideoBg from "./VideoBg"
import Navbar from "./Navbar";
import HeaderIntro from "./HeaderIntro";

const Header = (prop) => {

    return (
        <div id="inicio">
            <VideoBg />
            <Navbar />
            <HeaderIntro showUnderscore={prop.showUnderscore} setShowUnderscore={prop.setShowUnderscore}/>
        </div>
    )
}

export default Header;