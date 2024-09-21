const axios = require('axios');
import {expect} from '@playwright/test';
const cookie=require('cookie');

let apiUrl

async function getApiBaseUrl(){
    apiUrl = process.env.API_BASE_URL;
    if(!apiUrl){
        apiUrl='https://thinking-tester-contact-list.herokuapp.com/'
    }
    return apiUrl;
}


async function createEntity(userData,accessToken,module,{request}){
    const apirUrl=await getApiBaseUrl();
    const headers={
        'Content-Type':'application/json',
        'Accept':'application/json',
        'authorization':"Bearer "+accessToken,
    };
    const response=await request.post(apiUrl+module,{
        headers,
        data:JSON.stringify(userData),
    });

    const responseBody = await response.json();
    const statusCode = response.status();
    expect(statusCode).toBe(201);
    if(responseBody).toBe()
}

async function authenticateUser(usernmae,password,{request}){
    const apiUrl = await getApiBaseUrl();
    const headers={
        'Content-Type':'application/json',
    };
    const requestBody={
        email:username,
        password:password
    };
    const response = await request.post(apiUrl+"/users/login",{
        data:JSON.stringify(requestBody),
        headers,
    });
    const statusCode = response.status();
    expect(statusCode).toBe(200);
    const cookiesHeader = response.headers()('set-cookie');
    expect(cookiesHeader).toBeDefined();
    let token;
    if (typeof cookiesHeader==='string'){
        if(cookiesHeader.includes('token=')){
            token=cookiesHeader.split('token=')[1].split(';')[0].trim();
        }
    } else if (Array.isArray(cookiesHeader)){
        for(const cookie of cookiesHeader){
            if(cookie.includes('token')){
                token=cookie.split('token=')[1].split(';')[0].trim();
                break;
            }
        }
        
    }   else{
        console.log("Unexpected format for set-cookie header.");
    }
    expect(token).toBeDefined();
    return token;
}