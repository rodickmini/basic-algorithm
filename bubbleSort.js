/*
* @Author: caiyou
* @Date:   2016-11-22 19:43:56
* @Last Modified by:   caiyou
* @Last Modified time: 2016-11-22 20:03:47
*/

'use strict';

/**
* 冒泡排序
*/
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

var testArr = [4, 40, 11, 9, 7, 20, 100, 98, 88, 58, 30];
bubbleSort(testArr);

console.log(testArr);//[ 4, 7, 9, 11, 20, 30, 40, 58, 88, 98, 100 ]

/**
* 冒泡排序，优化
*/
function bubbleSort_1(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

var testArr = [4, 40, 11, 9, 7, 20, 100, 98, 88, 58, 30];
bubbleSort_1(testArr);

console.log(testArr);//[ 4, 7, 9, 11, 20, 30, 40, 58, 88, 98, 100 ]
