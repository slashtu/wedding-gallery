import React, { Component, PropTypes } from 'react'

var svg = '<defs>' +
		  	'<mask id="mask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">'+
			'<image width="100%" height="100%" xlink:href="http://www.antiblanks.com/static/animatedheart.proto/img/heart-mask-inverted.png"></image>'+
			'</mask>'+
			'</defs>'+
			'<foreignObject width="100%" height="100%" style="mask: url(#mask);">'+
			'<div class="cards">'+
			'<img class="cards-image" src="img/po.jpg" />'+
			'</div>'+
			'</foreignObject>'

var style = {
	display: 'none'
}

export default class DesktopApp extends Component {

	render() {

		return(
			<div>
				<div className="gallery">
			        <div id="ri-grid" className="ri-grid ri-grid-size-1 ri-shadow">
			          <ul>
			            <li><a href="#"><img src="img/gallery/1.jpg"/></a></li>
			            <li><a href="#"><img src="img/gallery/2.jpg"/></a></li>
			            <li><a href="#"><img src="img/gallery/3.jpg"/></a></li>
			            <li><a href="#"><img src="img/gallery/4.jpg"/></a></li>
			            <li><a href="#"><img src="img/gallery/5.jpg"/></a></li>
			            <li><a href="#"><img src="img/gallery/6.jpg"/></a></li>
			            <li><a href="#"><img src="img/gallery/7.jpg"/></a></li>
			            <li><a href="#"><img src="img/gallery/8.jpg"/></a></li>
			            <li><a href="#"><img src="img/gallery/9.jpg"/></a></li>
			            <li><a href="#"><img src="img/gallery/10.jpg"/></a></li>
			        
			          </ul>
			        </div>       
			    </div>
				<div id="animatedHeart" className="animated-heart">
			      <div className="cards-container">
			        <div className="cards-mask">
			          <svg dangerouslySetInnerHTML={{__html: svg }} />
			        </div>
			      </div>
			      <div style={style}>
			        <div className="card-container-template">
			          <div className="card card-1">
			            <div className="front-crop">
			              <div className="front"></div>
			            </div>
			            <div className="back-crop">
			              <div className="back"></div>
			            </div>
			          </div>
			          <div className="card card-2 flip">
			            <div className="front-crop">
			              <div className="front"></div>
			            </div>
			            <div className="back-crop">
			              <div className="back"></div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
		    </div>
		)
	}
}