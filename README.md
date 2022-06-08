<div align="center">
    <img src="/uploads/ccd200caef406a8354f1f0d7b99ba63a/logo.jpg" width="150">
    <h3 align="center">Search For Apartment Transactions</h3>
    <p align="center">원하는 아파트의 실거래가를 알려드립니다 !</p>
</div>
<br>
#### Contents
  
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-startedinstallation">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li> 
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#data-source">Data source</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>


# About the project


### 지역별 아파트🏘의 실거래가가 궁금하시다구요?
<br>
##### 저희 웹페이지를 방문하여
##### 원하는 아파트를 찾아보세요 !
<br>

## 핵심기능
#### 지역별 아파트 실거래가 검색 기능
+ 원하는 지역 선택, 검색
+ 해당 지역의 아파트 목록 확인
+ 원하는 아파트의 실거래가 확인

#### 상세 정보 안내 기능
+ 네이버 부동산 사이트 하이퍼링크 연결

<br>

# Getting Started (Installation)
1. node.js 설치
2. .env
  'SERVICE_KEY={YOUR_SERVICE_KEY}'

3. ```git clone http://khuhub.khu.ac.kr/2021105641/search_for_apartment_transactions.git```
4. 
   ```
   npm install express
   npm install path
   npm install npm install ejs path body-parser
   npm i -save dotenv
   npm install axios
   npm install
   ```
5. 실행하기<br>
   ```node server.js```
6. url 검색<br>
   localhost:8080/

# Usage
<div align="center">
<h5>간략한 기능 안내</h5>
<img src="/uploads/ee5c928eabc7e5ec4b0f0383ee2eb3e0/슬라이드1.JPG" width="1000"></img>
<h5>지역 선택 기능</h5>
<img src="/uploads/30d22ccfcaccd0e267ba13d4bde23f00/슬라이드2.JPG" width="1000"></img>
<h5>실거래가 확인</h5>
<img src="/uploads/3741d1237c27a5a148a3568cca7d2bb7/슬라이드3.JPG" width="1000"></img>
<h5>‘아파트’ 하이퍼링크</h5>
<img src="/uploads/93a6462b2069457d70a6ac20f847c73b/슬라이드4.JPG" width="1000"></img>
<h5>부동산 페이지 접속</h5>
<img src="/uploads/a6599f5dd4015de2cca7dc913f147dc6/슬라이드5.JPG" width="1000"></img>
<h5>부동산 페이지 상세 정보 확인</h5>
<img src="/uploads/d795e6f91d7efed2a5b3bda6c54b4b2f/슬라이드6.JPG" width="1000"></img>
</div>

# Roadmap
+ 지역선택 select 함수로 구현 (시/도, 시/군/구, 읍/면/동 직접 리스트로 입력)
+ 국토교통부_아파트매매 실거래 상세 자료 API 연결
+ backend-frontend 연결 (router, get, post 등 이용)
+ /printCountry로 실거래가 확인 페이지 구현
+ 지역 검색 시 실거래가 확인 데이터 table로 구현
+ 가독성을 위해 아파트 이름 순으로 table 정렬
+ 아파트 이름 클릭 시 부동산 사이트로 하이퍼링크 연결 구현
+ footer 구현 (khuhub 연결 하이퍼링크)
+ css 구현
+ AWS로 배포

# Contributing
프로젝트에 기여하고 싶으신 분들은 아래 절차를 따라주시기 바랍니다.
```
    1. 프로젝트 fork
    2. feature branch 생성 (git checkout -b feature/name)
    3. commit (git commit -m "Add feature)
    4. push (git push origin feature/name)
    5. pull request 생성
    
    Pull request는 최대한 빨리 확인하도록 하겠습니다. 

```
pull request 포함 문의사항은 [📧contact](#contact) 으로 연락 부탁드립니다.
# License
'아파트 매매 실거래가 검색 웹페이지' 프로젝트는 MIT License에 따라 배포됩니다.
자세한 내용은 ```LICENSE.txt```를 참고해주십시오.


source of information : 국토교통부_아파트매매 실거래 상세 자료
Copyright 2022. Jeonghyein&Sonsumin. All Rights Reserved.

# Contact
- 2021105641 정혜인 | jhi2359@khu.ac.kr
- 2021105609 손수민 | breath12@khu.ac.kr