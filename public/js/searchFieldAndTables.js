
       var app = angular.module('myApp', []);

       app.controller('customersCtrl', function($scope) {







         var results = [];

      results = [{
            "key": "80",
            "keyType": "Tambour Unit",
            "allocatedTo": "E. Matheson",
            "location": "Cupboard"
          },
          {
            "key": "80",
            "keyType": "Tambour Unit",
            "allocatedTo": "Shona Lilly",
            "location": "Cupboard"
          },
          {
            "key": "11254",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "GREEN ROOM C/B"
          },
          {
            "key": "SK54",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "IDEAS MASTER"
          },
          {
            "key": "PQ858",
            "keyType": "",
            "allocatedTo": "V. Dawod",
            "location": "KITCHEN C/B"
          },
          {
            "key": "D3108",
            "keyType": "",
            "allocatedTo": "V. Dawod",
            "location": "N329"
          },
          {
            "key": "D3062",
            "keyType": "",
            "allocatedTo": "V. Dawod",
            "location": "N332"
          },
          {
            "key": "D4134",
            "keyType": "Door Key",
            "allocatedTo": "J McCall",
            "location": "N411"
          },
          {
            "key": "45",
            "keyType": "Tambour Unit",
            "allocatedTo": "",
            "location": "N424"
          },
          {
            "key": "D4003",
            "keyType": "",
            "allocatedTo": "",
            "location": "N424"
          },
          {
            "key": "D4003",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "N424"
          },
          {
            "key": "977",
            "keyType": "Tambour Unit",
            "allocatedTo": "",
            "location": "N425"
          },
          {
            "key": "110",
            "keyType": "Pedestal",
            "allocatedTo": "Shona Lilly",
            "location": "N425"
          },
          {
            "key": "D4129",
            "keyType": "Door Key",
            "allocatedTo": "",
            "location": "N425"
          },
          {
            "key": "D4129",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "N425"
          },
          {
            "key": "D4052",
            "keyType": "Door Key",
            "allocatedTo": "P Holt",
            "location": "N426"
          },
          {
            "key": "D4131",
            "keyType": "Door Key",
            "allocatedTo": "",
            "location": "N426"
          },
          {
            "key": "D4131",
            "keyType": "",
            "allocatedTo": "V. Dawod",
            "location": "N426"
          },
          {
            "key": "D4052",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "N426A"
          },
          {
            "key": "D4133",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "N426B"
          },
          {
            "key": "D4134",
            "keyType": "",
            "allocatedTo": "V. Dawod",
            "location": "N426C"
          },
          {
            "key": "D4130",
            "keyType": "Door Key",
            "allocatedTo": "",
            "location": "N427"
          },
          {
            "key": "D4130",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "N427"
          },
          {
            "key": "10",
            "keyType": "Pedestal",
            "allocatedTo": "Desk 4",
            "location": "N428"
          },
          {
            "key": "103",
            "keyType": "Tambour Unit",
            "allocatedTo": "POST GRAD CUPBOARD",
            "location": "N428"
          },
          {
            "key": "271",
            "keyType": "Tambour Unit",
            "allocatedTo": "UG Cupboard",
            "location": "N428"
          },
          {
            "key": "937",
            "keyType": "Tambour Unit",
            "allocatedTo": "Records Cupboard",
            "location": "N428"
          },
          {
            "key": "168",
            "keyType": "Pedestal",
            "allocatedTo": "Desk 1",
            "location": "N428"
          },
          {
            "key": "D4060",
            "keyType": "Door Key",
            "allocatedTo": "",
            "location": "N428"
          },
          {
            "key": "D4060",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "N428"
          },
          {
            "key": "W8759789",
            "keyType": "Tambour Unit",
            "allocatedTo": "EXAM CUPBOARD",
            "location": "N428"
          },
          {
            "key": "10",
            "keyType": "Pedestal",
            "allocatedTo": "S. Rae",
            "location": "N428 DESK 4"
          },
          {
            "key": "SM082",
            "keyType": "",
            "allocatedTo": "",
            "location": "N428 WHITE DRAWERS L"
          },
          {
            "key": "FM118",
            "keyType": "",
            "allocatedTo": "",
            "location": "N428 WHITE DRAWERS R"
          },
          {
            "key": "TPT2425D/31",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "N428/432a JD"
          },
          {
            "key": "D4054",
            "keyType": "Door Key",
            "allocatedTo": "",
            "location": "N428A"
          },
          {
            "key": "D4075",
            "keyType": "Door Key",
            "allocatedTo": "",
            "location": "N430"
          },
          {
            "key": "D4135",
            "keyType": "Door Key",
            "allocatedTo": "",
            "location": "N431"
          },
          {
            "key": "6499",
            "keyType": "Tambour Unit",
            "allocatedTo": "H Kalutarage",
            "location": "N432"
          },
          {
            "key": "18",
            "keyType": "Tambour Unit",
            "allocatedTo": "K Hui",
            "location": "N432"
          },
          {
            "key": "18",
            "keyType": "Tambour Unit",
            "allocatedTo": "K. Hui",
            "location": "N432"
          },
          {
            "key": "49",
            "keyType": "Tambour Unit",
            "allocatedTo": "A Fryer",
            "location": "N432"
          },
          {
            "key": "96",
            "keyType": "Tambour Unit",
            "allocatedTo": "S Sturley",
            "location": "N432"
          },
          {
            "key": "100",
            "keyType": "Tambour Unit",
            "allocatedTo": "A Petrovski",
            "location": "N432"
          },
          {
            "key": "141",
            "keyType": "Tambour Unit",
            "allocatedTo": "I Arana",
            "location": "N432"
          },
          {
            "key": "152",
            "keyType": "Tambour Unit",
            "allocatedTo": "M.ZARB",
            "location": "N432"
          },
          {
            "key": "159",
            "keyType": "Tambour Unit",
            "allocatedTo": "A Fryer",
            "location": "N432"
          },
          {
            "key": "1J4073",
            "keyType": "",
            "allocatedTo": "R McDermott",
            "location": "N432"
          },
          {
            "key": "CC0305",
            "keyType": "",
            "allocatedTo": "J Campbell",
            "location": "N432"
          },
          {
            "key": "S117",
            "keyType": "Pedestal",
            "allocatedTo": "A Fryer",
            "location": "N432"
          },
          {
            "key": "S173",
            "keyType": "Pedestal",
            "allocatedTo": "K Hui",
            "location": "N432"
          },
          {
            "key": "S186",
            "keyType": "Pedestal",
            "allocatedTo": "R Lothian",
            "location": "N432"
          },
          {
            "key": "BT11",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "PETTY CASH"
          },
          {
            "key": "M0492828978",
            "keyType": "",
            "allocatedTo": "L. Morison",
            "location": "SAFE KEY"
          },
          {
            "key": "M0492828978",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "SAFE KEY"
          },
          {
            "key": "18587",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "SNACK C/B"
          },
          {
            "key": "51",
            "keyType": "Tambour Unit",
            "allocatedTo": "V. Dawod",
            "location": "ST07"
          },
          {
            "key": "181",
            "keyType": "Pedestal",
            "allocatedTo": "L. Morison",
            "location": "STAFF"
          },
          {
            "key": "D4059",
            "keyType": "Door Key",
            "allocatedTo": "",
            "location": "STORE CUPBOARD"
          },
          {
            "key": "SMK.38798",
            "keyType": "MASTER",
            "allocatedTo": "Ailsa McWhirter",
            "location": "Sub Master"
          },
          {
            "key": "SMK.38798",
            "keyType": "MASTER",
            "allocatedTo": "Erin Matheson",
            "location": "Sub Master"
          },
          {
            "key": "SMK.38798",
            "keyType": "MASTER",
            "allocatedTo": "Fiona Mathieson",
            "location": "Sub Master"
          },
          {
            "key": "SMK.38798",
            "keyType": "MASTER",
            "allocatedTo": "Shona Lilly",
            "location": "Sub Master"
          },
          {
            "key": "PMM1",
            "keyType": "",
            "allocatedTo": "Shona Lilly",
            "location": "TAMBOUR MASTER"
          },
          {
            "key": "S206",
            "keyType": "Pedestal",
            "allocatedTo": "V. Dawod",
            "location": "V. Dawod"
          },
          {
            "key": "932",
            "keyType": "",
            "allocatedTo": "V. Dawod",
            "location": "WINDOW KEY"
          },
          {
            "key": "768RA399",
            "keyType": "",
            "allocatedTo": "GREEN ROOM",
            "location": ""
          }
         ]

           $scope.results=[]

            for(var i = 0 ; i<results.length;i++){
              if(results[i].keyType==="Tambour Unit"){

                $scope.results.push(results[i])
              //  console.log($scope.result[i])

                console.log("hello");
              }
           }







  })
