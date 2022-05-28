import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (

    
    <><Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    
    
    <main className="container">

        <section className={styles.heroBanner}>


          <div className={`${styles.heroBannerTextWrapper} lightBackground`}>
            <p>Hello, I am</p>
            <h1>SAMUEL JULE</h1>
            <p>Aspiring web-developer & designer in Jersey.
              Comfortable with pure CSS/HTML/JS & Wordpress,
              learning frameworks such as React and Laravel.</p>
            <div className="buttonContainer">
              <Link href="/"><a className="solidButton">Blog</a></Link>
              <Link href="/"><a className="borderedButton">Download CV</a></Link>
            </div>
          </div>
          <img src={"./grouville.jpg"} />
          <img src={"./me.jpg"} />
          <img src={"./cliff.jpg"} />
        </section>


        <section className={`${styles.workSection} ${styles.lightBackground}`}>

          <div className={styles.workSectionBanner}>

          </div>

        </section>

        <div className='test'></div>





      </main></>
  )
}
