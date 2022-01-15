const dotenv = require('dotenv');
const envPath = './.env' ;
dotenv.config({ path: envPath});

const problem = process.env.CURR_PROB;
if (problem != undefined) {
  const funcDebug = require(`${__dirname}/${problem}.ts`);  
  console.log("Loaded function: ",funcDebug);



  console.log(funcDebug("Your parms here"));

  
}
else
{
    console.log(envPath)
    //console.log(process.env);
    console.log('env not defined');
}