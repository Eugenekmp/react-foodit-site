import logo from "../assets/logo.svg";
import textLogo from "../assets/text-logo.svg";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.gnb}>
        <div className={styles.gnbContent}>
          <img className={styles.logo} src={logo} alt="Foodit" />
        </div>
      </div>
      <div className={styles.main}>{children}</div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <img className={styles.textLogo} src={textLogo} alt="Foodit" />
          <span>서비스 이용약관 | 개인정보 처리방침</span>
        </div>
      </div>
    </div>
  );
}

export default Layout;
