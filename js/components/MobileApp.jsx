import React, { Component, PropTypes } from 'react'
import async from 'async'

const sets = 
[ 
  '72157671538788591', // wedding party
  '72157667930809982', // wedding
  '72157669345758536', // Rock
  '72157667966744151', // fingers
  '72157666811761724',  // 2015-03-Okinawa
  '72157669434631825',  // 2015-03-Tokyo
  '72157668998665691',  // 2015-03-Osaka
]

let index = 0;

export default class MobileApp extends Component {

  renderPhotosBySetId = ( callback ) => {
    $.ajax({
      // Flickr API is SSL only:
      // https://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
      url: 'https://api.flickr.com/services/rest/',
      data: {
          user_id: '142478112@N07',
          photoset_id: sets[index], 
          format: 'json',
          // method: 'flickr.people.getPhotos',
          method: 'flickr.photosets.getPhotos',
          api_key: '7aa3ef388299f4637883fc3f2398b76a' 
      },

      dataType: 'jsonp',
      jsonp: 'jsoncallback'

    }).done(function (result) {
        
        var carouselLinks = [],
            linksContainer = $('#links'),
            baseUrl;

        // Add the demo images as links with thumbnails to the page:
        $.each(result.photoset.photo, function (index, photo) {
            baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;
            $('<a/>')
                .append($('<img>').prop('src', baseUrl + '_q.jpg').prop('class', 'small'))
                .prop('href', baseUrl + '_b.jpg')
                .prop('title', photo.title)
                .attr('data-gallery', '')
                .appendTo(linksContainer);
            carouselLinks.push({
                href: baseUrl + '_c.jpg',
                title: photo.title
            });
        });

        index ++
        callback(null, sets[index-1])
      })
    }

	componentDidMount(){
    async.series([
      this.renderPhotosBySetId,
      this.renderPhotosBySetId,
      this.renderPhotosBySetId,
      this.renderPhotosBySetId,
      this.renderPhotosBySetId,
      this.renderPhotosBySetId,
      this.renderPhotosBySetId,
    ],
      (err, result) => {console.log(result)});
	}

	render() {
		return(

			<div id="links" className="links"></div>
		)
	}
}