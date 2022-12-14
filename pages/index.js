import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {

  const [isDarkMode, setDarkMode] = useState(true)

  return (

    
    <><Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    
    <div className={`${styles.allContentWrapper} ${isDarkMode ? styles.dark : ""}`}>
    <div className={styles.darkToggleButton}>
    <svg onClick={() => setDarkMode((lastState)=> !lastState)} viewBox="0 0 512 512">
      <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z"/>
    </svg>
    </div>

    <main className={styles.sectionContainer}>

        <section className={styles.videoContainer}>
          <video autoPlay="autoplay" muted loop>
            <source src="flowers.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

    

        <section className={styles.heroBanner}>

          <div className={`${styles.heroBannerTextWrapper} ${isDarkMode ? styles.dark : ""}`}>
            <p>Hello, I am</p>
            <h1>SAMUEL JULE</h1>
            <p>Aspiring web-developer & designer in Jersey.
              Comfortable with pure CSS/HTML/JS & Wordpress,
              learning React. Lover of spreadsheets.</p>
            <div className={styles.buttonContainer}>
              <Link href="mailto:samjule@outlook.com"><a className={styles.solidButton}>Email</a></Link>
              <Link href="/"><a className={styles.borderedButton}>Download CV</a></Link>
            </div>
          </div>
          
        </section>


      </main></div></>
  )
}
