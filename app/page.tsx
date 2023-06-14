// import NextNProgress from 'nextjs-progressbar'; <NextNProgress />
import styles from "./main.module.css"
import Homepage from "./components/Home/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Homepage />
    </main>
  )
}
