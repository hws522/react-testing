// function sum(a, b) {
//     return a + b;
//   }
  
//   function sumOf(numbers) {
//     let result = 0;
//     numbers.forEach(n => {
//       result += n;
//     });
//     return result;
//   }
  
//   // 각각 내보내기
//   exports.sum = sum;
//   exports.sumOf = sumOf;

  /*
 * 테스트 코드를 작성 했을 때 얻을 수 있는 이점은, 리팩토링 이후 코드가 제대로 작동하고 있는 것을 검증하기 매우 간편하다는 것 입니다. 
 * 한번 sumOf 함수를 다음과 같이 리팩토링해보세요. 
 */

  function sum(a, b) {
    return a + b;
  }
  
  function sumOf(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  
  // 각각 내보내기
  const _sum = sum;
export { _sum as sum };
  const _sumOf = sumOf;
export { _sumOf as sumOf };

  // * 배열 내장함수 reduce 를 사용해서 배열의 총합을 구해주었습니다. 만약에 여기서 우리가 실수를 했었더라면? 테스트 케이스가 실패하여 바로 알 수 있겠죠?