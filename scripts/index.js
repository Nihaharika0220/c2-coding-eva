
// Add the coffee to local storage with key "coffee"

// const coffee = document.getElementById("coffee");

// const div_button = document.querySelector("#add_to_bucket");

// div_button.addEventListener("submit", async function (e) {
//   // localStorage.setItem("coffee", coffee.value);
//   e.preventDefault();
//   console.log("SUBMIT");

//   const res = await axios.get(https://masai-mock-api.herokuapp.com/coffee/menu={coffee.value}).then(function (response) {
//     console.log(response);
// });

//!! 2nd trial after the erroe with axios method failed to get the data

const url = "https://masai-mock-api.herokuapp.com/coffee/menu";

const container = document.querySelector("#menu");


fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    appendData(response.menu.data);
  })
  .catch(function (error) {
    console.log(error);
  });

function appendData(data) {
  console.log(data);
  var container= document.getElementById("menu")

  data.forEach(function (el) {
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.image;
    img.setAttribute("id","avatar")

    var price = document.createElement("h5");
    price.innerHTML = el.price;
    var name = document.createElement("h4")
    name.innerText=el.title

    var add=document.createElement("button")
    add.innerText="add coffee"

    add.addEventListener("click",function(){
        coffee(el)
    })
    box.append(img,name,price,add);
    container.append(box);
  });
}
function coffee (el){
    Arr.push(el)
    document.getElementById("coffee_count").innerText=arr.length
    localStorage.setItem("coffee",JSON.stringify)

}






