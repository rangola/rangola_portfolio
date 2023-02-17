import style from "../styles/Footer.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import Link from "next/link";
const Footer = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;
  const time = current.getHours() + ":" + current.getMinutes();
  return (
    <div className={style.footer}>
      <div>
        <p className={style.find}>find me on:</p>
        <a
          href="https://www.linkedin.com/in/goran-carevic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsLinkedin />
          </span>
        </a>
        <a
          href="https://github.com/rangola"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsGithub />
          </span>
          </a>
          <a href="mailto:gorancarevic@outlook.com">
            <span>
              <BiMailSend />
            </span>
          </a>
      </div>
      <div>{time + " | " + date}</div>
    </div>
  );
};

export default Footer;
