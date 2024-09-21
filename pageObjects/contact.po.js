const { expect } = require ('@playwright/test');

exports.contactPage= class contactPage
{
    constructor(page)
    {
        this.page=page;
        this.firstName='//*[@id="firstName"]';
        this.lastName='//*[@id="lastName"]';
        this.birthdate='//*[@id="birthdate"]';
        this.email='//*[@id="email"]';
        this.phone='//*[@id="phone"]';
        this.streetone='//*[@id="street1"]';
        this.streettwo='//*[@id="street2"]';
        this.city='//*[@id="city"]';
        this.stateprovince='//*[@id="stateProvince"]';
        this.postalcode='//*[@id="postalCode"]';
        this.country='//*[@id="country"]';
        this.addcontact='//button[@id="add-contact"]';
        this.submitbutton='//button[@id="submit"]';
        this.viewcreatedcontact='//td[text()="Rachana Maskey"]';
        this.submitvalidation='//p[text()="Click on any contact to view the Contact Details"]';
        this.invalidsubmit='//span[@id="error"]';
        this.savedfname='//span[@id="firstName"]';
        this.savedlname='//span[@id="lastName"]';
        this.savedbirthdate='//span[@id="birthdate"]';
        this.savedemail='//span[@id="email"]';
        this.savedphone='//span[@id="phone"]';
        this.savedstreetone='//span[@id="street1"]';
        this.savedstreettwo='//span[@id="street2"]';
        this.savedcity='//span[@id="city"]';
        this.savedstateprovince='//span[@id="stateProvince"]';
        this.savedpostalcode='//span[@id="postalCode"]';
        this.savedcountry='//span[@id="country"]';
    }

    async submit(firstName,lastName,birthdate,email,phone,street1,street2,city,stateprovince,postalcode,country)
    {
        await this.page.locator(this.addcontact).click();
        await this.page.locator(this.firstName).fill(firstName);
        await this.page.locator(this.lastName).fill(lastName);
        await this.page.locator(this.birthdate).fill(birthdate);
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.phone).fill(phone);
        await this.page.locator(this.streetone).fill(street1);
        await this.page.locator(this.streettwo).fill(street2);
        await this.page.locator(this.city).fill(city);
        await this.page.locator(this.stateprovince).fill(stateprovince);
        await this.page.locator(this.postalcode).fill(postalcode);
        await this.page.locator(this.country).fill(country);  
        await this.page.locator(this.submitbutton).click();
    }
    // async verifySubmit()
    // {
    //     await this.page.locator(this.submitbutton).click();
    // }
    async verifyValidSubmit()
    {
        await expect(this.page.locator(this.submitvalidation)).toBeVisible();
    }
    async verifyInvalidSubmit()
    {
        await expect(this.page.locator(this.invalidsubmit)).toBeVisible();
    }

    async viewcontact()
    {
       // await expect(this.page.locator(this.viewcreatedcontact)).click();
        await this.page.locator(this.viewcreatedcontact).click();
    }

    async validateContactCreated(firstName,lastName,birthdate,email,phone,street1,street2,city,stateprovince,postalcode,country)
    {
        const fnameValidation=await this.page.locator(this.savedfname);
        const lnameValidation=await this.page.locator(this.savedlname);
        const birthDateValidation=await this.page.locator(this.savedbirthdate);
        const emailValidation=await this.page.locator(this.savedemail);
        const phoneValidation=await this.page.locator(this.savedphone);
        const street1Validation=await this.page.locator(this.savedstreetone);
        const street2Validation=await this.page.locator(this.savedstreettwo);
        const cityValidation=await this.page.locator(this.savedcity);
        const stateprovinceValidation=await this.page.locator(this.savedstateprovince);
        const postalcodeValidation=await this.page.locator(this.savedpostalcode);
        const countryValidation=await this.page.locator(this.savedcountry);
        await expect (fnameValidation).toHaveText(firstName);
        await expect (lnameValidation).toHaveText(lastName);
        await expect (birthDateValidation).toHaveText(birthdate);
        await expect (emailValidation).toHaveText(email);
        await expect (phoneValidation).toHaveText(phone);
        await expect (street1Validation).toHaveText(street1);
        await expect (street2Validation).toHaveText(street2);
        await expect (cityValidation).toHaveText(city);
        await expect (stateprovinceValidation).toHaveText(stateprovince);
        await expect (postalcodeValidation).toHaveText(postalcode);
        await expect (countryValidation).toHaveText(country);
       
    }

    // async contactEdit(firstName){
    //     await this.page.locator(this.editContact).click();
    //     await this.page.waitForTimeout(2000);
    //     await this.page.locator(this.firstName).clear();
    //     await this.page.locator(this.firstName).fill(firstName);
    //     await this.page.waitForTimeout(2000);
    //     await this.page.locator(this.Save).click();

        
    // }
}
