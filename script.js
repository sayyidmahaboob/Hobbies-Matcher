function hobbyMatch() {
  let hobbiesA = [];
  let hobbiesB = [];
  let hobbiesCommon = [];

  // Access Values from Inputs and Push in Arrays
  inputsA = document.getElementById("person1").querySelectorAll("input");
  inputsB = document.getElementById("person2").querySelectorAll("input");
  inputsA.forEach((input) => hobbiesA.push(input.value));
  inputsB.forEach((input) => hobbiesB.push(input.value));

  //Filter out Common Elements
  hobbiesCommon = hobbiesA.filter((hobby) => hobbiesB.includes(hobby));

  //Create li Elements for each element in hobbiesCommon Array
  document.getElementById("output").innerHTML = null;
  hobbiesCommon.forEach((hobby) => {
    let li = document.createElement("li");
    li.innerText = hobby;
    document.getElementById("output").appendChild(li);
  });
}

document.getElementById("find").addEventListener("click", hobbyMatch);
