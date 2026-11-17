import { test } from "@playwright/test";

test('Open a Web page',async({page})=>
{
    //launch url
   await page.goto('http://google.com ')
   
   //hardtime to suspend tool
   await page.waitForTimeout(4000)
})