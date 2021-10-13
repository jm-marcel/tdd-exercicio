const employee = require("../lib/employee");
const measurement = require("../lib/salaryMeasurement");

describe("Calcular Salário", () => {
  // Tester (Same as DBA :D) - Failure
  test("Testador", () => {
    result = measurement(
      new employee("Jonas", "jonas@email.com", 550, "Testador")
    );
    expect(result.salary).toBeCloseTo(487.5);
    expect(result.discount).toBeCloseTo(44.5);
    expect(result.fee).toBe(0.5);
  });
});
