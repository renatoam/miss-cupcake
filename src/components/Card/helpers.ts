interface handleChangeCartProps {
  initialString: string
  newString: string
  callback(): void
  timeout?: number
}

export function handleChangeCart(setState: any, { initialString, newString, callback, timeout = 2000 }: handleChangeCartProps) {
  setState(initialString)
  setTimeout(() => {
    setState(newString)
  }, timeout)
}
