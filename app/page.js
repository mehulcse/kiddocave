import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={[styles.center, styles.column]}>
        <p className={styles.title}>KiddoCave</p>
        <p className={styles.subtitle}>is coming soon</p>
      </div>
      <div className={styles.center}>
        Handcrafting the baby sleep solution by&nbsp;<a href="https://twitter.com/mehulcse" className={styles.link}>Mehul Thakkar</a>
      </div>
    </main>
  )
}
