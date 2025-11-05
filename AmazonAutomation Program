using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automation_Selenium
{
     class Program
    {
        // Creat reference for Chrome browser
        IWebDriver driver = new ChromeDriver();
        
        static void Main(string[] args)
        {
        }
        [SetUp]
        public void initialize()
        {
            // Go to Google page
            driver.Navigate().GoToUrl("https://WWW.amazon.com");
        }

        [Test]
        public void ExecuteTest()
        {
            // Make the browser full screen
            driver.Manage().Window.Maximize();

            // Web Elements
            IWebElement SignIn = driver.FindElement(By.Id("nav-link-accountList"));
            SignIn.Click();

            IWebElement EmailField = driver.FindElement(By.Id("ap_email_login"));
            EmailField.Click();

            IWebElement ContinueButton = driver.FindElement(By.Id("continue"));
            ContinueButton.Click();

            IWebElement ErrorMessage = driver.FindElement(By.ClassName("a-alert-content"));
            string ActualErrorMessageText = ErrorMessage.Text;
            string ExpectedErrorMessageText = "Invalid email address";
            Assert.Equals(ActualErrorMessageText, ExpectedErrorMessageText);


            // Operations
            //SignIn.Click();
            //EmailField.SendKeys("pewpew@abv.bg");
            //ContinueButton.Click();
        }
        [TearDown]
        public void CloseTest()
        { 
        // close the brozer
        driver.Quit();
        }
    }
}
