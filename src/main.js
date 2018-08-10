import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { searchDoctors } from './doctorLookup.js';

$(document).ready(function() {
  $("form#name-form").submit(function(event) {
    event.preventDefault();
    $("#output").text("");
    $("#error").text("");
    let searchName = $("#name").val();
    let symptom = $("#symptom").val();

    let promise = searchDoctors(searchName, symptom);
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      if (body.data.length === 0) {
        $("#error").text("No doctor match search criterias.");
      }
      body.data.forEach(function(doctor) {
        $("#output").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name} <br>
        ${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip} <br>
        Phone number: ${doctor.practices[0].phones[0].number} <br>
        Accept new patient: ${doctor.practices[0].accepts_new_patients} </li>`)
      })
    }, function(error) {
      $("#error").text(`There was an error processing your request: ${error.message}`);
    });
  });
});
