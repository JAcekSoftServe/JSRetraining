const { add, getCircleArea, getCircleLength, food } = require('./hw13');

// ******************************* 1 *************************

describe("Test adding 0.1 + 0.2", () => {
    test("0.1 + 0.2 must be 0.3", () => {
        expect(add(0.1, 0.2)).toBe(0.3);
    })
})

// issue with decimal, result = Received: 0.30000000000000004, tired (a*10 + b*10) / 10 , but didn't work, 100 helped, as per documantation - I can use toBeCloseTo to avoid rounding error

// ******************************** 2 *********************************

const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2' ];

describe("Test given array", () => {
    test("Check if 'admin' is present", () => {
        expect(userList).toContain("admin");
    });
    test("Test whether the first element in array is 'Nick'", () => {
        expect(userList[0]).toBe("Nick");
    });
    test("Test whether the last element in the array is 'new_user_2'", () => {
        expect(userList[userList.length - 1]).toBe("new_user_2");
    });
    test("Test the statement that the length of the array is 5", () => {
        expect(userList.length).toBe(5);
    });
    test("Test the statement that the 3rd element of the array has type string", () => {
        expect(typeof userList[2]).toBe("string");
    });
    test("Prove the statement that the array does not have an 8th element", () => {
        expect(userList.length).not.toBe(8);
    });
})

// ************************************************* 3 ***********************************

describe("Test circle length and area", () => {
    test("Test length with argument = 22 to be 138.2", () => {
        const resultLength = getCircleLength(22);
        const roundedLength = Math.round(resultLength * 10) / 10;
        
        expect(roundedLength).toBe(138.2);

    });
    test("Test Circle Area with argument 9 to be 254.47", () => {
        expect(getCircleArea(9)).toBeCloseTo(254.47);
    });
    test("Test both functions with no arguments added", () => {
        expect(getCircleLength()).toBe(NaN);
        expect(getCircleArea()).toBe(NaN);
    })
})