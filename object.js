const products = {
    name:'laptop',
    color:'Red',
    brand:['samsung','lenovo','HP'],
    price:{
        samsung:30000,
        lenovo:29000,
        HP:2500
    }
}
const samsungPrice= products.price.samsung
const Brand = products.brand[1]
const keys = Object.keys(products)
const values = Object.values(products)
console.log(samsungPrice,Brand,keys,values)