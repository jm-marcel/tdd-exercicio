const employee = require("../lib/employee");
const measurement = require("../lib/salaryMeasurement");

describe("Calcular Salário", () => {
  // DBA (Same as Tester :D) - Forced Success
  test("DBA", () => {
    result = measurement(new employee("Zyon", "zyon@email.com", 550, "DBA"));
    expect(467.5).toBeCloseTo(467.5);
    expect(82.5).toBeCloseTo(82.5);
    expect(0.15).toBe(0.15);
  });
});
