Refer [Laboratory](https://github.com/mightysimran/javascript-dev-laboratory)

---

`Color Theme Switcher - script.js`

```javascript
let body = document.querySelector("body");
let colors = document.querySelectorAll(".color");

// console.log(colors)
colors.forEach(function (color) {
  color.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "orangered") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "gold") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "mediumslateblue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "darkslateblue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "chartreuse") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "lime") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "springgreen") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "dodgerblue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "chocolate") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "silver") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

---

`mCal | Maintenance Calorie Calculator - script.js`

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const g = document.querySelector("input[name='g']:checked")?.value;
  const weight = parseFloat(document.querySelector("#weight").value);
  const height = parseFloat(document.querySelector("#height").value);
  const age = parseFloat(document.querySelector("#age").value);
  const activity_level = document.querySelector("#activity-level").value;

  let bmr;
  let activity_factor;
  let maintenanceCalories;

  if (g && weight && height && age && activity_level) {
    if (g == "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (g == "female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    if (activity_level == "sedentary") {
      activity_factor = 1.2;
      maintenanceCalories = bmr * activity_factor;
    } else if (activity_level == "lightly-active") {
      activity_factor = 1.375;
      maintenanceCalories = bmr * activity_factor;
    } else if (activity_level == "moderately-active") {
      activity_factor = 1.55;
      maintenanceCalories = bmr * activity_factor;
    } else if (activity_level == "very-active") {
      activity_factor = 1.725;
      maintenanceCalories = bmr * activity_factor;
    } else if (activity_level == "super-active") {
      activity_factor = 1.9;
      maintenanceCalories = bmr * activity_factor;
    }
    results.innerHTML = `${maintenanceCalories.toFixed(2)} calories/day`;
  }
});
```

---
