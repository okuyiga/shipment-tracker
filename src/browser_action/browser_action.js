"use strict";

const url_usps = "https://tools.usps.com/go/TrackConfirmAction.action?tLabels=";

const log = document.getElementById("log");

// TODO: Add dropdown selector for source
const frm_add_tracking_number = document.getElementById("frm_add_tracking_number");
const txt_add_tracking_number = document.getElementById("txt_add_tracking_number");
const btn_add_tracking_number = document.getElementById("btn_add_tracking_number");

btn_add_tracking_number.addEventListener("click", add_tracking_number);

function main() {

	// TODO: Inital startup check looping through tracking_numbers
}

/*
 * Adds a tracking number to tracking_numbers and checks it"s status
 */
function add_tracking_number() {

	var tracking_number = txt_add_tracking_number.value;

	// TODO: Actual validation per source
	if (isNaN(tracking_number))
	{
		alert("Attempted to add invalid tracking_number: " + tracking_number);
	}
	else
	{
		alert("Adding tracking_number to tracking_numbers: " + tracking_number);
		// TODO: Add to tracking_numbers

		check_shipping_status("usps", tracking_number);
	}
	frm_add_tracking_number.reset();
}

/*
 * Checks the shipping status of a tracking number, taking a source and tracking number
 */
function check_shipping_status(source, tracking_number) {

	alert("Checking shipping status on tracking_number: " + tracking_number + " from source: " + source);

	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", reqListener);
	xhr.tracking_number = tracking_number;

	// TODO: Add logic for handling other sources
	if (source == "usps") {
		xhr.open("GET", url_usps + tracking_number, true);
		xhr.send();
	}
}

/*
 * Catches the response from check_shipping_status and prints to the log
 */
function reqListener (xhr) {
  var $sel = $(this.responseText);
  var status = artoo.scrape($sel.find("div.tracking-progress > div.progress-indicator > h2"), "text")[0];
  log.innerHTML += xhr.target.tracking_number + "\t" + status + "<br/>";
}

main();