const express = require('express');
const convert = require('xml-js');
const request = require('request');
const xml2js = require('xml2js');

let app = express();

app.get('/index', (req, res) => {
    var _do = req._do;
    var _si = req._si;

    var url = 'http://apis.data.go.kr/1741000/StanReginCd/getStanReginCdList';
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=8JvnS7XWSe2s6wWWMroPmGYFhztv2waNUOClhSjvV1T1PE0cUw2XYuoQVmsvp26Z1a5KprSeR9FXZgEs9qPfvw==';
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('3'); /* */
    queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /* */
    queryParams += '&' + encodeURIComponent('locatadd_nm') + '=' + encodeURIComponent(_do + ' '+ _si); /* */

    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        // console.log('Status', response.statusCode);
        // console.log('Headers', JSON.stringify(response.headers));
        // console.log('Reponse received', body);

        const code = JSON.parse(body);
        const region2 = code.StanReginCd[1].row[0].region_cd;
        var region = region2.substr(0,5);
    
        var url = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade';
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=8JvnS7XWSe2s6wWWMroPmGYFhztv2waNUOClhSjvV1T1PE0cUw2XYuoQVmsvp26Z1a5KprSeR9FXZgEs9qPfvw=='; /* Service Key*/
        queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent(region); /* */
        queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('202112'); /* */
        
        request(
            {
              url: url + queryParams,
              method: 'GET',
            },
            function (error, response, body) {
              const parser = new xml2js.Parser();
          
              parser.parseStringPromise(body).then(function (result) {
                  const info2 = JSON.stringify(result);
                  const info = JSON.parse(info2);
                  console.log(info.response.body[0].items[0].item[0]);
                  console.log(
                    info.response.body[0].items[0].item.map((list) => ({
                      법정동: list['법정동'][0],
                      지번: list['지번'][0],
                      아파트: list['아파트'][0],
                      건축년도: list['건축년도'][0],
                      전용면적:  list['전용면적'][0],
                      층: list['층'][0],
                      거래년도: 2021,
                      거래월: list['월'][0],
                      거래일: list['일'][0],
                      거래금액: list['거래금액'][0]
                    }))
                  );
                })
                .catch(function (err) {});
            }
          );


    res.send(info);
    });
})

app.listen(8080, function(err) {
    if(err){
       console.log(err);
       } else {
       console.log("listen:8080");
    }
});
