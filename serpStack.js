
var sitePDFS = {};
var siteIndex = {};

// This .on("click") function will trigger the AJAX Call
function serpStackOrganic (domain) {
  // Here we grab the text from the input box
  var domain = $("#domain-input").val();
  console.log(`serpStack organic index on : ${domain}`);
  // This URL will bring back URLS that have been indexed by Google on the target site
  var indexQueryURL = "http://api.serpstack.com/search?access_key=5c4fa6a3ae084b3efa8ac881ced4f4a4&query=site%3A" + domain + "&num=1000";
  // Google Index Call
  $.ajax({
    url: indexQueryURL,
    method: "GET"
  }).then(function(response) {
    siteIndex = response;
    console.log(siteIndex);
  });
  return siteIndex;
};

function serpStackPDF (domain) {
  // Here we grab the text from the input box
  var domain = $("#domain-input").val();
  console.log(`serpStack PDF search on : ${domain}`);
  // This URL will bring back URLs that have been indexed by Google on the target site with PDF files
  var fileTypeQueryURL = "http://api.serpstack.com/search?access_key=5c4fa6a3ae084b3efa8ac881ced4f4a4&query=filetype%3Apdf+site%3A" + domain + "&num=100";

    // Google Index Call with PDF Files
  $.ajax({
      url: fileTypeQueryURL,
      method: "GET"
    }).then(function(response) {
      sitePDFS = response;
      console.log(sitePDFS);
  });
};

// example JSON from call
// https://api.hunter.io/v2/domain-search?domain=digg.com&api_key=e56287fadf01a9610b2c26209a772ffc0832c728