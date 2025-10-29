using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace myFirstProject_1_
{
    internal class Program
    {
        // This method called "Main"
        static void Main(string[] args)
        {
            /* // Part 1 Greeting
             Console.WriteLine("Hello World! Yes, you there! What´s your name?");
             Console.ReadLine();
             Console.WriteLine("Nice to meet you!");


             // Part 2 Color
             Console.WriteLine("What´s your favorite color?");
             Console.ReadLine();
             Console.WriteLine("That´s a lovely color");

             // Part 3 Number
             Console.WriteLine("Enter your number");
             int number = int.Parse(Console.ReadLine());
             Console.WriteLine($"Cool!{number} doubled is {number * 2}");

             // Our program starts from here
             // int = integrals (round numbers), double = decimal numbers, float = more than one num after point, decimal = more presige
             // var = variable


             int firstNumber = 5;
             int secondNumber = 10;
             double thirdNumber = 10.5;
             string name = "Michael"; // sentences and words
             char character = 'a';   // single characters

             var fifthNumber = 12;
             var secondName = "John"; 
             bool trueOrFalse = true;        


                 //Let´s calculate
          Console.Write("Type your first number: ");
          int firstNumber = int.Parse(Console.ReadLine());
          Console.Write("Type your second number: ");
          int secondNumber = int.Parse(Console.ReadLine());
          Console.Write("The sum of the two numbers is: ");
          int sumOfNumbers = firstNumber + secondNumber;
          Console.WriteLine(sumOfNumbers);


             // Simple Greeting Program
          Console.WriteLine("What is your first name?");
          string firstName = Console.ReadLine();
          Console.WriteLine("What is your last name?");
          string lastName = Console.ReadLine();
          Console.WriteLine("Welcome to this an amazing C# course for beginners, " + firstName + " " + lastName);

             // Simple application which gonna ask age for permission of going/use to the page for example
             Console.Write("What is your age?");
             int age = int.Parse(Console.ReadLine());

             if (age < 18)   // == icual; <= less or icual; >= more or icual;
             {
                 Console.WriteLine("Sorry, you not allowed to drink!");
             }
             else if (age > 18)
             {
                 Console.WriteLine("Great, you are allowed to enter!");
             }

             // Switch Statments
             Console.Write("What is your age?");
             int yourAge = int.Parse(Console.ReadLine());

             switch (yourAge)
             { 
                 case 17:
                     Console.WriteLine("You are not allowed to enter!");
                     break;
                 case 18:
                     Console.WriteLine("You barely made it, you can enter!");
                     break;
                 case 19:
                     Console.WriteLine("Okay, okay you are adult, you can enter!");
                     break;
             }

             // FOR Loops press CTRL + D  (coping the same line)
             {
                 for (int i = 0; i < 100; i++)
                 {
                     Console.WriteLine(i);
                 }       
             }   

            // While Loops
            {
                int i = 0;

                while (i <= 100)
                {
                    Console.WriteLine(i);
                    i++;
                }
            }
            {
                int i = 0;

                do  // TAB + TAB help to remind us construction of Loop
                {
                    Console.WriteLine(i);       // print it
                    i++;    // increament
                } while (i <= 100);
            } 

            // Methods = Functions
            Multiply(3, 5);
            Add(3, 6);
        }
            static void Multiply(int firstNumber, int secondNumber)
            {
                Console.WriteLine(firstNumber * secondNumber);
            }
            static void Add(int enNumber, int toNumber) 
            {
                Console.WriteLine(enNumber + toNumber); 

            // more flexible method
            Console.WriteLine(Add(10, 5));
        }
        static int Add(int treNumber, int fireNumber)
        { 
        return treNumber + fireNumber;


            // Arrays [] basics index > 0, 1, 2, 3, 4
            int[] numbers = new int[5]; 
            numbers[0] = 9;
            numbers[1] = 10;
            numbers[2] = 11;
            numbers[3] = 12; // index 3 = value 12
            numbers[4] = 13;

            Console.WriteLine(numbers[3]);  //12
            Console.WriteLine(numbers[4]); //13*/

            string[] names = new string[3];
            names[0] = "Joni";
            names[1] = "Mari";
            names[2] = "Jani";

            // faster to write
             string[] names02 =
             {
                 "Joni",
                 "Mari",
                 "Jani"
             };

             Console.WriteLine(names[2]);
             Console.WriteLine(names02[1]);
        }
    }
}
