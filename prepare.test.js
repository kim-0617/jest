const fn = require("./prepare");

/**
 * test 사전 준비 작업
 * beforeEach는 각 테스트를 실행하기전에 실행한다.
 * afterEach는 각 테스트 실행 후에 실행한다.
 * beforeAll은 테스트 최초로 한번 실행
 * afterAll은 테스트 끝날 때 한번 실행
 *
 * describe안에 넣으면 그안에 동작은 외부에 영향을 끼치지 않는다.
 * 위에 유저디비 가져오는 beforeAll과 afterAll이 있기때문에 describe로 구분을 지어놓음
 *
 * 여러 테스트 케이스 중 그것만 실행하고 싶을때 test.only
 * 여러 테스트 케이스 중 스킵하고 싶은 것이 있을 때 test.skip
 */

// let num = 0;

// beforeEach(() => {
//   num = 0;
// });

// test("0 더하기 1은 1이죠", () => {
//   num = fn.add(0, 1);
//   expect(num).toBe(1);
// });

// test("0 더하기 2은 2죠", () => {
//   num = fn.add(0, 2);
//   expect(num).toBe(2);
// });

// test("0 더하기 3은 3이죠", () => {
//   num = fn.add(0, 3);
//   expect(num).toBe(3);
// });

// test("0 더하기 4은 4죠", () => {
//   num = fn.add(0, 4);
//   expect(num).toBe(4);
// });

let user;
let msg;

beforeAll(async () => {
  user = await fn.connectUserDB();
});

afterAll(async () => {
  msg = await fn.disconnectUserDB();
});

test("유저의 이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});

test("유저의 나이는 30", () => {
  expect(user.age).toBe(30);
});

test("유저의 성별은 남자", () => {
  expect(user.gender).toBe("male");
});

describe("Car 관련 작업", () => {
  let car;
  let msg;

  beforeAll(async () => {
    car = await fn.connectCarDB();
  });

  afterAll(async () => {
    msg = await fn.disconnectUserDB();
  });

  test("브랜드는 bmw", () => {
    expect(car.brand).toBe("bmw");
  });

  test("이름은 z4", () => {
    expect(car.name).toBe("z4");
  });

  test("색상은 red", () => {
    expect(car.color).toBe("red");
  });
});
