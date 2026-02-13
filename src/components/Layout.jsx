import logo from "../assets/logo.svg";
import textLogo from "../assets/text-logo.svg";
import useTranslate from "../hooks/useTranslate";
import styles from "./Layout.module.css";
import LocaleSelect from "./LocaleSelect";

function Layout({ children }) {
  const t = useTranslate();
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
          <span>
            {t("terms of service")} | {t("privacy policy")}
          </span>
          <LocaleSelect />
        </div>
      </div>
    </div>
  );
}

export default Layout;
