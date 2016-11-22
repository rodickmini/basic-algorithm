/*
* @Author: caiyou
* @Date:   2016-11-22 19:21:28
* @Last Modified by:   caiyou
* @Last Modified time: 2016-11-22 19:36:23
*/

'use strict';

/*
* 合并有序数组
*/
function mergeSortedArr(A, B) {
  let i = 0, j = 0, C = [];
  while(i < A.length && j < B.length) {
    if(A[i] < B[j]) {
      C[ i + j ] = A[i];
      i++;
    }else {
      C[ i + j ] = B[j];
      j++;
    }
  }
  while(i < A.length) {
    C[i + j] = A[i];
    i++;
  }
  while(j < B.length) {
    C[i + j] = B[j];
    j++;
  }
  return C;
}

var result = mergeSortedArr([1,3,5,11,29, 30, 70, 77, 89], [2,2,4,9,100]);

console.log(result);//[ 1, 2, 2, 3, 4, 5, 9, 11, 29, 30, 70, 77, 89, 100 ]





