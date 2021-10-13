const employee = require("../lib/employee");
const measurement = require("../lib/salaryMeasurement");

describe("Calcular Salário", () => {
  // Developer - Success
  test("Desenvolvedor", () => {
    result = measurement(
      new employee("Pedro", "pedro@email.com", 5000, "Desenvolvedor")
    );
    expect(result.salary).toBe(4000);
    expect(result.discount).toBe(1000);
    expect(result.fee).toBe(0.2);
  });
  // DBA (Same as Tester :D) - Success
  test("DBA", () => {
    result = measurement(new employee("Zyon", "zyon@email.com", 550, "DBA"));
    expect(result.salary).toBeCloseTo(467.5);
    expect(result.discount).toBeCloseTo(82.5);
    expect(result.fee).toBe(0.15);
  });
  // Tester (Same as DBA :D) - Success
  test("Testador", () => {
    result = measurement(
      new employee("Jonas", "jonas@email.com", 550, "Testador")
    );
    expect(result.salary).toBeCloseTo(467.5);
    expect(result.discount).toBeCloseTo(82.5);
    expect(result.fee).toBe(0.15);
  });
  // Manager - Success
  test("Gerente", () => {
    result = measurement(new employee("Ana", "ana@email.com", 2500, "Gerente"));
    expect(result.salary).toBe(2000);
    expect(result.discount).toBe(500);
    expect(result.fee).toBe(0.2);
  });
});
