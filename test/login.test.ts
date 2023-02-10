import {chromium, Page} from "playwright";
// import nodemailer from "nodemailer";
import * as nodemailer from 'nodemailer';
import { MessageClient } from "cloudmailin"


async function send1(n, p, n1, p1, r1, r2, d1,d2, c1,c2){
    

  var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'nodetester1230@outlook.com',
    pass: 'hihello1'
  }
});

var maillist = [
  'larryzhi1230@gmail.com',
  'hillo12305@gmail.com',
  // 'Karlgf2016@gmail.com',
  // 'ndgui2015@gmail.com',
  // 'mtlzhen@gmail.com',
];

var mailOptions = {
  from: 'nodetester1230@outlook.com',
  to: maillist,
  subject: 'Sending Email using Node.js',
  text: "SOUTH (hayward->LA): date: " + d1 + " " + r1 + " price: " + p + " name: " + n + "contact: " + c1 + '\n' + "NORTH (la->hayward) date: " + d2 + " " + r2 + " price back: " + p1 + " name back: " + n1 + "contact: " + c2
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
    //     await page.goto('https://express.dat.com')

    // })


  

    test('to', async () => {
      const browser = await chromium.launch({
        headless: true
    });
    const context = browser.newContext();
    const page =  await (await context).newPage();
      await page.goto('https://truckersedge.dat.com/');
      await page.getByLabel('Username/Email').click();
      await page.getByLabel('Username/Email').fill('gftrucking88@gmail.com');
      await page.getByLabel('Password').click();
      await page.getByLabel('Password').fill('Gf2022$$');
      await page.getByLabel('Password').press('Enter');
      if ((await page.getByRole('button', { name: 'LOGIN ANYWAY' })) != null) {
        await page.getByRole('button', { name: 'LOGIN ANYWAY' }).click();
        console.log("logged in");
      }
      
      if ((await page.getByRole('link', { name: 'Search Loads' })) != null) {
        // await page.getByRole('button', { name: 'LOGIN ANYWAY' }).click();
        await page.getByRole('link', { name: 'Search Loads' }).click();
        console.log("clicked");
      }

    let date: Date = new Date();  
    let dstringcurr = (date.getMonth()+1 + "/" + (date.getDate()) + "/" + date.getFullYear()); 
    date.setDate(date.getDate() + 1)
    let dstring = (date.getMonth()+1 + "/" + (date.getDate()) + "/" + date.getFullYear()); 

  await page.getByLabel('Origin').click();
  await page.getByRole('combobox', { name: 'Origin' }).fill('Hayward');
  await page.getByRole('combobox', { name: 'Origin' }).press('Enter');
  await page.getByLabel('Destination').click();
  await page.getByRole('combobox', { name: 'Destination' }).fill('Los An');
  await page.getByRole('combobox', { name: 'Destination' }).press('Enter');
  await page.getByLabel('DH-D').click();
  await page.getByLabel('DH-D').fill('100');
  await page.getByLabel('DH-D').press('Enter');
  await page.getByLabel('DH-O').click();
  await page.getByLabel('DH-O').press('ArrowLeft');
  await page.getByLabel('DH-O').fill('50');
  await page.getByLabel('DH-O').press('Enter');
  await page.locator('#mat-select-value-5').click();
  await page.getByRole('option', { name: 'Containers C' }).locator('mat-pseudo-checkbox').click();
  await page.locator('.cdk-overlay-backdrop').click();
  await page.locator('#searchform-search').click();

      // await page.getByLabel('Origin').click();
      // await page.getByRole('combobox', { name: 'Origin' }).fill('san fran');
      // await page.getByRole('combobox', { name: 'Origin' }).press('Enter');
      // await page.locator('#searchform-search').click();

      // // .card-selected > div:nth-child(12) > div:nth-child(1)
      // #detailsPortalHost

      

      let price = await page.locator('.card-selected > div:nth-child(12) > div:nth-child(1)').textContent(); 
      // let price = await page.locator('#detailsPortalHost').textContent();


      let name = await page.locator('.card-selected > div:nth-child(11) > a:nth-child(1) > span:nth-child(1)').textContent();

      // send1(name, price); 

      let results1 = await page.locator('#search-cards-title').textContent();
      console.log(results1);

      let contact = await page.locator('.card-selected > div:nth-child(11) > div:nth-child(2) > a:nth-child(1)').textContent();
      console.log("contact: " + contact);

      await page.screenshot({ path: 'screenshot.png' });

      await page.getByRole('button', { name: 'NEW SEARCH' }).click();

      await page.getByLabel('Start date').click();
      await page.getByLabel('Start date').press('Meta+a');
      await page.getByLabel('Start date').fill(dstring);

      await page.getByLabel('End date').click();
      await page.getByLabel('End date').press('Meta+a');
      await page.getByLabel('End date').fill(dstring);

      await page.getByRole('combobox', { name: 'Origin' }).fill('Los An');
      await page.getByRole('combobox', { name: 'Origin' }).press('Enter');
      await page.getByLabel('Destination').click();
      await page.getByRole('combobox', { name: 'Destination' }).fill('Hayward');
      await page.getByRole('combobox', { name: 'Destination' }).press('Enter');
      await page.getByLabel('DH-D').click();
      await page.getByLabel('DH-D').fill('50');
      await page.getByLabel('DH-D').press('Enter');
      await page.getByLabel('DH-O').click();
      await page.getByLabel('DH-O').press('ArrowLeft');
      await page.getByLabel('DH-O').fill('100');
      await page.locator('#searchform-search').click();

      const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
      await delay(2000);


      let price1 = await page.locator('.card-selected > div:nth-child(12) > div:nth-child(1)').textContent(); 
      // let price = await page.locator('#detailsPortalHost').textContent();
 

      let name1 = await page.locator('.card-selected > div:nth-child(11) > a:nth-child(1) > span:nth-child(1)').textContent();


      let results2 = await page.locator('#search-cards-title').textContent();



      let contact1 = await page.locator('.card-selected > div:nth-child(11) > div:nth-child(2) > a:nth-child(1)').textContent();
      console.log("contact: " + contact1);

      
      send1 (name, price, name1, price1, results1, results2, dstringcurr, dstring, contact, contact1);
      await page.screenshot({ path: 'screenshot1.png' });
      await browser.close();
    });

    
    
})

//todo: take snapshot of searches
// npx playwright codegen https://truckersedge.dat.com