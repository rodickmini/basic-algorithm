/*
* @Author: caiyou
* @Date:   2016-11-22 20:09:22
* @Last Modified by:   caiyou
* @Last Modified time: 2016-11-22 20:32:50
*/

'use strict';

function selectSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for(let j = i + 1; j < arr.length; j++) {
      if(min > arr[j]) {
        let tmp = min; min = arr[j]; arr[j] = tmp;
      }
    }
    arr[i] = min;
  }
}

var testArr = [4, 40, 11, 9, 7, 20, 100, 98, 88, 58, 30];
selectSort(testArr);

console.log(testArr);//[ 4, 7, 9, 11, 20, 30, 40, 58, 88, 98, 100 ]