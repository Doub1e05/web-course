// 1
function sumArray(nums){
    var result = 0;
    for (var i = 0; i < nums.length; i += 1){
        result += nums[i];
    }
    console.log(result);
}

sumArray([1,2,3,4])

// 2
function findMax(nums){
    var mx = nums[0];
    for (var i = 1 ; i < nums.length; i += 1){
        if (mx < nums[i]){
            mx = nums[i];
        }
    }
    console.log(mx);
}

findMax([1,0,11,2,4]);

// 3

result = {
  "products": [
    { "id": 1, "name": "Laptop", "category": "Electronics", "price": 1000 },
    { "id": 2, "name": "Book", "category": "Education", "price": 20 },
    { "id": 3, "name": "Phone", "category": "Electronics", "price": 500 },
    { "id": 4, "name": "Pen", "category": "Office", "price": 2 }
  ]
};

// Нужно преобразовать в:
/**
* {
* "Electronics": [
*   { "productName": "Laptop", "price": 1000 },
*    { "productName": "Phone", "price": 500 }
*  ],
*  "Education": [
*    { "productName": "Book", "price": 20 }
*  ],
*  "Office": [
*    { "productName": "Pen", "price": 2 }
*  ]
* }
**/

function groupByCategory(data) {
  let result = {};
  for (let i = 0; i < data["products"].length; i += 1){
    let category = data["products"][i]["category"];
    if (result[category] == null){
        result[category] = [{"productName" : data["products"][i]["name"],  "price" : data["products"][i]["price"]}]
    }
    else{
        result[category].push({"productName" : data["products"][i]["name"],  "price" : data["products"][i]["price"]});
    }
  }
  console.log(result);
}

groupByCategory(result)