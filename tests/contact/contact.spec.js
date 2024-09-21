import{test,expect} from '@playwright/test';
import{contactPage} from '../../pageObjects/contact.po'
import{loginPage} from '../../pageObjects/login.po'
const testData= require('../../fixtures/submitData.json');
const testData1= require('../../fixtures/loginData.json');
//const {authenticate,createEntity,deleteEntity,getEntity,validate}

test.beforeEach(async({page})=>
{
    await page.goto('/');
    const login=new loginPage (page);
    await login.login(testData1.validUser.username, testData1.validUser.password);
    await login.verifyValidLogin();
});

test.describe('valid submit tests',()=>
{
    test('Submit using valid username and password',async ({ page }) =>
    {
        const contact=new contactPage (page);

        await contact.submit(testData.validSubmit.firstName, testData.validSubmit.lastName, 
            testData.validSubmit.birthdate,testData.validSubmit.email,testData.validSubmit.phone,
            testData.validSubmit.street1, testData.validSubmit.street2, testData.validSubmit.city,
            testData.validSubmit.stateprovince, testData.validSubmit.postalcode,testData.validSubmit.country);
        // await contact.verifySubmit(); 
        await contact.verifyValidSubmit();
    });
});

test.describe('invalid submit tests',()=>
{
    test('Submit using invalid firstname and lastname',async ({ page }) =>
    {
        const contact=new contactPage (page);

        await contact.submit(testData.invalidSubmit.firstName, testData.invalidSubmit.lastName, 
            testData.invalidSubmit.birthdate,testData.invalidSubmit.email,testData.invalidSubmit.phone,
            testData.invalidSubmit.street1, testData.invalidSubmit.street2, testData.invalidSubmit.city,
            testData.invalidSubmit.stateprovince, testData.invalidSubmit.postalcode,testData.invalidSubmit.country);
        // await contact.verifySubmit();
        await contact.verifyInvalidSubmit();
    });
});

test.describe('Contact testcases',()=>
{
    test('Contact Add test',async({page})=>
    {
        const contact=new contactPage (page);
        //await contact.contactAdd(testData.validSubmit.firstName,testData.validSubmit.lastName);
        await contact.viewcontact()
        // await contact.validateContactCreated(testData.validSubmit.firstName,testData.validSubmit.lastName);
        await contact.validateContactCreated(testData.validSubmit.firstName, testData.validSubmit.lastName, 
            testData.validSubmit.birthdate,testData.validSubmit.email,testData.validSubmit.phone,
            testData.validSubmit.street1, testData.validSubmit.street2, testData.validSubmit.city,
            testData.validSubmit.stateprovince, testData.validSubmit.postalcode,testData.validSubmit.country);
    })
})

// test('Contact Edit test',async({page, request}) => {
//     const Data = {
//       "firstName" : "Rachana",
//       "lastName": "Maskey",
//       "birthday": "2001-12-09",
//       "email":"rachu02@gmail.com",
//       "phone":"987000000"
//     };
//     const contact = new contactPage(page);
//     accessToken = await authenticateUser(testData.validUser.username,testData.validUser.password)
//     await createEntity(Data, accessToken, '/contacts',{request});
//     await contact.viewContact();
//     await contact.contactEdit(contactTestData.contactEdit.firstName)
//     await contact.validateContactCreated(contactTestData.contactEdit.firstName)
  //})