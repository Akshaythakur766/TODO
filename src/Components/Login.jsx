import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "./Firebase";
import toast from "react-hot-toast";
import styles from "../Styles/Login.module.scss";
import image from "../../public/newpreview.webp";
import google from '../../public/google png.svg';
import facebook from '../../public/facebook.svg';
import apple from '../../public/apple_gray.svg';

const Login = ({ CLoseModal }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);

  // Firebase authentication functions
  const handleLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        navigate("/task");
        toast.success("Successfully Logged In");
      }
    } catch (error) {
      toast.error(`Failed to log in: ${error.message}`);
      console.error(error);
    }
  };

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={styles.ModalWrapper} onClick={CLoseModal}></div>
      <div className={styles.ModalContainer}>
        <img src={image} className={styles.imageWid} alt="Modal" />
        {/* Content */}
        <div className={styles.outPop}>
          <div className={styles.popup}>
            <h1>Hi, there</h1>
            <p>Welcome to ToDo, so happy to see you!</p>
            <div className={styles.icons} onClick={() => handleLogin(new GoogleAuthProvider())}>
              <img src={google} alt="Google" />
              Continue with Google
            </div>
            <div className={styles.icons} onClick={() => handleLogin(new FacebookAuthProvider())}>
              <img src={facebook} alt="Facebook" />
              Continue with Facebook
            </div>
            <div className={styles.icons} onClick={() => handleLogin(new GithubAuthProvider())}>
              <img src={apple} alt="Apple" />
              Continue with Apple
            </div>
            <button onClick={CLoseModal} className={styles.close}>
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>,
    document.querySelector(".myPortalModalDiv")
  );
};

export default Login;
