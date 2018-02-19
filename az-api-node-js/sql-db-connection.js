var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "frenx",
  password: "Pokerface1994"
});


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");*/

 	// creating DB

/*	con.query("CREATE DATABASE afrikaziara_db", function (err, result) {
	if (err) throw err;
    console.log("Database created");*/

	// creating table tour uperators
    /*var sql = "CREATE TABLE tour_operators (tour_operator_id integer NOT NULL,name character varying(255),description character varying(255),packages_id character varying(255),website_url character varying(255),registration_date date,phone character varying(255),email character varying(255),facebook_url character varying(255),twitter_url character varying(255))";
	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");*/

    // creating table tour az_users
    /*var sql = "CREATE TABLE az_users (user_id integer NOT NULL,username character varying(255),fname character varying(255),last_name character varying(255),role character varying(255),registration_date date,email character varying(255),password character varying(255))";
	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");*/


    // creating table tour tour_bookings
    /*var sql = "CREATE TABLE tour_bookings (booking_id integer NOT NULL,tourist_id integer,tour_package_id integer,booking_date date,prefered_travel_date date,number_of_adults integer,number_of_kids integer,preffered_hotel character varying(255),number_of_rooms integer)";
	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");*/

    // creating table tour tour_packages
   /* var sql = "CREATE TABLE tour_packages (tour_package_id integer NOT NULL,title character varying(255),image_url character varying(255),description character varying(255),video_url character varying(255),itenerary character varying(255),from_date date)";
	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");*/

    // creating table tour tourists
/*    var sql = "CREATE TABLE tourists (tourist_id integer NOT NULL,first_name character varying(255),other_names character varying(255),host_country character varying(255),destination character varying(255),tour_package_id character varying(255),registration_date date,nationality character varying(255))";
	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO tour_operators (name,description,packages_id,website_url,registration_date,phone,email,facebook_url, twitter_url) VALUES ?";
  var values = [
    ['Kichaka Tours', 'Kichaka Tours and Travel Limited has been established to offer quality tours and travel services. Kichaka means bush in Kiswahili. The company is incorporated in Kenya and it is licensed by the Tourism Regulation Authority to', '1,2,3,4,5' , 'www.kichakatours.co.ke' , '02-18-2018' , '+254 791 800 525' , 'info@kichakatours.co.ke' , 'https://web.facebook.com/toursafariskenya/' , 'https://web.twitter.com/toursafariskenya/'],
    ['Adventure Junkies', 'This is a well respected company offering tours to groups and individuals about Ghana, often, as you’d imagine, on the more adventurous side of things. There are day trips, weekend getaways, heritage tours and safari tours', '8,5,6' , 'http://www.adventurejunkiesgh.com/' , '02-18-2018' , '+233(0)244259659' , 'info@adventurejunkiesgh.com' , 'https://www.facebook.com/adventurejunkiesgh/' , 'https://www.twiter.com/adventurejunkiesgh'],
    
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
