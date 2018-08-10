import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { searchByName } from './doctorLookup.js';

$(document).ready(function() {
  $("form#name-form").submit(function(event) {
    event.preventDefault();
    $("#output").text("");
    let searchName = $("#name").val();
    let symptom = $("#symptom").val();

    let promise = searchByName(searchName, symptom);
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body.data);
      body.data.forEach(function(doctor) {
        $("#output").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}
        ${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}
        ${doctor.practices[0].phones[0].number}
        Accept new patient: ${doctor.practices[0].accepts_new_patients} </li>`)
      })
    }, function(error) {
      $("#output").text(`There was an error processing your request: ${error.message}`);
    });
  });
});
