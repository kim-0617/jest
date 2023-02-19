const fn = require("./asyncfn");

/**
 * 비동기 콜백을 처리할  때 done을 이용해서 done을 만나기 전까지 종료되지 않게 할 수 있다
 * 전달하면 써야한다
 */

// test("3초 후에 받아올 이름은 Mike", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (err) {
//       done();
//     }
//   }
//   fn.getName(callback);
// });

/**
 * promise case
 * promise를 반환할 땐 return 키워드와 함께 반환하자
 * 더 간단하게 매처를 사용할 수 있다. (resolves, rejects)
 * async, await
 */
// test("3초후에 받아올 나이는 30", () => {
//   return fn.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
// });

// test("3초후에 받아올 나이는 30", () => {
//   return expect(fn.getAgeSuccess()).resolves.toBe(30);
// });

// test("error!", () => {
//   return expect(fn.getAgeFailure()).rejects.toMatch("error");
// });

// test("async, await 나이받아오기 => 30", async () => {
//   const age = await fn.getAgeSuccess();
//   expect(age).toBe(30);
// });

test("async, await 나이받아오기 => 30", async () => {
  await expect(fn.getAgeSuccess()).resolves.toBe(30);
});
