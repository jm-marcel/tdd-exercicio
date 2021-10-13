const employee = require("../lib/employee");
const measurement = require("../lib/salaryMeasurement");

describe("Calcular Salário", () => {
  // Developer - Failure
  test("Desenvolvedor", () => {
    result = measurement(
      new employee("Pedro", "pedro@email.com", 5000, "Desenvolvedor")
    );
    expect(result.salary).toBe(3500);
    expect(result.discount).toBe(1000);
    expect(result.fee).toBe(0.1);
  });
});
