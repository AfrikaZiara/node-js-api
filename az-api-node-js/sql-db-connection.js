var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "frenx",
    password: "Pokerface1994",
    database:"afrikaziara_db"

});

// connect to db

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO tour_operators (tour_operator_id,name,description,phone,email) VALUES('1','Kichaka Tours','Kichaka Tours and Travel Limited','+254 791 800 525','info@kichakatours.co.ke')";
    con.query(sql,  function (err, result) {
        if (err) throw err;
        console.log("1 record inserted: " );
    });
});
/*// create database
con.query("CREATE DATABASE afrikaziara_db",function (err,result) {
    if (err) throw err;
    console.log("Database created");
    
});*/
// create table tour_operator
/*var sql = "CREATE TABLE tour_operators (" +
    "tour_operator_id integer NOT NULL," +
    "name character varying(255)," +
    "description character varying(255)," +
    "packages_id character varying(255)," +
    "website_url character varying(255),registration_date date," +
    "phone character varying(255)," +
    "email character varying(255)," +
    "facebook_url character varying(255)," +
    "twitter_url character varying(255))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});*/


// creating table tour az_users
/*var sql = "CREATE TABLE az_users (" +
    "user_id integer NOT NULL," +
    "username character varying(255)," +
    "fname character varying(255)," +
    "last_name character varying(255)," +
    "role character varying(255)," +
    "registration_date date," +
    "email character varying(255)," +
    "password character varying(255))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});*/


// creating table tour tour_bookings
/*
var sql = "CREATE TABLE tour_bookings (" +
    "booking_id integer NOT NULL," +
    "tourist_id integer," +
    "tour_package_id integer," +
    "booking_date date," +
    "prefered_travel_date date," +
    "number_of_adults integer," +
    "number_of_kids integer," +
    "preffered_hotel character varying(255)," +
    "number_of_rooms integer)";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
*/

// creating table tour tour_packages
/*
var sql = "CREATE TABLE tour_packages (" +
    "tour_package_id integer NOT NULL," +
    "title character varying(255)," +
    "image_url character varying(255)," +
    "description character varying(255)," +
    "video_url character varying(255)," +
    "itenerary character varying(255)," +
    "from_date date)";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
*/



// creating table tour tourists
/*var sql = "CREATE TABLE tourists (" +
    "tourist_id integer NOT NULL," +
    "first_name character varying(255)," +
    "other_names character varying(255)," +
    "host_country character varying(255)," +
    "destination character varying(255)," +
    "tour_package_id character varying(255)," +
    "registration_date date," +
    "nationality character varying(255))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});*/











