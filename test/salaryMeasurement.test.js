const employee = require("../lib/employee");
const measurement = require("../lib/salaryMeasurement");

describe("Calcular Salário", () => {
  // Manager - Success
  test("Gerente", () => {
    result = measurement(new employee("Ana", "ana@email.com", 2500, "Gerente"));
    expect(result.salary).toBe(2000);
    expect(result.discount).toBe(500);
    expect(result.fee).toBe(0.2);
  });
});
