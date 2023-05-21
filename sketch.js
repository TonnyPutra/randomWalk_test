class Ant {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
  }

  generalCase() {
    noStroke();
    fill(255);
    var choice = int(random(4));
    if (choice == 0) {
      this.y -= 10;
      image(up, this.x, this.y, 50, 50);
    } else if (choice == 1) {
      this.y += 10;
      image(down, this.x, this.y, 50, 50);
    } else if (choice == 2) {
      this.x += 10;
      image(right, this.x, this.y, 50, 50);
    } else {
      this.x -= 10;
      image(left, this.x, this.y, 50, 50);
    }
    if (
      this.x <= width / 2 - 400 ||
      this.x >= width / 2 + 400 ||
      this.y <= 2550 ||
      this.y >= 2850
    ) {
      this.x = width / 2;
      this.y = 2700;
    }
  }

  specialCase() {
    noStroke();
    fill(255);
    var choice = int(random(100));
    if (choice >= 0 && choice < 20) {
      this.y -= 10;
      image(up, this.x, this.y, 50, 50);
    } else if (choice >= 20 && choice < 50) {
      this.y += 10;
      image(down, this.x, this.y, 50, 50);
    } else if (choice >= 50 && choice < 95) {
      this.x += 10;
      image(right, this.x, this.y, 50, 50);
    } else {
      this.x -= 10;
      image(left, this.x, this.y, 50, 50);
    }
    if (
      this.x <= width / 2 - 400 ||
      this.x >= width / 2 + 400 ||
      this.y <= 4475 ||
      this.y >= 4775
    ) {
      this.x = width / 2;
      this.y = 4625;
    }
  }
}

function preload() {
  up = loadImage("ant up.png");
  right = loadImage("ant right.png");
  left = loadImage("ant left.png");
  down = loadImage("ant down.png");
  bg = loadImage("grass field.png");
  meme = loadImage("zoro.jpg");
  GCase = loadImage("case umum.png");
  SCase = loadImage("case khusus.png");
  hbg = loadImage("head.jpg");
  GCode = loadImage("code pure.png");
  SCode = loadImage("code special.png");
}

function setup() {
  createCanvas(windowWidth, 6000);
  ant1 = new Ant(width / 2, 2700);
  ant2 = new Ant(width / 2, 4625);
  a = createInput("");
  a.position(225, 910);

  b = createInput();
  b.position(225, 970);

  let P1 = createButton("Pause");
  P1.position(width / 2 + 350, 1080);
  P1.mousePressed(PL);

  let C2 = createButton("Play");
  C2.position(300, 2475);
  C2.mousePressed(CL);

  let P3 = createButton("Pause");
  P3.position(width / 2 + 350, 3055);
  P3.mousePressed(PL);

  let C4 = createButton("Play");
  C4.position(300, 4450);
  C4.mousePressed(CL);

  PL();
  CL();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  head();
  LatarBelakang();
  Definisi();

  textSize(20);
  fill("white");

  GeneralPart();
  SpecialPart();

  fill("white");
  text("Masukkan jumlah percobaan yang ingin dilakukan: ", 225, 900);
  text("Masukkan jumlah langkah yang ingin ditempuh: ", 225, 960);

  frameRate(6);
  ant1.generalCase();
  ant2.specialCase();

  Kesimpulan();
  DaPus();
}

function head() {
  fill("#503417");
  imageMode(CENTER);
  image(hbg, width / 2, 185, width, 370);
  textSize(25);
  textAlign(CENTER);
  fill("white");
  textStyle(BOLD);
  text("SIMULASI RANDOM WALK", width / 2, 70);
  textStyle(NORMAL);
  textSize(20);
  textAlign(LEFT);
  let a = 150; //150 first gud
  let b = 180;
  textAlign(CENTER);
  text("Putri Sari", a, b);
  text("121160003", a, b + 40);
  text("Yolanda Sari", a + 160, b);
  text("121160028", a + 160, b + 40);
  text("Meliana Debora", a + 350, b);
  text("121160042", a + 350, b + 40);
  text("Tonny Putra Yoga", a + 555, b);
  text("121160048", a + 555, b + 40);
  text("Vino Deltayana", a + 745, b);
  text("121160055", a + 745, b + 40);
  text("Nadia Marchela L.Tobing", a + 975, b);
  text("121160071", a + 975, b + 40);
  textAlign(LEFT);
}

