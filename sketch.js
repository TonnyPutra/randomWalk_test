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
  }
}

function preload() {
  up = loadImage("ant up.png");
  right = loadImage("ant right.png");
  left = loadImage("ant left.png");
  down = loadImage("ant down.png");
  bg = loadImage("grass field.png");
  meme = loadImage("zoro.jpg");
  headbg = loadImage("head.jpg");
}

function setup() {
  frameRate(5);
  createCanvas(windowWidth, 3600);
  ant1 = new Ant(0, 0);
  a = createInput();
  a.position(50, 960);
  a.changed(GeneralDist);
  GeneralDist();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#e5cfab");
  head();
  LatarBelakang();
  Definisi();
  RumusanMasalah();
  Tujuan();

  fill("#2c6d93");
  rect(30, 930, width / 2 - 60, 125);
  fill("white");
  text("Masukkan jumlah percobaan yang ingin dilakukan: ", 50, 950);
  //GeneralDist();

  text("rata-rata jarak adalah: " + GeneralDist(), 50, 1000);
  // image(bg, 0, 0, width, height);
  // translate(width / 2, height / 2);
  // ant1.movement_step();
}

function head() {
  fill("#503417");
  rect(0, 0, width, 370);
  textSize(30);
  textAlign(CENTER);
  fill("white");
  textStyle(BOLD);
  text("RANDOM WALK", width / 2, 40);
  textStyle(NORMAL);
  textSize(25);
  textAlign(LEFT);
  let a = 100;
  let b = 50;
  text("Anggota Kelompok :", b, a);
  text("121160003 - Putri Sari", b, a + 40);
  text("121160028 - Yolanda Sari ", b, a + 80);
  text("121160042 - Meliana Debora", b, a + 120);
  text("121160048 - Tonny Putra Yoga", b, a + 160);
  text("121160055 - Vino Deltayana", b, a + 200);
  text("121160071 - Nadia Marchela L.Tobing", b, a + 240);
  imageMode(CENTER);
  image(meme, width * 0.75, 205, 500, 250);
}

function LatarBelakang() {
  fill("#2c6d93");
  rect(30, 400, width / 2 - 60, 250);
  textSize(25);
  textAlign(CENTER);
  fill("white");
  text("Latar Belakang", width * 0.25, 435);
  textAlign(LEFT);
  textSize(20);
  let a = 60;
  text("Dalam matematika, Random Walk adalah proses acak yang ", a + 25, 475);
  text("menggambarkan jalur yang terdiri dari rangkaian langkah acak", a, 500);
  text("pada beberapa ruang matematika.", a, 525);
  text("Random Walk memiliki aplikasi untuk teknik dan banyak", a + 25, 575);
  text(
    "bidang ilmiah termasuk ekologi, psikologi, ilmu komputer, fisika,",
    a,
    600
  );
  text("kimia, biologi, ekonomi, dan sosiologi.", a, 625);
}

function Definisi() {
  fill("#28bbb8");
  rect(width / 2 + 30, 400, width / 2 - 60, 275);
  textSize(25);
  textAlign(CENTER);
  fill("white");
  text("Definisi", width * 0.75, 435);
  textAlign(LEFT);
  textSize(20);
  let a = width / 2 + 50;
  text("Jalan acak mengacu pada gerakan yang tampaknya acak dari", a + 25, 475);
  text("suatu kesatuan.", a, 500);
  text(
    "Jenis simulasi komputer tertentu yang melibatkan kisi-kisi",
    a + 25,
    550
  );
  text("adalah otomata seluler", a, 575);
  text(
    "Otomata seluler adalah model komputasi dinamis yang terpisah",
    a + 25,
    625
  );
  text("ruang, keadaan, dan waktu.", a, 650);
}

function RumusanMasalah() {
  fill("#28bbb8");
  rect(30, 725, width / 2 - 60, 165);
  textSize(25);
  textAlign(CENTER);
  fill("white");
  text("Rumusan Masalah", width * 0.25, 760);
  textAlign(LEFT);
  textSize(20);
  let a = 60;
  text("1. Bagaimanakah gambaran dari random walk secara umum? ", a, 800);
  text("2. Bagaimana jika ada peluang berbeda untuk setiap arah", a, 840);
  text(" geraknya? (kasus khusus)", a + 20, 865);
}

function Tujuan() {
  fill("#2c6d93");
  rect(width / 2 + 30, 725, width / 2 - 60, 125);
  textSize(25);
  textAlign(CENTER);
  fill("white");
  text("Tujuan", width * 0.75, 760);
  textAlign(LEFT);
  textSize(20);
  let a = width / 2 + 50;
  text("Mensimulasikan dan menvisualisasikan random walk secara", a + 25, 800);
  text("umum dan dengan kasus khusus.", a, 825);
}

function GeneralDist() {
  frameRate(60);
  const numTest = a.value();
  step = 50;
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
  avgDist = sumDist / numTest;
  return avgDist;
}
