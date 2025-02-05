import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { Context } from '../../Context/AppProvider';
import styles from '../Styles/Navbar.module.scss';
import Login from './Login';

const Navbar = () => {
  const { mode, setMode } = useContext(Context);
  const [showModel,setShowModal]=useState(false)

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  const CLoseModal=()=>{
    return setShowModal(false)
  }

  
  return (
    <React.Fragment>
      <nav className={`${styles.navbar} ${mode === 'dark' ? styles.backColor : ''}`}>
        <ul className={styles.navList}>
          <div className={styles.navLink}>
            {/* <li className={styles.navItem}><h3>ToDo</h3></li> */}
            <li className={styles.navItem}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="task">Tasks</NavLink>
            </li>
            {/* <li className={styles.navItem}>DropDown</li> */}
          </div>
          <div className={styles.navLink}>
            <li className={styles.navItem}>
              <button className={`${styles.btnNone} ${mode === 'dark' ?styles.btnBlack:""}`} onClick={toggleMode}>
                {mode === 'light' ? <LightModeIcon /> : <BedtimeIcon />}
              </button>
            </li> 
            <li className={styles.navItemR}>
              <button  onClick={()=>setShowModal(true)} className={styles.navButton}>Login

              </button>
            </li>
          </div>
        </ul>
      </nav>
      {showModel && <Login CLoseModal={CLoseModal} modal={showModel}/>}
    </React.Fragment>
  );
};

export default Navbar;
