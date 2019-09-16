const cron = require('cron');
const axios = require('axios');
var fs = require("fs"); 

async function getUser() {
    try {
      const response = await axios.get('http://data.fixer.io/api/latest?access_key=5b15bdc7527fc834bfa01d9067be9fd8');
      const data = response.data;
      if(data.success){
        fs.writeFile('./public/data/data.json', JSON.stringify(data), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
      }
    } catch (error) {
      console.error(error);
    }
}

const job = new cron.CronJob({
  cronTime: '0 */1 * * * *', // Chạy Jobs vào 23h30 hằng đêm
  onTick: function() {
    getUser()
    console.log('Cron jub runing...32');
  },
  start: true, 
  timeZone: 'Asia/Ho_Chi_Minh' // Lưu ý set lại time zone cho đúng 
});

job.start();