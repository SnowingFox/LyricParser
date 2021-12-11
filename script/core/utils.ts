export function transformRegTime(time: any[]): number {
  time = time.map((item, index) => {
    if (index >= 1 && index <= 3) {
      return parseInt(item)
    }

    return item
  })
  return time[1] * 60 * 1000 + time[2] * 1000 + time[3]
}
