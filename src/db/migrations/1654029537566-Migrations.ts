import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1654029537566 implements MigrationInterface {
  name = 'Migrations1654029537566';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "star_wars" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "height" varchar NOT NULL, "mass" varchar NOT NULL, "hair_color" varchar NOT NULL, "skin_color" varchar NOT NULL, "eye_color" varchar NOT NULL, "birth_year" varchar NOT NULL, "gender" varchar NOT NULL, "url" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(1,'C-3PO','167','75','n/a','gold','yellow','112BBY','n/a','https://swapi.dev/api/people/2/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(2,'R2-D2','96','32','n/a','white, blue','red','33BBY','n/a','https://swapi.dev/api/people/3/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(3,'Leia Organa','150','49','brown','light','brown','19BBY','female','https://swapi.dev/api/people/5/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(4,'R5-D4','97','32','n/a','white, red','red','unknown','n/a','https://swapi.dev/api/people/8/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(5,'Biggs Darklighter','183','84','black','light','brown','24BBY','male','https://swapi.dev/api/people/9/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(6,'Obi-Wan Kenobi','182','77','auburn, white','fair','blue-gray','57BBY','male','https://swapi.dev/api/people/10/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(7,'Anakin Skywalker','188','84','blond','fair','blue','41.9BBY','male','https://swapi.dev/api/people/11/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(8,'Wilhuff Tarkin','180','unknown','auburn, grey','fair','blue','64BBY','male','https://swapi.dev/api/people/12/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(9,'Chewbacca','228','112','brown','unknown','blue','200BBY','male','https://swapi.dev/api/people/13/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(10,'Han Solo','180','80','brown','fair','brown','29BBY','male','https://swapi.dev/api/people/14/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(11,'Greedo','173','74','n/a','green','black','44BBY','male','https://swapi.dev/api/people/15/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(12,'Jabba Desilijic Tiure','175','1,358','n/a','green-tan, brown','orange','600BBY','hermaphrodite','https://swapi.dev/api/people/16/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(13,'Wedge Antilles','170','77','brown','fair','hazel','21BBY','male','https://swapi.dev/api/people/18/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(14,'Jek Tono Porkins','180','110','brown','fair','blue','unknown','male','https://swapi.dev/api/people/19/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(15,'Yoda','66','17','white','green','brown','896BBY','male','https://swapi.dev/api/people/20/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(16,'Palpatine','170','75','grey','pale','yellow','82BBY','male','https://swapi.dev/api/people/21/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(17,'Boba Fett','183','78.2','black','fair','brown','31.5BBY','male','https://swapi.dev/api/people/22/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(18,'IG-88','200','140','none','metal','red','15BBY','none','https://swapi.dev/api/people/23/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(19,'Bossk','190','113','none','green','red','53BBY','male','https://swapi.dev/api/people/24/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(20,'Lando Calrissian','177','79','black','dark','brown','31BBY','male','https://swapi.dev/api/people/25/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(21,'Lobot','175','79','none','light','blue','37BBY','male','https://swapi.dev/api/people/26/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(22,'Ackbar','180','83','none','brown mottle','orange','41BBY','male','https://swapi.dev/api/people/27/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(23,'Mon Mothma','150','unknown','auburn','fair','blue','48BBY','female','https://swapi.dev/api/people/28/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(24,'Arvel Crynyd','unknown','unknown','brown','fair','brown','unknown','male','https://swapi.dev/api/people/29/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(25,'Wicket Systri Warrick','88','20','brown','brown','brown','8BBY','male','https://swapi.dev/api/people/30/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(26,'Nien Nunb','160','68','none','grey','black','unknown','male','https://swapi.dev/api/people/31/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(27,'Qui-Gon Jinn','193','89','brown','fair','blue','92BBY','male','https://swapi.dev/api/people/32/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(28,'Nute Gunray','191','90','none','mottled green','red','unknown','male','https://swapi.dev/api/people/33/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(29,'Finis Valorum','170','unknown','blond','fair','blue','91BBY','male','https://swapi.dev/api/people/34/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(30,'Padmé Amidala','185','45','brown','light','brown','46BBY','female','https://swapi.dev/api/people/35/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(31,'Jar Jar Binks','196','66','none','orange','orange','52BBY','male','https://swapi.dev/api/people/36/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(32,'Roos Tarpals','224','82','none','grey','orange','unknown','male','https://swapi.dev/api/people/37/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(33,'Rugor Nass','206','unknown','none','green','orange','unknown','male','https://swapi.dev/api/people/38/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(34,'Ric Olié','183','unknown','brown','fair','blue','unknown','male','https://swapi.dev/api/people/39/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(35,'Watto','137','unknown','black','blue, grey','yellow','unknown','male','https://swapi.dev/api/people/40/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(36,'Sebulba','112','40','none','grey, red','orange','unknown','male','https://swapi.dev/api/people/41/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(37,'Quarsh Panaka','183','unknown','black','dark','brown','62BBY','male','https://swapi.dev/api/people/42/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(38,'Shmi Skywalker','163','unknown','black','fair','brown','72BBY','female','https://swapi.dev/api/people/43/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(39,'Darth Maul','175','80','none','red','yellow','54BBY','male','https://swapi.dev/api/people/44/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(40,'Bib Fortuna','180','unknown','none','pale','pink','unknown','male','https://swapi.dev/api/people/45/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(41,'Ayla Secura','178','55','none','blue','hazel','48BBY','female','https://swapi.dev/api/people/46/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(42,'Ratts Tyerel','79','15','none','grey, blue','unknown','unknown','male','https://swapi.dev/api/people/47/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(43,'Dud Bolt','94','45','none','blue, grey','yellow','unknown','male','https://swapi.dev/api/people/48/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(44,'Gasgano','122','unknown','none','white, blue','black','unknown','male','https://swapi.dev/api/people/49/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(45,'Ben Quadinaros','163','65','none','grey, green, yellow','orange','unknown','male','https://swapi.dev/api/people/50/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(46,'Mace Windu','188','84','none','dark','brown','72BBY','male','https://swapi.dev/api/people/51/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(47,'Ki-Adi-Mundi','198','82','white','pale','yellow','92BBY','male','https://swapi.dev/api/people/52/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(48,'Kit Fisto','196','87','none','green','black','unknown','male','https://swapi.dev/api/people/53/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(49,'Eeth Koth','171','unknown','black','brown','brown','unknown','male','https://swapi.dev/api/people/54/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(50,'Adi Gallia','184','50','none','dark','blue','unknown','female','https://swapi.dev/api/people/55/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(51,'Saesee Tiin','188','unknown','none','pale','orange','unknown','male','https://swapi.dev/api/people/56/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(52,'Yarael Poof','264','unknown','none','white','yellow','unknown','male','https://swapi.dev/api/people/57/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(53,'Plo Koon','188','80','none','orange','black','22BBY','male','https://swapi.dev/api/people/58/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(54,'Mas Amedda','196','unknown','none','blue','blue','unknown','male','https://swapi.dev/api/people/59/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(55,'Gregar Typho','185','85','black','dark','brown','unknown','male','https://swapi.dev/api/people/60/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(56,'Cordé','157','unknown','brown','light','brown','unknown','female','https://swapi.dev/api/people/61/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(57,'Cliegg Lars','183','unknown','brown','fair','blue','82BBY','male','https://swapi.dev/api/people/62/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(58,'Poggle the Lesser','183','80','none','green','yellow','unknown','male','https://swapi.dev/api/people/63/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(59,'Luminara Unduli','170','56.2','black','yellow','blue','58BBY','female','https://swapi.dev/api/people/64/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(60,'Barriss Offee','166','50','black','yellow','blue','40BBY','female','https://swapi.dev/api/people/65/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(61,'Dormé','165','unknown','brown','light','brown','unknown','female','https://swapi.dev/api/people/66/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(62,'Dooku','193','80','white','fair','brown','102BBY','male','https://swapi.dev/api/people/67/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(63,'Bail Prestor Organa','191','unknown','black','tan','brown','67BBY','male','https://swapi.dev/api/people/68/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(64,'Jango Fett','183','79','black','tan','brown','66BBY','male','https://swapi.dev/api/people/69/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(65,'Zam Wesell','168','55','blonde','fair, green, yellow','yellow','unknown','female','https://swapi.dev/api/people/70/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(66,'Dexter Jettster','198','102','none','brown','yellow','unknown','male','https://swapi.dev/api/people/71/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(67,'Lama Su','229','88','none','grey','black','unknown','male','https://swapi.dev/api/people/72/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(68,'Taun We','213','unknown','none','grey','black','unknown','female','https://swapi.dev/api/people/73/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(69,'Jocasta Nu','167','unknown','white','fair','blue','unknown','female','https://swapi.dev/api/people/74/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(70,'R4-P17','96','unknown','none','silver, red','red, blue','unknown','female','https://swapi.dev/api/people/75/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(71,'Wat Tambor','193','48','none','green, grey','unknown','unknown','male','https://swapi.dev/api/people/76/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(72,'San Hill','191','unknown','none','grey','gold','unknown','male','https://swapi.dev/api/people/77/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(73,'Shaak Ti','178','57','none','red, blue, white','black','unknown','female','https://swapi.dev/api/people/78/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(74,'Grievous','216','159','none','brown, white','green, yellow','unknown','male','https://swapi.dev/api/people/79/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(75,'Tarfful','234','136','brown','brown','blue','unknown','male','https://swapi.dev/api/people/80/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(76,'Raymus Antilles','188','79','brown','light','brown','unknown','male','https://swapi.dev/api/people/81/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(77,'Sly Moore','178','48','none','pale','white','unknown','female','https://swapi.dev/api/people/82/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(78,'Tion Medon','206','80','none','grey','black','unknown','male','https://swapi.dev/api/people/83/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(79,'Beru Whitesun lars','165','75','brown','light','blue','47BBY','female','https://swapi.dev/api/people/7/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(80,'Darth Vader','202','136','none','white','yellow','41.9BBY','male','https://swapi.dev/api/people/4/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(81,'Owen Lars','178','120','brown, grey','light','blue','52BBY','male', 'https://swapi.dev/api/people/6/')`,
    );
    await queryRunner.query(
      `INSERT INTO star_wars VALUES(82,'Luke Skywalker','172','77','blond','fair','blue','19BBY','male','https://swapi.dev/api/people/1/')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "star_wars"`);
  }
}
