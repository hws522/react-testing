
/*
* 여기서 사용한 test 라는 함수는, 새로운 테스트 케이스를 만드는 함수입니다. 
* 그리고 expect는 특정 값이 ~~ 일 것이다 라고 사전에 정의를 하고, 통과를 하면 테스트를 성공시키고 통과를 하지 않으면 테스트를 실패시킵니다. 
* toBe 는 matchers 라고 부르는 함수인데요, 특정 값이 어떤 조건을 만족하는지, 또는 어떤 함수가 실행이 됐는지, 에러가 났는지 등을 확인 할 수 있게 해줍니다. 
* 여기서 toBe 는 특정 값이 우리가 정한 값과 일치하는지 확인을 해줍니다.
*/

// const sum = require('./sum');

// test('1 + 2 = 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

/*
 * 우리가 새로운 테스트 케이스를 만들 때, test 라는 키워드를 사용했는데요, 이 키워드 말고 it 이라는 키워드를 사용 할 수도 있습니다.
 * 작동방식은 완전히 똑같습니다. it을 사용하게 되면 테스트 케이스 설명을 영어로 작성하게 되는 경우, "말이 되게" 작성 할 수 있습니다. 
 */

// const sum = require('./sum');

// it('calculates 1 + 2', () => {
//   expect(sum(1, 2)).toBe(3);
// });

/*
 * 테스트 케이스의 설명은 한국어로 적어도 상관은 없습니다. 
 * 영어로도 충분히 설명 할 수 있으면 영어로 하는게 좋겠지만, 한국어로 사용 할 때 더 쉽게 이해 할 수 있는 설명이라면 한국어로 작성하는것이 좋습니다. 
 */

// const sum = require('./sum');

// it('1 + 2 잘 더해진다', () => {
//   expect(sum(1, 2)).toBe(3);
// });

/*
 * 현재 여러 함수를 내보내고 있기 때문에 테스트 케이스가 망가졌을 것입니다. 다음과 같이 테스트 코드를 수정하세요. 
 */

const { sum, sumOf } = require('../sum');

describe('sum', () => {
  it('calculates 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('calculates all numbers', () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});

/*
 * 이렇게 describe 로 감싸주고 나면, 여러 테스트 케이스가 sum 이라는 이름으로 분류됩니다. 
 */
