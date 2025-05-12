"use client";

import { useCoreContext } from "Todo/Context/AppProvider";
import Link from "next/link";
import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import styles from "Todo/styles/Navbar.module.scss";
import Login from "./Login";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { IoIosColorPalette } from "react-icons/io";
import ThemeDrawer from "Todo/theme/themeDrawer";
const Navbar = () => {
  const { mode, setMode } = useCoreContext();
  const { setTheme } = useTheme();
  const [showModel, setShowModal] = useState<boolean>(false);
  const [openThemeDrawer, setOpenThemeDrawer] = useState<boolean>(false);
  console.log({modeInNavbar:mode})
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      setTheme("dark");
    } else {
      setMode("light");
      setTheme("light");
    }
  };
  const CLoseModal = () => {
    return setShowModal(false);
  };

  return (
    <React.Fragment>
      <nav
        className={`${styles.navbar} ${
          mode === "dark" ? styles.backColor : ""
        }`}
      >
        <ul className={styles.navList}>
          <div className={styles.navLink}>
            {/* <li className={styles.navItem}><h3>ToDo</h3></li> */}
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="task">Tasks</Link>
            </li>
            {/* <li className={styles.navItem}>DropDown</li> */}
          </div>
          <div className={styles.navLink}>
            <li className={styles.navItem}>
              <button
                className={`${styles.btnNone} ${
                  mode === "dark" ? styles.btnBlack : ""
                }`}
                onClick={toggleMode}
              >
                {mode === "light" ? (
                  <MdLightMode size={25} />
                ) : (
                  <MdDarkMode size={25} />
                )}
              </button>
            </li>
            <li className={styles.navItem}>
              <Button size={"icon"} variant={"ghost"} onClick={()=>setOpenThemeDrawer(true)}><IoIosColorPalette /></Button>
            </li>
            <li className={styles.navItemR}>
              <Button
                onClick={() => setShowModal(true)}
                // className={styles.navButton}
              >
                Login
              </Button>
            </li>
          </div>
        </ul>
      </nav>
      {showModel && <Login CLoseModal={CLoseModal} modal={showModel} />}
      {openThemeDrawer && (
        <ThemeDrawer open={openThemeDrawer} setOpen={setOpenThemeDrawer} />
      )}
    </React.Fragment>
  );
};

export default Navbar;
