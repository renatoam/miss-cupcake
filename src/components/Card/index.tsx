import Image from "next/image"
import { ProductProps } from "../../types"
import { INITIAL_QUANTITY, MAXIMUM_LIMIT_REACHED, OUT_OF_STOCK } from "./constants"
import { useCard } from "./hooks/useCard"
import styles from './styles.module.css'

interface CardProps {
  handledProduct: ProductProps
}

export default function Card({ handledProduct }: CardProps) {
  const {
    isMessageVisible,
    currentQuantity,
    buttonLabel,
    isDisabled,
    handleDecreaseQuantity,
    handleChangeQuantity,
    handleIncreaseQuantity,
    handleProductOnCart
  } = useCard(handledProduct)

  return (
    <section className={styles.product}>
      <a href="#" className={styles.clickable}>
        <figure>
          <Image src={handledProduct.image} alt={handledProduct.name} width={200} height={200} />
        </figure>
        <h2>{handledProduct.name}</h2>
        <p>{handledProduct.description}</p>
        {isMessageVisible && <span className={styles.message}>{MAXIMUM_LIMIT_REACHED}</span>}
        {handledProduct.quantity === INITIAL_QUANTITY && <span className={styles.message}>{OUT_OF_STOCK}</span>}
      </a>
      <section className={styles.actions}>
        <section className={styles.quantity}>
          <input type="button" value="-" onClick={handleDecreaseQuantity} />
          <input
            type="text"
            onChange={handleChangeQuantity}
            value={currentQuantity}
          />
          <input type="button" value="+" onClick={() => handleIncreaseQuantity(handledProduct)} />
        </section>
        <button
          disabled={isDisabled}
          onClick={handleProductOnCart}
        >
          {buttonLabel}
        </button>
      </section>
    </section>
  )
}