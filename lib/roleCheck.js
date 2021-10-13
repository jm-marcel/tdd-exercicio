module.exports = function (employee) {
  // Employee Info
  const role = employee.role;
  const baseSalary = employee.baseSalary;

  // Fee Declaration
  let fee;

  // Role Check For Salary Calculation
  const roleCheck = {
    // Developer
    Desenvolvedor: () => {
      fee = baseSalary >= 3000 ? 0.2 : 0.1;
    },
    // DBA (Same as Tester :D)
    DBA: () => {
      fee = baseSalary >= 2000 ? 0.25 : 0.15;
    },
    // Tester (Same as DBA :D)
    Testador: () => {
      fee = baseSalary >= 2000 ? 0.25 : 0.15;
    },
    // Manager
    Gerente: () => {
      fee = baseSalary >= 5000 ? 0.3 : 0.2;
    },
  };

  // Excommunication XD
  const calculation = roleCheck[role];
  calculation(role);

  return {
    discount: baseSalary * fee,
    fee: fee,
  };
};
