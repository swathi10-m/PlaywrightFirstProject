import test, { Locator } from "@playwright/test";
test("Built in locators",async({page})=>{
await page.goto('https://qa-thepoint.hlrpbooks.com')
await page.waitForTimeout(4000)
page.getByRole('button',{name:'Accept All Cookies'}).click()
page.getByRole('button',{name:'return user opens a dialog'}).click()
//await page.waitForURL('**qa-sso.hlrpbooks.com**');
const element:Locator=page.getByRole('textbox',{name:'Email Address or Username*'})
console.log(element)
element.clear()
//await page.getByRole('textbox',{name:'Email'}).nth(1).fill("PNT")
//await page.waitForTimeout(4000)
})