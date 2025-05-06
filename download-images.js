
const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    name: 'tamago.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Tamagoyaki.jpg'
  },
  {
    name: 'panini.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Chicken_Panini_with_Mozzarella.jpg'
  },
  {
    name: 'steak.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Argentinian_steak_with_chimichurri.jpg'
  },
  {
    name: 'masala_oats.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Masala_oats.jpg'
  },
  {
    name: 'veggie_pita.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Veggie_Pita.jpg'
  },
  {
    name: 'enchiladas.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vegetarian_enchiladas.jpg'
  },
  {
    name: 'tofu_bibimbap.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Korean_Tofu_Bibimbap.jpg'
  },
  {
    name: 'stir_fry.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_fried_vegetables.jpg'
  },
  {
    name: 'chickpea_stew.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Garbanzo_bean_stew.jpg'
  }
];

const targetDir = path.join(__dirname, 'public', 'images', 'meals');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

images.forEach(({ name, url }) => {
  const filePath = path.join(targetDir, name);
  const file = fs.createWriteStream(filePath);
  https.get(url, res => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${name}`);
    });
  }).on('error', err => {
    fs.unlinkSync(filePath);
    console.error(`Failed to download ${name}: ${err.message}`);
  });
});

