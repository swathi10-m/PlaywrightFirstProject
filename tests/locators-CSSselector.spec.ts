import test, { Locator } from "@playwright/test";
//1. ID selector

test('web elements using css selector--id selector',async({page})=>
{
 await page.goto('https://qa-practice.netlify.app/auth_ecommerce')
 await page.waitForTimeout(3000)
 //Locating web element email id
 const emailId:Locator= page.locator('input#email')
 //clear the text box
 await emailId.clear()
 //Enter email id 
 await emailId.fill('admin@admin.com')
 //Locating web element password
 const password:Locator= page.locator('input#password')
 //clear the text box
  await password.clear()
 //Enter password
  await password.fill('admin123')
 const button:Locator= page.locator('button#submitLoginBtn')
 await button.click()

}
)
//2.Class selector

test('web elements using css selector--class selector',async({page})=>
{
 await page.goto('https://qa-practice.netlify.app/auth_ecommerce')
 await page.waitForTimeout(3000)
 //when matching more than one element using first(),last(),nth(i)
 await page.locator('input.form-control').first().fill('admin@admin.com')
 await page.locator('input.form-control').nth(1).fill('admin123')
 await page.locator('button.btn.btn-primary').first().click()
await page.waitForTimeout(3000)
})
//3.Single and Multiple Attribute selctor
test('web elements using css selector-- single multple attribute',async({page})=>
{
    await page.goto('https://qa-practice.netlify.app/auth_ecommerce')
    await page.waitForTimeout(3000)
    //single attribute
    await page.locator('input[type="email"]').fill('admin@admin.com')
    //multiple attribute
    await page.locator("input[class='form-control'][name='password']").fill('admin123')
    //using startsWith(^=),endsWith($=) and contains(*=)
    await page.locator("button[id^='s'][class$='primary'][test-data*='submit']").click()
    await page.waitForTimeout(3000)

})
//4.Tranversing from Parent to child for collection
test.only('Web elements from parent to child traverse',async({page})=>
{
    await page.goto('https://qa-practice.netlify.app/auth_ecommerce')
    await page.waitForTimeout(3000)
    await page.locator('form >div> input').nth(0).fill('admin@admin.com')
    await page.locator('form >div> input').nth(1).fill('admin123')
    await page.locator('form button').nth(0).click()

})
