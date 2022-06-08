const convert = require('xml-js');
const request = require('request');
const xml2js = require('xml2js');

var url = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=8JvnS7XWSe2s6wWWMroPmGYFhztv2waNUOClhSjvV1T1PE0cUw2XYuoQVmsvp26Z1a5KprSeR9FXZgEs9qPfvw=='; /* Service Key*/
queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent('11110'); /* */
queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('201512'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    //console.log('Status', response.statusCode);
    //console.log('Headers', JSON.stringify(response.headers));
    //console.log('Reponse received', body);

    const parser = new xml2js.Parser();
    parser.parseStringPromise(body).then(function (result) {
    console.log("resultCode:", result.response.header[0].resultCode[0]);
    
    const json = JSON.stringify(result);
    console.log(json);
    }).catch(function (err) {
    });
});


