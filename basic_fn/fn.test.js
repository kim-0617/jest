const fn = require("./fn");

/**
 * toBe 부분에서 사용하는 함수를 Matcher 라고 합니다.
 * toBe는 기본 타입 (원시타입) 값을 비교할 때 사용합니다.
 *
 * toEqual은 toBe와 비슷합니다. 객체를 테스트할 때 사용합니다.
 * toStrictEqual은 좀 더 엄격한 비교를 위해 사용합니다. => 이것을 사용합시다.
 */

// test("1은 1이죠.", () => {
//   expect(1).toBe(1);
// });

// test("2 더하기 3은 5죠.", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test("3 더하기 3은 5아니죠.", () => {
//   expect(fn.add(3, 3)).not.toBe(5);
// });

// test("3 더하기 3은 5아니죠.", () => {
//   expect(fn.add(2, 3)).toEqual(5);
// });

// error
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30)).toBe({
//     name: "Mike",
//     age: 30,
//   });
// });

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30)).toStrictEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30)).toEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

/**
 * toBeNull : null 인가
 * toBeUndefined : undefined 인가
 * toBeDefined : ??
 * /

// test("null = null", () => {
//   expect(null).toBeNull();
// });

// test("undefined = undefined", () => {
//   expect(undefined).toBeUndefined();
// });

/**
 * toBeTruthy : true 값인가
 * toBeFalsy : false 값인가
 */
// test("0은 false 입니다.", () => {
//   expect(0).toBeFalsy();
// });

/**
 * toBeGreaterThan : 크다
 * toBeGreaterThanOrEqual : 크거나 같다
 * toBeLessThan : 작다
 * toBeLessThanOrEqual : 작거나 같다
 * 정확히 같을 때를 표현하고 싶을 때, toBe || toEqual을 사용합시다
 */

// test("3은 5보다 작습니다.", () => {
//   expect(3).toBeLessThan(5);
// });

// test("5은 3보다 큽니다.", () => {
//   expect(5).toBeGreaterThan(3);
// });

// test("id는 10자 이하로 입력해주세요.", () => {
//   const id = "THE_BLACK";
//   expect(id.length).toBeLessThanOrEqual(10);
// });

/**
 * toBeCloseTo : 값이 근사치인지
 */

// test("id는 10자 이하로 입력해주세요.", () => {
//   //   expect(0.2 + 0.1).toEqual(0.3); (X)
//   expect(0.2 + 0.1).toBeCloseTo(0.3);
// });

/**
 * toMatch : 정규표현식으로 문자열 테스트 판단
 * toContain : 포함 여부 판단
 */

// test("Hello World에 a가 있나요?", () => {
//   expect("Hello World").toMatch(/h/gi);
// });

// test("유저리스트에 마이크가 있나요?", () => {
//   const user = "Mike";
//   const userList = ["Tom", "Jane", "Ann", "Mike"];
//   expect(userList).toContain(user);
// });

/**
 * toThrow : 에러 감지
 */

test("이거 에러인가요?", () => {
  expect(() => fn.throwErr()).toThrow("hi error"); // 인자를 넣으면 에러 메세지까지 일치 해야 합니다.
});
