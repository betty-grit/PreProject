function salaryCalculator() {
  let name = document.getElementById("name").value;
  let grossSalary = document.getElementById("grossSalary").value;
  let ssnitContribution = 13.5;
  let incomeTax = 10;
  let netSalary = (document.getElementById("result").innerHTML =
    grossSalary -
    ((grossSalary * ssnitContribution) / 100 +
      (grossSalary * incomeTax) / 100));
  alert(name + " Your Net Salary is " + netSalary + "cedis");
}
