const request = require('request');

const url = 'https://www.icalendar37.net/lunar/api/?';

const year =  (new Date).getFullYear()
const month = (new Date).getMonth()    
const configMoon = {    
    //month 		: month + 1,
    year  		: year,    
    lightColor	: "rgb(255,255,100)", 
    shadeColor	: "black",
    lang        : "pt" 
}

module.exports = {
    getMonth: (month, callback) => {
        const gets = [];
        for (let i in configMoon) 
            gets.push(i + '=' + encodeURIComponent(configMoon[i]));
        
        gets.push("LDZ=" + new Date(configMoon.year,configMoon.month-1,1) / 1000);
        gets.push("month=" + month)
        request.get(url + gets.join('&'), null, (error, response) => {
            if (error) console.log(error);
            else callback(response);
        });
            
    }
}
