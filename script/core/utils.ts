export function transformRegTime(times: RegExpExecArray): number {
  const result: number[] = []
  times.forEach((time, index) => {
    if (index >= 1 && index <= 3) {
      result.push(parseInt(time))
    }
  })
  return (result[0] * 60 + result[1]) * 1000 + result[2]
}
