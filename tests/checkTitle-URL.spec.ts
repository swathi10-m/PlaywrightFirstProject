import test from "@playwright/test";

test('validate page title',async({page})=>
{
    await page.goto('http://linkedin.com')
    await page.waitForTimeout(4000)
    const ExpectedTitle:string='linkedin'
    const ActualTitle:string=await page.title()
    if (ExpectedTitle==ActualTitle) {
        console.log(`Title is matching ${ExpectedTitle} /n ${ActualTitle}`)
    } else {
        console.log(`Title is not same ${ExpectedTitle} /n ${ActualTitle}`)
    }
     const ActualURL:string=await page.url();
     if (ActualURL.startsWith('https')) {
        console.log(`Url is secured  ${ActualURL}`)
    } else {
        console.log(`Url is not secured ${ActualURL}`)
    }
})
