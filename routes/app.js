require("dotenv").config();
const express = require('express');
const path = require('path');
const convert = require('xml-js');
const request = require('request');
const xml2js = require('xml2js');
const bodyParser = require('body-parser');
const { processors } = require("xml2js");
const router = express.Router();
let apart = {};


router.get('/', (req, res) => {
  let info = {};
  let _do =  req.body._do;
  let _si =  req.body._si;

  let url = 'http://apis.data.go.kr/1741000/StanReginCd/getStanReginCdList';
  let queryParams = '?' + encodeURIComponent('serviceKey') + process.env.SERVICE_KEY; // 서비스키 입력
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

      const code = JSON.parse(body);
      let region2 = code.StanReginCd[1].row[0].region_cd;
      let region = region2.substr(0,5);
      console.log(region);
      
      let url = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade'; 
      let queryParams = '?' + encodeURIComponent('serviceKey') + process.env.SERVICE_KEY; // 서비스키 입력
      queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent(region);
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
                  법정동: list['법정동'][0],
                  지번: list['지번'][0],
                  아파트: list['아파트'][0],
                  건축년도: list['건축년도'][0],
                  전용면적:  list['전용면적'][0],
                  층: list['층'][0],
                  거래년도:   '2021',
                  거래월: list['월'][0],
                  거래일: list['일'][0],
                  거래금액: list['거래금액'][0]
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