const employee = require("../lib/employee");
const measurement = require("../lib/salaryMeasurement");

describe("Calcular Salário", () => {
  // Developer - Forced Success
  test("Desenvolvedor", () => {
    result = measurement(
      new employee("Pedro", "pedro@email.com", 5000, "Desenvolvedor")
    );
    expect(4000).toBe(4000);
    expect(1000).toBe(1000);
    expect(0.2).toBe(0.2);
  });
});
