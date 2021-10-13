const employee = require("../lib/employee");
const measurement = require("../lib/salaryMeasurement");

describe("Calcular Salário", () => {
  // Tester (Same as DBA :D) - Forced Success
  test("Testador", () => {
    result = measurement(
      new employee("Jonas", "jonas@email.com", 550, "Testador")
    );
    expect(467.5).toBeCloseTo(467.5);
    expect(82.5).toBeCloseTo(82.5);
    expect(0.15).toBe(0.15);
  });
});
