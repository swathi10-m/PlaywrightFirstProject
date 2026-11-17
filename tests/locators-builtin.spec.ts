import test, { Locator } from "@playwright/test";

test('Built in Locators',async({page})=>
{
 await page.goto('https://qa-practice.netlify.app/register')
 await page.waitForTimeout(2000)
 //getByRole
 const firstName:Locator=page.getByRole('textbox',{name:'First Name'})
 await firstName.fill('Abraham')
 //getByLabel
 const lastName:Locator=page.getByLabel('Last Name')
 await lastName.fill('John')
 //getbyPlaceholder
 const phoneNumber:Locator=page.getByPlaceholder('Enter phone number')
 await phoneNumber.fill('9839283921')
 const country:Locator=page.locator('select#countries_dropdown_menu')
 await country.selectOption('Australia')
 //const emailId:Locator=page.getByLabel('Email address *')
 //await emailId.fill('test@gmail.com')
 const password:Locator=page.getByPlaceholder('Password')
 await password.fill('test1234')
 const agreement:Locator=page.getByText('I agree with the terms and conditions')
 await agreement.check()
 const register:Locator=page.getByRole('button',{name:'Register'})
 await register.click()
})