// Copyright (c) 2014 Phillip Coleman. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function parseComicSearchResults(data) {
	alert(data.results[0].name + " " + data.results[0].date + " " + data.results[0].publisher.name + " " + data.results[0].resource_type);
}

function processComicSearch(e) {
    if (e.preventDefault) e.preventDefault();

        /* do what you want with the form */
  var searchQuery = document.getElementById('comic_query').value;
  var jqhxr = jQuery.get(
    "https://www.comicvine.com/api/search/",
    {format: 'json', api_key : '55280dcca750420db5b1bd348568105186d81fb6', query : searchQuery, limit : 10, sort: 'start_year:desc', field_list : 'resource_type,name,start_year,publisher', resources: 'character,volume,person,story_arc'},
    function () {
      console.log("Success");
    }
  )
    .done(parseComicSearchResults)
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });

  // You must return false to prevent the default form behavior
  return false;
}


