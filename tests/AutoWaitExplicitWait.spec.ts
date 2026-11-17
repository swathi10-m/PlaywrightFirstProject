//Three types of waiting in Playwright
//Auto wait
//Explicit wait
//Hard wait

import test, { expect, Locator } from "@playwright/test";
test('Using different wait types',async({page})=>
{
 await page.goto('http://webapp.qedgetech.com/')
 //hard wait time
 await page.waitForTimeout(2000)
 //userName field
 //Auto wait 
 const userName=page.getByRole('textbox',{name:'User Name'})
 //Auto retry
 await expect(userName).toBeVisible()
 await userName.fill('admin')
 //password field
 const password:Locator=page.getByPlaceholder('Password')
 //explicit wait
 await password.waitFor({state:'visible'})
 await password.fill('master')
 //click login
 const loginButton:Locator=page.getByRole('button',{name:'Login'})
 //explicit wait
 await loginButton.waitFor({state:'visible'})
 await loginButton.click()



})