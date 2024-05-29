const getColor = () => {
  //Créer trois variables pour stocker 3 chiffres aléatoires
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const color = `rgb(${red}, ${green}, ${blue})`;

  //Donner au body une couleur de fond en rgb
  document.body.style.background = color;

  //Montrer sur le body la couleur rgb
  colorCode.textContent = `${color}`;
};

setInterval(()=>{
    getColor();
}, 3000)
