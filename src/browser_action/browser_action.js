const url_usps = "https://tools.usps.com/go/TrackConfirmAction.action?tLabels=";

var response_element = document.getElementById("response_element")

function main() {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", reqListener);
	xhr.open("GET", url_usps + "", true);
	xhr.send();
}

function check_shipping_status(source, tracking_number) {

	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", reqListener);

	if (source == "usps") {
		xhr.open("GET", url_usps + tracking_number, true);
		xhr.send();
	}
}

function reqListener () {
  var $sel = $(this.responseText);
  var status = artoo.scrape($sel.find("div.tracking-progress > div.progress-indicator > h2"), 'text')[0];
  console.log(response_element)
  response_element.innerHTML = status;
}

main();