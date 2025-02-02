export function GetFirstAndSecondWord(str: string): string {
  // DIVIDE STRING ON WORDS
  const words = str.split(' ');
  // GET FIRST AND SECOND WORD
  const firstTwoWords = words.slice(0, 2);
  // RETUTN JOIN FIRST AND SECOND WORD ON A STRING
  return firstTwoWords.join(' ');
}