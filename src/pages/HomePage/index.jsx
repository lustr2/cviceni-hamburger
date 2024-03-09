import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(true);
  const [pageTitle, setPageTitle] = useState('Domů');

  const handleClickMenu = () =>{
    setMenuOpened(!menuOpened);
  }

  const handleSelectItem = (page) => {
    setMenuOpened(!menuOpened);
    setPageTitle(page);
  }

  return (
    <>
      <header>
        <div className={menuOpened ? "menu" : "menu menu--closed"}>
          <button className={menuOpened ? "menu__btn" : "menu__btn--closed"} onClick={handleClickMenu}></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem} />
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem text="Náš tým" onSelect={handleSelectItem} />
            <MenuItem text="Blog" onSelect={handleSelectItem} />
            <MenuItem text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};
