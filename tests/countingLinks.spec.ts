import test, { Locator } from "@playwright/test";

//script to capture text and property value of a web element
//test.describe.configure({timeout:20000})

test('Capture property text and property value',async({page})=>
{
    await page.goto('http://google.com')
    await page.waitForTimeout(2000)
    const gmail:Locator=page.getByRole('link',{name:'Gmail'})
    console.log(await gmail.innerText());
    const gmailLink=await gmail.getAttribute('href')
    console.log(gmailLink)

})

//script to return all the labels from web page

test.only('Return all labels from web page',async({page})=>
{
    await page.goto('https://qa-practice.netlify.app/auth_ecommerce')
    await page.waitForTimeout(2000)
    const label:Locator= page.locator('form#login>div>label')
    console.log(await label.first().innerText());
    console.log(await label.last().innerText());

})

//script to print all link names and link URLS in a web page

test('Counting links in a web page',async({page})=>
{
    await page.goto('http://google.com')
    await page.waitForTimeout(2000)
    const allLinks:Locator=page.locator('a')
    //console.log(allLinks.textContent)
    const count=await allLinks.count()
    for (const element of await allLinks.all()) {
        console.log(await element.innerText())
        console.log(await element.getAttribute('href'))
        
    }
})
