let weather = {
  apiKey: "c6ace9060b82a93d7000e3f2b03aa351",
  pixabayApiKey: "45736498-8ea1d112b9495934a0302ccc5", // Replace with your Pixabay API key
  fetchWeather: function(city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
      )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  fetchBackgroundImage: function(city) {
    fetch(
      "https://pixabay.com/api/?key=" +
      this.pixabayApiKey +
      "&q=" +
      encodeURIComponent(city) +
      "&image_type=photo&orientation=horizontal"
    )
    .then((response) => response.json())
    .then((data) => {
      if (data.hits.length > 0) {
        document.body.style.backgroundImage = "url('" + data.hits[0].largeImageURL + "')";
      }
    });
  },
  displayWeather: function(data) {
    const {
      name
    } = data;
    const {
      icon,
      description
    } = data.weather[0];
    const {
      temp,
      humidity
    } = data.main;
    const {
      speed
    } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");

    // Fetch background image
    this.fetchBackgroundImage(name);
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function() {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Murshidabad");
let weather = {
  apiKey: "c6ace9060b82a93d7000e3f2b03aa351",
  pixabayApiKey: "YOUR_PIXABAY_API_KEY", // Replace with your Pixabay API key
  fetchWeather: function(city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
      )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  fetchBackgroundImage: function(city) {
    fetch(
      "https://pixabay.com/api/?key=" +
      this.pixabayApiKey +
      "&q=" +
      encodeURIComponent(city) +
      "&image_type=photo&orientation=horizontal"
    )
    .then((response) => response.json())
    .then((data) => {
      if (data.hits.length > 0) {
        document.body.style.backgroundImage = "url('" + data.hits[0].largeImageURL + "')";
      }
    });
  },
  displayWeather: function(data) {
    const {
      name
    } = data;
    const {
      icon,
      description
    } = data.weather[0];
    const {
      temp,
      humidity
    } = data.main;
    const {
      speed
    } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");

    // Fetch background image
    this.fetchBackgroundImage(name);
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function() {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Murshidabad");

    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Murshidabad");
