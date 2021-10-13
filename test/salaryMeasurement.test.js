const employee = require("../lib/employee");
const measurement = require("../lib/salaryMeasurement");

describe("Calcular Salário", () => {
  // Tester (Same as DBA :D) - Success
  test("Testador", () => {
    result = measurement(
      new employee("Jonas", "jonas@email.com", 550, "Testador")
    );
    expect(result.salary).toBeCloseTo(467.5);
    expect(result.discount).toBeCloseTo(82.5);
    expect(result.fee).toBe(0.15);
  });
});
