import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from '../Styles/Footer.module.scss' ;
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
    return (
        <>
            <div className={styles.Footer} >
                <div className={styles.Links}>
                <div className={styles.link}>
                    <a href="https://www.facebook.com/profile.php?id=100023963796984" target='_blank'><FacebookIcon /><p>Facebook</p></a> 
                </div> 
                <div className={styles.link}>
                    <a href="https://wa.me/8219981467" target='_blank'><WhatsAppIcon /><p>WhatsApp</p></a> 
                </div> 
                <div className={styles.link}>
                   <a href="https://www.instagram.com/akshay_thakur_03" target='_blank'> <InstagramIcon/><p>Instagram</p></a>
                </div>
                <div className={styles.link}>
                    
                    <a href="https://in.linkedin.com/in/akshay-thakur1766" target='_blank'> <LinkedInIcon/><p>LinkedIn</p></a>
                </div>
                <div className={styles.link}>
             
                    <a href="https://github.com/Akshaythakur766" target='_blank'> <GitHubIcon/><p>GitHub</p></a>
                </div>
                </div>
                <div className={styles.rights}>
                &copy; 2024. Developed by Akshay thakur
                </div>
            </div>
        </>)
}

export default Footer