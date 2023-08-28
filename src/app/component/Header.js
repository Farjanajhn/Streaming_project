import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/component/Nav";



const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/filmfreeway.jpg" alt="my logo" width={200} height={100} />
        </Link>
      </div>
    <Nav></Nav>
   </header>
  );
};

export default Header;