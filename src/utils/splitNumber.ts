export function splitNumber(num: number | undefined) {
  if (!num) return 'no data'

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
