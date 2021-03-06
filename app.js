const express = require('express');
const path = require('path');
const convert = require('xml-js');
const request = require('request');
const xml2js = require('xml2js');
const bodyParser = require('body-parser');
const router = express.Router();
let apart = [];


router.get('/', (req, res) => {
  let info = {};
  let _do =  req.body._do;
  let _si =  req.body._si;

  let url = 'http://apis.data.go.kr/1741000/StanReginCd/getStanReginCdList';
  let queryParams = '?' + encodeURIComponent('serviceKey') + '=8JvnS7XWSe2s6wWWMroPmGYFhztv2waNUOClhSjvV1T1PE0cUw2XYuoQVmsvp26Z1a5KprSeR9FXZgEs9qPfvw==';
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('3');
  queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json');
  queryParams += '&' + encodeURIComponent('locatadd_nm') + '=' + encodeURIComponent(_do + ' '+ _si);

  request({
      url: url + queryParams,
      method: 'GET'
  }, function (error, response, body) {
      // console.log('Status', response.statusCode);
      // console.log('Headers', JSON.stringify(response.headers));
      // console.log('Reponse received', body);

      // const code = JSON.parse(body);
      // let region2 = code.StanReginCd[1].row[0].region_cd;
      // let region = region2.substr(0,5);
  
      let url = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade';
      let queryParams = '?' + encodeURIComponent('serviceKey') + '=8JvnS7XWSe2s6wWWMroPmGYFhztv2waNUOClhSjvV1T1PE0cUw2XYuoQVmsvp26Z1a5KprSeR9FXZgEs9qPfvw==';
      queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent("11110");
      queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('201512');
      
      request(
          {
            url: url + queryParams,
            method: 'GET',
          },
          function (error, response, body) {
            const parser = new xml2js.Parser();

            parser.parseStringPromise(body).then(async function (result) {
                const info2 = JSON.stringify(result);
                info = JSON.parse(info2);
                if(info.response.body[0].totalCount[0] == 0) {
                  apart = {};
                }
                else {
                  apart = await info.response.body[0].items[0].item.map((list) => ({
                  ?????????: list['?????????'][0],
                  ??????: list['??????'][0],
                  ?????????: list['?????????'][0],
                  ????????????: list['????????????'][0],
                  ????????????:  list['????????????'][0],
                  ???: list['???'][0],
                  ????????????:   '2021',
                  ?????????: list['???'][0],
                  ?????????: list['???'][0],
                  ????????????: list['????????????'][0]
                  }))
                }
            })
                .catch(function (err) {});
              });
            });
            console.log(typeof apart);
            res.render('select', {
              result:apart
            });
});

module.exports = router;
