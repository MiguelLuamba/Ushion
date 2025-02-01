export function GetFirstAndSecondWord(str: string): string {
  // Divida a string em palavras
  const words = str.split(' ');
  // Pegue as primeiras duas palavras
  const firstTwoWords = words.slice(0, 2);
  // Junte as palavras de volta em uma string
  return firstTwoWords.join(' ');
}