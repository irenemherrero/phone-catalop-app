const express = require('express');
const app = express();
const phones = [
    { 
      "id": 0, 
      "title": "Iphone 7", 
      "image": "https://www.aca-electronic.com/52-thickbox_default/iphone-7-a1778-32gb-ios10-120mp-ram-2gb-4g-lte.jpg", 
      "description": "iPhone 7 Modelo A1778 4.7 pulgadas 32Gb iOS 10 12.0MP RAM 2GB Red 4G Lte, CPU Quad-core 2.34 GHz Video 2160p, Resolución 750 x 1334 píxeles", 
      "color": "black", 
      "price": "359,06 €",
      "sim": "Nano-SIM",
      "cpu": "Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)",
      "system" : "iOS 10",
      "ram": "2GB",
      "languages": ["Árabe", "Indonesio", "Danés", "Inglés", "Francés", "Griego"],
      "bands": [
                  "2G: GSM 850/900/1800 / 1900MHz",
                  "3G: WCDMA 850/900/1700/1900 / 2100MHz",
                  "4G: FDD-LTE Bandas 1/2/3/4/5/7/8/12/13/17/18/19/20/25/26/27/28/29/30"
      ],
      "screen": [
                  "Tamaño: 4.7 pulgadas",
                  "Tipo: CD IPS con retroiluminación LED, pantalla táctil capacitiva, colores 16M",
                  "Resolución: 750 x 1334 píxeles"
      ],
      "camera": [
                  "Frontal: 7 MP",
                  "Trasera: 12 MP"
      ],
      "dimensions": "138.3 x 67.1 x 7.1 mm",
      "weight": "138 g"
    },
    { 
      "id": 1, 
      "title": "Samsung Galaxi S7",
      "image": "https://www.aca-electronic.com/36-large_default/samsung-galaxy-s6-g920f-g920fd-android-50-ram-3gb-network-lte-4g.jpg", 
      "description": "Samsung Galaxy S6 G920F / G920FD Android 5.0 Ram 3GB Network Lte 4G , Bluetooth V4.1 ,  pantalla 5.1 pulgadas , Super AMOLED , Cámara trasera 16.0MP", 
      "color": "white", 
      "price": "189,75 €",
      "sim": "SIM simple (Nano-SIM) / SIM dual (Nano-SIM, doble modo de espera)",
      "cpu": "Qualcomm Snapdragon 820 Quad Core 2.15GHz + 1.6GHz",
      "system" : "Android OS 6.0",
      "ram": "4GB",
      "languages": null,
      "bands": [
                  "2G: GSM 850/900/1800 / 1900MHz",
                  "3G: WCDMA 850/900/1900 / 2100MHz",
                  "4G: LTE 700/800/850/900/1800/1900/2100 / 2600MHz"
      ],
      "screen": [
                  "Tamaño: 5.1 pulgadas",
                  "Tipo: Super AMOLED",
                  "Resolución: 2560 x 1440 píxeles"
      ],
      "camera": [
                  "Frontal: 5MP",
                  "Trasera: 12 MP"
      ],
      "dimensions": "142.4x69.6x7.9mm",
      "weight": "152g"
    },
    { 
      "id": 2, 
      "title": "Sony Xperia XZ",
      "image": "https://www.aca-electronic.com/478-thickbox_default/sony-xperia-xz-premium-g8141-ram-4gb-64gb-lte.jpg", 
      "description": "Modelo Xperia XZ Premium Versiones G8141, CSistema operativo Android 7.1, RAM 4gb, pantalla 5.46 pulgadas, pantalla IPS LCD, Resolución 3840 x 2160 píxel", 
      "color": "red", 
      "price": "411,00 €",
      "sim": "Nano-SIM",
      "cpu": "Octa-core (4x2.45 GHz Kryo y 4x1.9 GHz Kryo)",
      "system" : "Android 7.1 (Nougat), actualizable a Android 8.0 (Oreo)",
      "ram": "4 GB",
      "languages": ["Árabe", "Indonesio", "Danés", "Inglés", "Francés", "Griego"],
      "bands": [
                  "2G: GSM 850/900/1800/1900",
                  "3G: HSDPA 800/850/900/1700 (AWS) / 1900/2100",
                  "4G: banda LTE 1 (2100), 2 (1900), 3 (1800), 4 (1700/2100), 5 (850), 7 (2600), 8 (900), 12 (700), 13 (700) 17, 700, 19 800, 20 800, 26 850, 28 700, 29 700, 32 1500, 38 2600, 39 1900, 40 2300, 41 (2500)"
      ],
      "screen": [
                  "Tamaño: 5.46 pulgadas, 82.2 cm2",
                  "Tipo: IPS LCD pantalla táctil capacitiva, 16M colores",
                  "Resolución: 3840 x 2160 píxeles"
      ],
      "camera": [
                  "Frontal: 13 MP",
                  "Trasera: 19 MP"
      ],
      "dimensions": "156 x 77 x 7,9 mm",
      "weight": "195 g"
    }
  ]
app.get('/api/phones', (req, res)=>{
    res.send({phones});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log({port}));