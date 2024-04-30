import "./Navbar.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SearchBar from "../SearchBar/SearchBar";
import { ShopContext } from "../../../context/ShopContext";

function Navbar() {

  const {countCart} = useContext(ShopContext)
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <nav className="navigation">
      <div className="navbar">
        <button
          type="button"
          label="true"
          onClick={handleToggle}
          className="bouton_menu_burger"
        >
          <img
            className="imagetraitsburger"
            src="/assets/images/icons/burger-menu.svg"
            alt="picture_not_found"
          />
        </button>
        <BurgerMenu setVisible={setVisible} visible={visible} />

        <div className="h1andButtonsContainer">
          <div className="groupeBoutonsNav">
            <div className="searchInNav">
              <SearchBar handleToggle={handleToggle}/>
            </div>

            <Link to="/categories/4">
              <img
                className="buttonsNavBar shopNavBar"
                src="../assets/images/icons/shopicon.svg"  
                alt="recherche"
              />
            </Link>

            <Link to="/favoris">
              <img
                className="buttonsNavBar"
                src="../assets/images/icons/heart4.svg"
                alt="favoris"
              />
            </Link>
            <Link to="/panier" className="test">
              <img
                className="buttonsNavBar cartButtons"
                src="../assets/images/icons/cart4.svg"
                alt="panier"
              />
                <div className="itemsCountContainer">{countCart}</div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Link to="/">
          <h1 className="h1FeetAndFun">
            feet <span className="and">&</span> fun
          </h1>
          <p className="online-shop">ONLINE SHOP</p>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
