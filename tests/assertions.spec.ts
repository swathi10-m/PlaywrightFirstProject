//steps to be followed
//1.launch url and assert text in login page
//2.assert username textbox is visible
//3.assert username and password have expected values
//4.capture username and password values
//5.verify after login page have url and title
//6.assert text after login

import test, { expect, Locator } from "@playwright/test";
test('Login Test case with assertion',async({page})=>
{
    await page.goto('https://qa-practice.netlify.app/auth_ecommerce')
    await page.waitForTimeout(3000)
    await page.getByRole('link',{name:'Forms'}).click()
    await page.getByRole('link',{name:'Login',exact:true}).click()
    //assert text in login page
    await expect(page.getByRole('heading',{name:'Login - Shop'})).toBeVisible()
    //assert Emailid

    const emailid:Locator=page.getByRole('textbox',{name:'Email'})
    await expect(emailid).toBeVisible()
    await emailid.fill('admin@admin.com')
    await expect(emailid).toHaveValue('admin@admin.com')
    //assert password
    const password:Locator=page.locator('input#password')
    await password.fill('admin123')
    await expect(password).toHaveValue('admin123')
    //capture  email id and password
    const emailValue:string=await emailid.inputValue()
    console.log(`User entered email id is ${emailValue}`)
    const passwordValue:string=await password.inputValue()
    console.log(`User entered password is ${passwordValue}`)
    //click on submit
    const submit=page.getByRole('button',{name:'Submit'})
    await submit.click()
    //verify after login page have url and title
    await expect(page).toHaveURL('https://qa-practice.netlify.app/auth_ecommerce')
    await expect(page).toHaveURL(/netlify/)
    await expect(page).toHaveTitle('QA Practice | Learn with RV')
    await expect(page).toHaveTitle(/Practice/)
    //assert text after login
    const successPage:Locator= page.getByRole('heading',{name:'SHOPPING CART'})
    await expect(successPage).toContainText('SHOPPING')
    console.log(`Message in login page is ${await successPage.innerText()}`)
})

