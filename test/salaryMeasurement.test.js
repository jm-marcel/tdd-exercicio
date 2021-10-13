const employee = require("../lib/employee");
const measurement = require("../lib/salaryMeasurement");

describe("Calcular Salário", () => {
  // DBA (Same as Tester :D) - Success
  test("DBA", () => {
    result = measurement(new employee("Zyon", "zyon@email.com", 550, "DBA"));
    expect(result.salary).toBeCloseTo(467.5);
    expect(result.discount).toBeCloseTo(82.5);
    expect(result.fee).toBe(0.15);
  });
});
