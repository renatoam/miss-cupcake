import { AnyAction } from "@reduxjs/toolkit"
import { ChangeEvent, useEffect, useState } from "react"
import { addToCart, cartSelector, removeFromCart, updateCart } from "../../../state/features/cart/slice"
import { useAppDispatch, useAppSelector } from "../../../state/hooks"
import { ProductProps } from "../../../types"
import { actionStatusBase, initialActionStatus, INITIAL_INDEX, INITIAL_QUANTITY, MESSAGE_TIMEOUT } from "../constants"
import { handleChangeCartProps } from "../types"

export const useCard = (handledProduct: ProductProps) => {
  const [currentQuantity, setCurrentQuantity] = useState(INITIAL_QUANTITY)
  const [isMessageVisible, setIsMessageVisible] = useState(false)
  const [handledProductIndex, setHandledProductIndex] = useState(INITIAL_INDEX)
  
  const { products } = useAppSelector(cartSelector)
  const [buttonLabel, setButtonLabel] = useState(initialActionStatus.text)
  const dispatch = useAppDispatch()
  
  function delayedDispatch<T extends AnyAction>({ statusLoading, statusText, action, timeout = 2000 }: handleChangeCartProps<T>) {
    setButtonLabel(actionStatusBase[statusLoading].loading)
    setTimeout(() => {
      action && dispatch(action)
      setButtonLabel(actionStatusBase[statusText].text)
    }, timeout)
  }


  const isDisabled = handledProduct.quantity === INITIAL_QUANTITY
  const isHandledProductInCart = !!products[handledProductIndex]
  const shouldRemoveFromCart = isHandledProductInCart && currentQuantity === INITIAL_QUANTITY
  const shouldUpdateCart = currentQuantity > INITIAL_QUANTITY
  const hasQuantityInCartChanged = isHandledProductInCart && currentQuantity !== products[handledProductIndex].quantity
  
  function handleIncreaseQuantity(product: ProductProps) {
    if (currentQuantity >= product.quantity) {
      return toggleProductMessage()
    }

    setCurrentQuantity(currentStateQuantity => currentStateQuantity + 1)
  }
  
  function handleDecreaseQuantity() {
    if (currentQuantity === INITIAL_QUANTITY) return

    setCurrentQuantity(currentStateQuantity => currentStateQuantity - 1)
  }

  function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
    const incomingValue = Number(event.target.value)
    const hasMaximumQuantityReached = incomingValue > handledProduct.quantity
    const hasQuantityChanged = incomingValue !== handledProduct.quantity
    const newValue = hasMaximumQuantityReached || !hasQuantityChanged ? handledProduct.quantity : incomingValue

    setCurrentQuantity(newValue)
  }

  function handleProductOnCart() {
    if (!isHandledProductInCart && currentQuantity === INITIAL_QUANTITY) {
      return delayedDispatch({ statusLoading: 'ignore', statusText: 'add' })
    }

    if (!isHandledProductInCart) {
      return delayedDispatch({
        statusLoading: 'add',
        statusText: 'update',
        action: addToCart({
          ...handledProduct,
          quantity: currentQuantity
        })
      })
    }

    if (shouldRemoveFromCart) {
      return delayedDispatch({
        statusLoading: 'remove',
        statusText: 'add',
        action: removeFromCart({
          ...handledProduct,
          quantity: currentQuantity
        })
      })
    }
    
    if (hasQuantityInCartChanged) {
      return delayedDispatch({
        statusLoading: 'update',
        statusText: 'update',
        action: updateCart({
          ...handledProduct,
          quantity: currentQuantity
        })
      })
    }
      
    return delayedDispatch({ statusLoading: 'ignore', statusText: 'update' })
  }

  function toggleProductMessage() {
    clearTimeout()
    setIsMessageVisible(true)

    setTimeout(() => {
      setIsMessageVisible(false)
    }, MESSAGE_TIMEOUT)
  }

  useEffect(() => {
    const index = products.findIndex(product => product.id === handledProduct.id)

    setHandledProductIndex(index)
  }, [products, handledProduct])

  useEffect(() => {    
    if (!isHandledProductInCart && shouldUpdateCart)
      return setButtonLabel(actionStatusBase.add.text)
    
    if (shouldRemoveFromCart)
      setButtonLabel(actionStatusBase.remove.text)

    if (shouldUpdateCart)
      setButtonLabel(actionStatusBase.update.text)
  }, [isHandledProductInCart, shouldRemoveFromCart, shouldUpdateCart])
  
  return {
    isMessageVisible,
    currentQuantity,
    isDisabled,
    buttonLabel,
    setButtonLabel,
    delayedDispatch,
    handleDecreaseQuantity,
    handleChangeQuantity,
    handleIncreaseQuantity,
    handleProductOnCart,
  }
}
