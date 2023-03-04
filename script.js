const lengthOfTheLastWord = (sentence) => {

  //Метод split() разбивает 'string' на массив строк путём разделения строки, приносит нам матрицу
  let arr = sentence.split(" ");
  //Затем мы вычисляем длину последнего элемента в массиве
  const len = arr[arr.length - 1].length;
  console.log('Длина последнего слова в предложении: ' + len);
}
lengthOfTheLastWord("Август 2022 года оказался самым жарким в Москве");