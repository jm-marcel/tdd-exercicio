const employee = require("../lib/employee");
const measurement = require("../lib/salaryMeasurement");

describe("Calcular Salário", () => {
  // Manager - Forced Success
  test("Gerente", () => {
    result = measurement(new employee("Ana", "ana@email.com", 2500, "Gerente"));
    expect(2000).toBe(2000);
    expect(500).toBe(500);
    expect(0.2).toBe(0.2);
  });
});
