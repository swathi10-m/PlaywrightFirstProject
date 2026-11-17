import test from "@playwright/test";

test('find page title and Url length',async({page})=>
{
    //open url
    await page.goto('http://facebook.com')
    //hardtime to suspend tool
    await page.waitForTimeout(4000)
    //get page title
    const page_title:string=await page.title()
    console.log(`Title of the webpage is ${page_title}`)
    //get page length
    console.log(`Length of the title is ${page_title.length}`)
    const url_str:string=await page.url()
    //get page URL
    console.log(`Url of the opened webpage is ${url_str}`)
    //get page URL length
    console.log(`The length of the URL is ${url_str.length}`)

})