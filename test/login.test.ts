import {chromium, Page} from "playwright";
// import nodemailer from "nodemailer";
import * as nodemailer from 'nodemailer';
import { MessageClient } from "cloudmailin"


// async function send() {
//     const hostname = "smtgmailp..com";
//     const username= "hillo12305";
//     const password= "hihello1";
  
//     const transporter = nodemailer.createTransport({
//       host: hostname,
//       port: 587,
//       secure: false,
//       requireTLS: true,
//       auth: {
//         user: username,
//         pass: password,
//       },
//       logger: true
//     });

//     const info = await transporter.sendMail({
//         from: '"Larry" <hillo12305@gmail.com>',
//         to: "larryzhi1230@gmail.com",
//         subject: "Hello from node",
//         text: "Hello world?",
//         html: "<strong>Hello world?</strong>",
//         headers: { 'x-myheader': 'test header' }
//       });
    
//       console.log("Message sent: %s", info.response);
// }

async function send1(s){
    

    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'nodetester1230@outlook.com',
    pass: 'hihello1'
  }
});

var mailOptions = {
  from: 'nodetester1230@outlook.com',
  to: 'larryzhi1230@gmail.com',
  subject: 'Sending Email using Node.js',
  text: s
};

transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
});

}



describe('Launch Browser', () => {

    // let page:Page;
    // beforeAll (async () => {
    //     const browser = await chromium.launch({
    //         headless: false
    //     });
    //     const context = browser.newContext();
    //     const page =  await (await context).newPage();
    //     await page.goto('https://www.amazon.com/')

    // })


    test ("amazon", async () => {
        const browser = await chromium.launch({
            headless:false
        });
        const context = browser.newContext();
        const page =  await (await context).newPage();
        await page.goto('https://amazon.com');
        await page.getByRole('textbox', { name: 'Search' }).click();
        await page.getByRole('textbox', { name: 'Search' }).fill('iphone 14 phone');
        await page.getByRole('textbox', { name: 'Search' }).press('Enter');
        // await page.getByRole('listitem', { name: 'Apple' }).getByRole('link', { name: 'Apple' }).click();
        let productname = await page.locator('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(5) > div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20.s-list-col-right > div > div > div.a-section.a-spacing-none.puis-padding-right-small.s-title-instructions-style > h2 > a > span').textContent();
        send1(productname);
        console.log(await page.locator('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(4) > div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20.s-list-col-right > div > div > div.sg-row > div.sg-col.sg-col-4-of-12.sg-col-4-of-16.sg-col-4-of-20 > div > div.a-section.a-spacing-none.a-spacing-top-micro.s-price-instructions-style > div > a > span > span:nth-child(2) > span.a-price-whole').textContent());
        console.log(await page.locator('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(4) > div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20.s-list-col-right > div > div > div.sg-row > div.sg-col.sg-col-4-of-12.sg-col-4-of-16.sg-col-4-of-20 > div > div.a-section.a-spacing-none.a-spacing-top-micro.s-price-instructions-style > div > a > span > span:nth-child(2) > span.a-price-fraction').textContent());
    })

    // xtest ('Recorded script',async () => {
    //     const browser = await chromium.launch({
    //         headless:false
    //     });
    //     const context = browser.newContext();
    //     const page =  await (await context).newPage();
    //     await page.goto('https://letcode.in/');
    //     console.log(await page.locator('p.subtitle:nth-child(2)').textContent());
    //     await page.getByRole('link', { name: 'Log in' }).click();
    //     await page.getByRole('textbox', { name: 'Enter registered email' }).click();
    //     await page.getByRole('textbox', { name: 'Enter registered email' }).fill('hillo12305@gmail.com');
        
    //     await page.getByPlaceholder('Enter password').click();
    //     await page.getByPlaceholder('Enter password').fill('hello123!');
    //     await page.getByRole('button', { name: 'LOGIN' }).click();
    //     await page.getByRole('button', { name: 'Close' }).click();
    //     await page.getByRole('link', { name: 'Sign out' }).click();
    //     await browser.close();
    // })

    // //launch
    // xtest ('Open Letcode', async() =>{
    //     const browser = await chromium.launch({
    //         headless:false
    //     });
    //     const context = browser.newContext();
    //     const page =  await (await context).newPage();
    //     await page.goto('https://letcode.in/');
    //     await page.click("text=Log in");
    //     await page.fill("input[name='email']", "hillo12305@gmail.com");
    //     await page.fill("input[name='password']", "hello123!");

    //     // await page.click("text=LOGIN");
    //     await page.click('button:text("LOGIN")');
    //     await page.click('"Sign out');
    //     // await browser.close();
    // })
})