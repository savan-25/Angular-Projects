
const{MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function GetConnection()  // userdefined function
{   
    //step 1   connect -method of mongodb
    let result = await client.connect();
    //step 2 Marvellous name of database
    let db = result.db("Marvellous");
    //step3  Batches name of collection
    return db.collection("Batches");//this method will return promise
}
async function ReadData() 
{
      let data  = await GetConnection();
      // find() is inbuilt function returns value in one line then 
      data = await data.find().toArray();
      console.log("Data retrived from database : ");
      console.log(data);   
}
async function InsertData() 
{
      let data  = await GetConnection();
      //InsertOne():insert data into Collection
      let result = await data.insertOne({
        "Name" : "Python", "Fees" : "22000", "Duration" : "2.5 months"
      });
      if(result.acknowledged)
      {
        console.log("Data inserted succesfully");
      }
}
async function DeleteData()
{
    let data  = await GetConnection();
    // it is like where clause in sql -> Name:is not right way -> we have to use ID
    let result = await data.deleteOne({"Name" : "Python"});

    if(result.acknowledged)
    {
        console.log('Data Deleted Successfully');
        
    }

}
async function UpdateData()
{
    let data = await GetConnection();
    //$set appan ekhadya key la specific value in replace karto
    let result = await data.updateOne({"Name":"Python"},{$set : {"Fees":"2514"}});
    if(result.acknowledged)
    {
        console.log('Data is Updated Successfully');
        
    }
}
function main()
{
    let ret;

    ret = GetConnection();
    console.log(ret);  //catching return - promise{ pending }
    console.log("Database connection is succesfull");//it is technically wrong - because still it is pending
    ReadData();

   //InsertData();
   //DeleteData();

    // UpdateData();
}

main();