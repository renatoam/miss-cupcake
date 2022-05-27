import axios from 'axios'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import styles from '../styles/home.module.css'
import { ProductDTO, ProductsResponse } from '../types'

const Home: NextPage = () => {
  const [products, setProducts] = useState<ProductDTO[]>([])

  async function getProducts() {
    const response = await axios.get<ProductsResponse>('/api/products')

    setProducts(response.data.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

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
      <article className={styles.why}>
        <section className={styles.content}>
          <figure className={styles.imageWhy}>
            <Image src="/images/choco.png" alt="Chocolate cupcake" width={500} height={300} />
            <Image src="/images/choco2.png" alt="Chocolate cupcake" width={500} height={300} />
          </figure>
          <section className={styles.informationWhy}>
            <h2 className={`title ${styles.title}`}>The Simple, Sweet Life</h2>
            <p className={styles.description}>Our cupcakes are always made with the finest ingredients, creating a spark that makes your taste buds dance. You&apos;ll want to indulge in each and every decadent flavor.</p>
            <button>Why Miss Cupcake</button>
          </section>
        </section>
        <figure className={styles.curves}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FBFBCA" fillOpacity="1" d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,170.7C672,181,768,235,864,224C960,213,1056,139,1152,133.3C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </figure>
      </article>
      <article className={styles.catalog}>
        <section className={styles.catalogContent}>
          <section className={styles.products}>
            <h2 className={`title ${styles.titleCatalog}`}>Make your day a little sweeter</h2>
            <section className={styles.list}>
              {products?.map(product => <Card key={product.id} product={product} />)}
            </section>
          </section>
        </section>
        <figure className={styles.curves}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EFFBE2" fillOpacity="1" d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,218.7C672,224,768,160,864,133.3C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </figure>
      </article>
      <article className={styles.about}>
        <section className={styles.aboutContent}>
          <section className={styles.informationAbout}>
            <h2 className={`title ${styles.title}`}>Once upon a time...</h2>
            <p className={styles.description}>The art of baking runs deep in our family. Growing up on our family we learned from the best. Our mom was an amazing baker. She not only taught us how to bake, she passed along her values of quality, honesty and integrity.</p>
            <button>Our story</button>
          </section>
          <figure className={styles.imageAbout}>
            <Image src="/images/story.png" alt="Blue cupcake with a top raspberry" layout='fill' />
          </figure>
        </section>
        <figure className={styles.curves}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fdefd2" fillOpacity="1" d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,218.7C672,224,768,160,864,133.3C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </figure>
      </article>
    </>
  )
}

export default Home