function LatarBelakang() {
  fill("white");
  textAlign(LEFT);
  textSize(20);
  let a = 225;
  x = 425;
  text("Dalam matematika, Random Walk adalah proses acak ", a + 25, x);
  text("yang menggambarkan jalur yang terdiri dari rangkaian ", a, x + 25);
  text("langkah acak pada beberapa ruang matematika.", a, x + 50);

  //paragraf 2
  text(
    "Random Walk memiliki aplikasi untuk teknik dan banyak",
    a + 25,
    x + 100
  );
  text(
    "bidang ilmiah termasuk ekologi, psikologi, ilmu komputer, ",
    a,
    x + 125
  );
  text("fisika, kimia, biologi, ekonomi, dan sosiologi.", a, x + 150);
  imageMode(CENTER);
  image(meme, width * 0.7, x + 70, 350, 225);
}

function Definisi() {
  textAlign(CENTER);
  fill("white");
  textAlign(LEFT);
  textSize(20);
  let a = 225;
  x = 650;
  text(
    "Jalan acak, dalam teori probabilitas, adalah sebuah proses untuk menentukan kemungkinan lokasi ",
    a + 25,
    x
  );
  text(
    "suatu titik pada gerakan acak, mengingat probabilitas (sama pada setiap langkah) untuk bergerak agak ",
    a,
    x + 25
  );
  text("jauh ke beberapa arah", a, x + 50);

  //paragraf 2
  text(
    "Jalan acak adalah contoh proses Markov, di mana perilaku masa depan tidak bergantung pada ",
    a + 25,
    x + 100
  );
  text(
    "kondisi sebelumnya. Contoh tipikal adalah jalan pemabuk, di mana sebuah titik yang dimulai pada ",
    a,
    x + 125
  );
  text(
    "titik awal bidang Euclidean bergerak sejauh satu unit untuk setiap unit waktu, namun arah gerakannya ",
    a,
    x + 150
  );
  text("acak pada setiap langkah. ", a, x + 175);
}

function GeneralPart() {
  numTest = a.value();
  step = b.value();
  x0 = 0;
  y0 = 0;
  sumDist = 0;
  for (let i = 0; i < numTest; i++) {
    x = x0;
    y = y0;
    for (let j = 0; j < step; j++) {
      var choice = int(random(4));
      if (choice == 0) {
        this.y -= 1;
      } else if (choice == 1) {
        this.y += 1;
      } else if (choice == 2) {
        this.x += 1;
      } else {
        this.x -= 1;
      }
    }
    sumDist = sumDist + Math.sqrt((x - x0) ** 2 + (y - y0) ** 2);
  }
  avgDistG = sumDist / numTest;
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER);
  text("Random Walk Secara Umum", width / 2, 1050);
  textAlign(LEFT);
  textStyle(NORMAL);

  textSize(20);

  text("Gambar disamping merupakan salah satu", width / 2 + 50, 2125);
  text("contoh dari jalur pergerakan random walk", width / 2 + 50, 2150);
  text("secara umum, dengan ketentuan gerak ", width / 2 + 50, 2175);
  text("sebanyak 50 langkah", width / 2 + 50, 2200);

  //paragraf 2
  text("Peluang arah gerak ", width / 2 + 50, 2300);
  text("Utara = 25% ", width / 2 + 50, 2325);
  text("Selatan = 25%", width / 2 + 50, 2350);
  text("Timut = 25%", width / 2 + 50, 2375);
  text("Barat = 25%", width / 2 + 50, 2400);

  rect(225, 2070, 470, 375);
  image(GCase, width * 0.33, 2255, 400, 350);
  image(bg, width / 2, 2700, 800, 380);
  image(GCode, width / 2, 1575, 700, 900);
  text("Rata-rata jarak untuk kasus umum: " + avgDistG, 225, 1095);
  text(
    "Pada contoh visualisasi random walk diatas, dapat dilihat bahwa pergerakan semut sangat acak ",
    250,
    2925
  );
  text(
    "dan tidak bisa diprediksi geraknya. Semut tersebut terlihat cenderung berputar-putar. ",
    225,
    2950
  );
}

