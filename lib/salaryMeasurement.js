const roleCheck = require("./roleCheck");

module.exports = function (employee) {
  const baseSalary = employee.baseSalary;
  const { discount, fee } = roleCheck(employee);

  salary = baseSalary - discount;

  return { salary, discount, fee };
};
