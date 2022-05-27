import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.container}>

      <div className={styles.banner}>
      
      
        <div className={`${styles.bannerTextWrapper} ${styles.lightBackground}`}>
          <p className={styles.subHeadingTop}>Hello, I am</p>
          <h1>SAMUEL JULE</h1>
          <p className={styles.subHeadingBot}>Aspiring web-developer & designer in Jersey. 
            Comfortable with pure CSS/HTML/JS & Wordpress, 
            learning frameworks such as React and Laravel.</p>
          <div className="buttonContainer">
            <Link href="/"><a className="solidButton">Blog</a></Link>
            <Link href="/"><a className="borderedButton">Download CV</a></Link>
          </div>
        </div>
        <img className="img1" src={"./grouville.jpg"} />
        <img className="img2" src={"./me.jpg"} />
        <img className="img3" src={"./cliff.jpg"} />
      </div>

      





    </main>
  )
}
