### getAllCars

```graphql
query getCars {
  getAllCars {
    id
    model
    year
    company
  }
}
```
![getAllCars](https://raw.githubusercontent.com/indahud/nodejs-graphql-mongodb-starter/main/static/getAllCars.png)
### getCar

```graphql
query getCar {
  getCar(id: "619779698be6e0dbf0e96369") {
    id
    model
    year
    company
  }
}
```
![addCar](https://raw.githubusercontent.com/indahud/nodejs-graphql-mongodb-starter/main/static/getCar.png)

### Add Car

```graphql
mutation adddCar {
  addCar(model: "Corvette Stingray",  year:  2022,  company:  "Chevrolet"){
    id
    model
    year
    company
  }
}
```
![addCar](https://raw.githubusercontent.com/indahud/nodejs-graphql-mongodb-starter/main/static/addCar.png)

### Delete Car

```graphql
mutation removeCar {
  removeCar(id: "619781fac105b71736f22450"){
    id
    model
    year
    company
  }
}
```
![removeCar](https://raw.githubusercontent.com/indahud/nodejs-graphql-mongodb-starter/main/static/removeCar.png)

### update Car

```graphql
mutation updateCar {
  updateCar(id: "619779698be6e0dbf0e96369",  model: "Mustang", year: 2020, company: "Ford") {
    id
    model
    year
    company
  }
} 
```
![updateCar](https://raw.githubusercontent.com/indahud/nodejs-graphql-mongodb-starter/main/static/updateCar.png)