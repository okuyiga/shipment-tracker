const url_usps = 'https://tools.usps.com/go/TrackConfirmAction.action?tLabels=';
const response_element = document.getElementById('response_element')

const txt_add_tracking_number = document.getElementById('txt_add_tracking_number')
const btn_add_tracking_number = document.getElementById('btn_add_tracking_number')

btn_add_tracking_number.addEventListener('click', add_tracking_number);

function main() {

}

function add_tracking_number() {
	check_shipping_status('usps', txt_add_tracking_number.value);
}

function check_shipping_status(source, tracking_number) {

	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', reqListener);

	if (source == 'usps') {
		xhr.open('GET', url_usps + tracking_number, true);
		xhr.send();
	}
}

function reqListener () {
  var $sel = $(this.responseText);
  var status = artoo.scrape($sel.find('div.tracking-progress > div.progress-indicator > h2'), 'text')[0];
  response_element.innerHTML = status;
}

main();