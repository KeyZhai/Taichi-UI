export function isNumber(obj: any): obj is number {
  return (
    Object.prototype.toString.call(obj) === '[object Number]' && obj === obj
  )
}

// toNumber 会把第一个参数转为 number，如果不是数字的话就返回第二个参数的默认值
export const toNumber = (value?: string | number, defaultValue?: number) => {
  if (value === undefined) {
    return defaultValue
  }
  if (isNumber(value)) {
    return value
  }
  const numberVal = parseFloat(value)
  return isNumber(numberVal) ? numberVal : defaultValue
}
