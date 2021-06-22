class Fetch {
    async getCurrent(input) {
      const myKey = "cdb925e0038ab71f0c5e89ef34a73298      ";
  
      //make request to url
  
      const response = await fetch(
      //  `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }
  