import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { ProductDTO } from "../../types"
import styles from './styles.module.css'

interface CardProps {
  product: ProductDTO
}

const INITIAL_QUANTITY = 1
const NOSTOCK_QUANTITY = 0
const MAXIMUM_LIMIT_REACHED = 'Maximum quantity reached'
const OUT_OF_STOCK = 'Out of stock'
const MESSAGE_TIMEOUT = 5000

export default function Card({ product }: CardProps) {
  const [quantity, setQuantity] = useState(INITIAL_QUANTITY)
  const [isMessageVisible, setIsMessageVisible] = useState(false)
  
  function handleIncreaseQuantity(productQuantity: number) {
    if (quantity >= productQuantity) {
      return toggleProductMessage()
    }

    setQuantity(currentQuantity => currentQuantity + 1)
  }
  
  function handleDecreaseQuantity() {
    if (quantity === INITIAL_QUANTITY) return removeFromCart()
    if (quantity <= NOSTOCK_QUANTITY) return

    setQuantity(currentQuantity => currentQuantity - 1)
  }

  function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>, productQuantity: number) {
    const incomingValue = Number(event.target.value)
    const newValue = incomingValue > productQuantity ? productQuantity : incomingValue

    setQuantity(newValue)
  }

  function removeFromCart() {
    // dispatch actions to remove from cart
    console.log('Remove from Cart')
  }

  function toggleProductMessage() {
    clearTimeout()
    setIsMessageVisible(true)

    setTimeout(() => {
      setIsMessageVisible(false)
    }, MESSAGE_TIMEOUT)
  }

  return (
    <section key={product.id} className={styles.product}>
      <a href="#" className={styles.clickable}>
        <figure>
          <Image src={product.image} alt={product.name} width={200} height={200} />
        </figure>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        {isMessageVisible && <span className={styles.message}>{MAXIMUM_LIMIT_REACHED}</span>}
        {product.quantity === NOSTOCK_QUANTITY && <span className={styles.message}>{OUT_OF_STOCK}</span>}
      </a>
      <section className={styles.actions}>
        <section className={styles.quantity}>
          <input type="button" value="-" onClick={handleDecreaseQuantity} />
          <input
            type="text"
            onChange={event => handleChangeQuantity(event, product.quantity)}
            value={product.quantity > NOSTOCK_QUANTITY ? quantity : NOSTOCK_QUANTITY}
          />
          <input type="button" value="+" onClick={() => handleIncreaseQuantity(product.quantity)} />
        </section>
        <button disabled={product.quantity === 0}>Add to Cart</button>
      </section>
    </section>
  )
}