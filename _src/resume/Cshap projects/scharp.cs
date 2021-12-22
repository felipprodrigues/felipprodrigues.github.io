cusing System;
using System.Collections.Generic;
using System.Text;
using System.Globalization;

namespace ExercicioFixacaoListas
{
    class Employee
    {
        public string Name { get; private set; }
        public int Id { get; private set; }
        public double Salary { get; private set; }

        public Employee(string name, int id, double salary)
        {
            SetName(name);
            SetId(id);
            SetSalary(salary);
        }

        public void SetName(string name)
        {
            bool nameTest = string.IsNullOrWhiteSpace(name);

            while (nameTest)
            {
                Console.Write("Please enter a valid name: ");
                name = Console.ReadLine();
                nameTest = string.IsNullOrWhiteSpace(name);
            }

            Name = name;
        }

        public void SetId(int id)
        {
            string str = id.ToString();
            while(str == null || str.Length < 3 || str.Length > 3)
            {
                Console.WriteLine("The ID have exactly 3 digits!");
                Console.Write("Please enter a valid ID: ");
                id = int.Parse(Console.ReadLine());
                str = id.ToString();
            }

            Id = id;
        }

        public void SetSalary(double salary)
        {
            while (salary <= 0)
            {
                Console.WriteLine("Salary cannot be 0!");
                Console.Write("Please enter a valid salary: ");
                salary = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            }

            Salary = salary;
        }

        public void SalaryAlteration()
        {
            Console.WriteLine("Increase or Decrease");
            char opt = char.Parse(Console.ReadLine().ToUpper().Substring(0,1));
            Console.Write("By how much? (percent): ");
            double percentage = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            if (opt == 'I')
                Salary = Salary + (Salary * percentage);
            else
                Salary = Salary - (Salary * percentage);
        }

        public override string ToString()
        {
            return "Worker: " + Name.ToUpper() + ", ID: " + Id + ", Salary: $" + Salary.ToString("F2", CultureInfo.InvariantCulture);
        }

    }
}
