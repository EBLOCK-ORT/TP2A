const mongoclient = require('mongodb').MongoClient;
const chalk = require('chalk');

const uri = "mongodb+srv://admin:betp2@cluster0-zdy6w.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongoclient(uri, {useNewUrlParser:true, useUnifiedTopology:true});

function connectar(){
    return new Promise((resolve,reject) =>{
        client.connect((err, result) =>{
            if(!err){
                console.log(chalk.blue('Cliente conectado'));
                let collection = result.db("sample_betp2").collection("inventors");
                resolve(collection);
            } else {
                reject(err);
            }
        });
    })
};

    function insertInventor(collection){
        return new Promise((resolve,reject) =>{
            
            // insertar un nuevo inventor
            const nuevoInventor = {
                first: "Pedro",
                last: "Perez",
                year: 1987
            }
            
            collection.insertOne(nuevoInventor, (error, result) => {
                if(error){
                    reject(error);
                }else{
                    console.log(chalk.blue('inventor insertado'));
                    resolve(collection);
                }
            });
            
        })
    }

    function updateInventor(collection){
        return new Promise((resolve,reject) => {
             collection.updateOne({last:"Black"}, {$set: {year:2021}}, (error, result) => {
                if(error){
                    reject(error);
                }else{
                    console.log(chalk.blue('inventor updateado'));
                    resolve(collection);
                }
            });
          });
    }

      function deleteInventor(collection){
        return new Promise((resolve,reject) =>{
            collection.deleteOne({last:"Black"}, (error, result)=>{
                if(error){
                    reject(error);
                }else{
                    console.log(chalk.blue('inventor borrado'));
                    resolve(collection);
                }
            })
          });
      }

connectar()
.then(insertInventor)
.then(updateInventor)
.then(deleteInventor)
.catch((err)=>{
    console.log(err);
})
