const { data   } =require('./datasource.json');
const { _ } = require('lodash');

module.exports =
{
    Fnshowname:function()
    {
    console.log("My Full name is Vishal Dattatray Yewale");
    },
    FnshowFirstname:function()
    {
        console.log("My First Name is Vishal");
    },
    FnshowMiddelname:function()
    {
        console.log("My Middel Name is Dattatray");
    },
    Fnshowlastname:function()
    {
        console.log("My Last Name is Yewale");
    },
    funshowpersondatalist : function()
    {
         return data;
    }
    
    

    





}
 
 

 