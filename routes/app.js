const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  res.render('select', {
    result: [],
  });
});

router.post('/printCountry', (req, response) => {
  let url = 'http://apis.data.go.kr/1741000/StanReginCd/getStanReginCdList';
  let queryParams =
    '?' +
    encodeURIComponent('serviceKey') +
    process.env.SERVICE_KEY;
  queryParams +=
    '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
  queryParams +=
    '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('3');
  queryParams +=
    '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json');
  queryParams +=
    '&' +
    encodeURIComponent('locatadd_nm') +
    '=' +
    encodeURIComponent(req.body.dodo + ' ' + req.body.sisi);

  axios.get(url + queryParams).then(async (res) => {
    let numberCode = await res.data.StanReginCd[1].row[0].region_cd.substr(
      0,
      5
    );
    url =
      'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade';
    queryParams =
      '?' +
      encodeURIComponent('serviceKey') +
      process.env.SERVICE_KEY;
    queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + numberCode;
    queryParams +=
      '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('201512');
    axios.get(url + queryParams).then(async (res) => {
      numberCode = await res.data.response.body.items.item;
      console.log(numberCode);
      response.render('select', {
        result: numberCode,
      });
    });
  });
});

module.exports = router;