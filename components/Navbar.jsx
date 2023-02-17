import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={style.navbar}>
      <ul className={style.navlist}>
        <Link href="/" passHref>
          <li className={router.pathname == "/" ? `${style.active}` : ""}>
            goran.carevic
          </li>
        </Link>
        <div className={style.rightLinks}>
          <Link href="/about" passHref>
            <li
              className={
                router.pathname == "/about" ? `${style.active}` : ""
              }
            >
              .about()
            </li>
          </Link>
          <Link href="/project" passHref>
            <li
              className={
                router.pathname == "/project" ? `${style.active}` : ""
              }
            >
              .projects()
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
