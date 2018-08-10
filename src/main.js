import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { searchDoctors } from './doctorLookup.js';

$(document).ready(function() {
  $("form#search-form").submit(function(event) {
    event.preventDefault();
    $("#output").text("");
    $("#error").text("");
    let city = $("#city").val();
    let searchName = $("#name").val();
    let symptom = $("#symptom").val();

    let promise = searchDoctors(city, searchName, symptom);
    promise.then(function(response) {
      let body = JSON.parse(response);
      if (body.data.length === 0) {
        $("#error").text("No doctor match search criterias.");
      }
      body.data.forEach(function(doctor) {
        $("#output").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} <br>
        ${doctor.practices[doctor.practices.length-1].visit_address.street}, ${doctor.practices[doctor.practices.length-1].visit_address.city}, ${doctor.practices[doctor.practices.length-1].visit_address.state} ${doctor.practices[doctor.practices.length-1].visit_address.zip} <br>
        Phone number: ${doctor.practices[doctor.practices.length-1].phones[0].number} <br>
        Website: ${doctor.practices[doctor.practices.length-1].website} <br>
        Accept new patient: ${doctor.practices[doctor.practices.length-1].accepts_new_patients} </li><br>`)
      })
    }, function(error) {
      $("#error").text(`There was an error processing your request: ${error.message}`);
    });
    document.getElementById("search-form").reset();
  });
});
