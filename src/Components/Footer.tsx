"use client"

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styles from 'Todo/styles/Footer.module.scss' ;
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className={styles.Footer} >
                <div className={styles.Links}>
                <div className={styles.link}>
                    <a href="https://www.facebook.com/profile.php?id=100023963796984" target='_blank'><FaFacebookSquare  size={25} /><p>Facebook</p></a> 
                </div> 
                <div className={styles.link}>
                    <a href="https://wa.me/8219981467" target='_blank'><FaWhatsapp  size={25} /><p>WhatsApp</p></a> 
                </div> 
                <div className={styles.link}>
                   <a href="https://www.instagram.com/akshay_thakur_03" target='_blank'> <FaInstagram  size={25}/><p>Instagram</p></a>
                </div>
                <div className={styles.link}>
                    
                    <a href="https://in.linkedin.com/in/akshay-thakur1766" target='_blank'> <FaLinkedinIn  size={25}/><p>LinkedIn</p></a>
                </div>
                <div className={styles.link}>
             
                    <a href="https://github.com/Akshaythakur766" target='_blank'> <FaGithub  size={25}/><p>GitHub</p></a>
                </div>
                </div>
                <div className={styles.rights}>
                &copy; 2024. Developed by Akshay thakur
                </div>
            </div>
        </>)
}

export default Footer