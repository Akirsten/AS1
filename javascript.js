
      function techIndustry() {
        let name = prompt("What is your name?");
        let tech = prompt("Are you ready to dive into world of tech? ");
        let age = prompt("How old are you?");

        if (age < 15) {
          alert("Maybe try to explore a variety of career choices!");
        } else {
          alert("You can start you journey!👩‍💻");
        }

        let h1 = document.querySelector("h1");
        h1.innerHTML =
          "Wishing you the best " + name + ", in the tech industry! 👩‍💻";
      }
      let button = document.querySelector("button");
      button.addEventListener("click", techIndustry);
    