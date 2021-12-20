export const humanizeWord = (sluggedWord: string) => {
  const words = sluggedWord.split('-')
  return words.reduce<string>((total, current) => `${total} ${current}`, '').trim()
}

export const capitalize = (s: string) => {
  return (s = s.charAt(0).toUpperCase() + s.slice(1))
}
