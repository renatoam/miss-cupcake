import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <header className={styles.header}>
          <nav role="navigation">
            <ul className={styles.links}>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Why Miss Cupcake</a></li>
            </ul>
          </nav>
          <figure className={styles.cart}>
            <a href="#">
              <Image src="/icons/cart.svg" alt="Cart" width={40} height={40} />
            </a>
          </figure>
        </header>
        <section className={styles.banner} role="banner">
          <article className={styles.presentation}>
            <h1>Miss Cupcake</h1>
            <p className={styles.introduction}>We are proud to offer cupcakes and cakes that are freshly baked within hours, if not minutes, for your enjoyment.</p>
            <button>Shop now</button>
          </article>
          <figure className={styles.image}>
            <Image src="/images/main.png" alt="Many Cupcakes" layout='fill' />
          </figure>
        </section>
        <figure className={styles.curves}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F7CFDA" fillOpacity="1" d="M0,224L20,208C40,192,80,160,120,154.7C160,149,200,171,240,160C280,149,320,107,360,112C400,117,440,171,480,176C520,181,560,139,600,106.7C640,75,680,53,720,53.3C760,53,800,75,840,101.3C880,128,920,160,960,181.3C1000,203,1040,213,1080,218.7C1120,224,1160,224,1200,202.7C1240,181,1280,139,1320,149.3C1360,160,1400,224,1420,256L1440,288L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
        </figure>
      </section>
    </>
  )
}

export default Home