function SpecialPart() {
  numTest = a.value();
  step = b.value();
  x0 = 0;
  y0 = 0;
  sumDist = 0;
  for (let i = 0; i < numTest; i++) {
    x = x0;
    y = y0;
    for (let j = 0; j < step; j++) {
      var choice = int(random(100));
      if (choice >= 0 && choice < 20) {
        this.y -= 1;
      } else if (choice >= 20 && choice < 50) {
        this.y += 1;
      } else if (choice >= 50 && choice < 95) {
        this.x += 1;
      } else {
        this.x -= 1;
      }
    }
    sumDist = sumDist + Math.sqrt((x - x0) ** 2 + (y - y0) ** 2);
  }
  avgDistS = sumDist / numTest;
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER);
  text("Random Walk Secara Khusus", width / 2, 3025);
  textAlign(LEFT);
  textStyle(NORMAL);

  textSize(20);

  text("Gambar disamping merupakan salah satu", width / 2 + 50, 4105);
  text("contoh dari jalur pergerakan random walk", width / 2 + 50, 4130);
  text("secara khusus, dengan ketentuan gerak ", width / 2 + 50, 4155);
  text("sebanyak 50 langkah", width / 2 + 50, 4180);

  //paragraf 2
  text("Peluang arah gerak ", width / 2 + 50, 4280);
  text("Utara = 20% ", width / 2 + 50, 4305);
  text("Selatan = 30%", width / 2 + 50, 4330);
  text("Timut = 45%", width / 2 + 50, 4355);
  text("Barat = 5%", width / 2 + 50, 4380);

  rect(225, 4050, 470, 375);
  image(SCase, width * 0.33, 4240, 400, 350);
  image(bg, width * 0.5, 4675, 800, 375);
  image(SCode, width / 2, 3550, 700, 900);
  text("Rata-rata jarak untuk kasus khusus: " + avgDistS, 225, 3070);
  text(
    "Pada contoh visualisasi random walk diatas, dapat dilihat bahwa pergerakan semut cukup acak ",
    250,
    4900
  );
  text(
    "namun masih bisa dilihat bahwa semut masih cenderung bergerak ke kanan. ",
    225,
    4925
  );
}

function Kesimpulan() {
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER);
  text("Kesimpulan ", width / 2, 5000);
  textAlign(LEFT);
  textStyle(NORMAL);

  textSize(20);
  //Poin
  text(
    "1. Random Walk secara umum lebih susah ditebak arah pergerakannya, dan juga rata-rata jarak",
    225,
    5040
  );
  text("tempuhnya lebih kecil", 250, 5065);

  text(
    "2. Random Walk secara khusus pada kasus kali ini cenderung bergerak ke kanan, dan juga rata-",
    225,
    5090
  );
  text(
    "rata jarak tempuhnya lebih besar dibandingkan dengan random walk secara umum",
    250,
    5115
  );

  //Paragraf
  text(
    "Perbedaan antara keduanya diakibatkan oleh perbedaan peluang arah geraknya. Pada Random",
    250,
    5165
  );
  text(
    "walk secara umum, peluang arah gerak ke setiap arah Utara, Selatan, Timur, dan Barat sama",
    225,
    5190
  );
  text(
    "besarnya. Sedangkan secara khusus pada kasus kali ini memiliki peluang yang berbeda tiap",
    225,
    5215
  );
  text(
    "arahnya, dimana peluang bergerak ke Barat (kanan) paling besar",
    225,
    5240
  );
}

function DaPus() {
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER);
  text("Daftar Pustaka ", width / 2, 5315);
  textAlign(LEFT);
  textStyle(NORMAL);

  textSize(20);
  text(
    "Angela B. Shiflet and George W. Shiflet. 2014. Introduction to Computational Science: Modeling and",
    225,
    5355
  );
  text(
    "Simulation for the Sciences (Second Edition) (2nd. ed.). Princeton University Press, USA.",
    300,
    5380
  );
  text(
    "Britannica, The Editors of Encyclopaedia. 'Markov process'. Encyclopedia Britannica, 7 Apr. 2023,",
    225,
    5405
  );
  text(
    " https://www.britannica.com/science/Markov-process. Accessed 18 May 2023",
    300,
    5430
  );
}

function PL() {
  noLoop();
}

function CL() {
  loop();
}
