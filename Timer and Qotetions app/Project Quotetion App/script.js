let qoutetions = document.getElementById("qoutetion");
let img = document.querySelector("#img img");
let name = document.querySelector("#name span");
let btn = document.getElementById("btn");


function Details(qutetion, img, name) {
    this.qoute = qutetion
    this.img = img
    this.name = name
}

let obj = [
    new Details(
        "You must be the change you wish to see in the world",
        "gandhiji.png",
        "Mahatma Gandhi"
    ),
    new Details(
        "Spread love everywhere you go. Let no one ever come to you without leaving happier",
        "Mother-Teresa.jpg",
        "Mother Teresa"
    ),
    new Details(
        "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that",
        "Martin_Luther.png",
        "Martin Luther King Jr."
    ),
    new Details(
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
        "helen-keller.png",
        "Helen Keller"
    ),
    new Details(
        "Only a life lived for others is a life worthwhile",
        "albert-einstein.png",
        "Albert Einstein"
    )
];

qoutetions.textContent = obj[0].qoute
name.textContent = obj[0].name
img.src = obj[0].img

let count = 0;

btn.addEventListener('click', () => {

    // Add fade-out animition
    qoutetions.classList.add("fade");
    img.classList.add("fade");
    name.classList.add("fade");

    setTimeout(() => {//adding setout for animation smoothness

        if (count < obj.length - 1) {
            count++;
            console.log(count)

        } else {
            count = 0;
            console.log("from else : " + count)
        }


        qoutetions.textContent = obj[count].qoute
        name.textContent = obj[count].name
        img.src = obj[count].img

        // Remove fade-out Animition
        qoutetions.classList.remove("fade");
        img.classList.remove("fade");
        name.classList.remove("fade");

    }, 800);
})
