let obj = [
    Profile1 =
    {
       "name": "nabith",
       "age": 24, 
       "city": "Trichy"
    },
    Profile2 = 
    {
       "name": "Imran",
       "age": 23,
       "city": "Pudukkottai"
    },
 ]

   for (let key in obj)
{
    console.log(obj[key]);
    console.log(obj[key].name);
    console.log(obj[key].age);
    console.log(obj[key].city);
};