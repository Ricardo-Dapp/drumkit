document.addEventListener("keydown", (e) => {
  if (e.key == "w") {
    console.log("pressed w");
    document.getElementById("kick").play();
  }

  if (e.key == "e") {
    console.log("pressed e");
    document.getElementById("snare").play();
  }

  if (e.key == "q") {
    console.log("pressed q");
    document.getElementById("closed-Hihat").play();
  }

  if (e.key == "d") {
    console.log("pressed d");
    document.getElementById("clap").play();
  }
  if (e.key == "s") {
    console.log("pressed s");
    document.getElementById("open-Hihat").play();
  }
});
