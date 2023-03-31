import {tracks} from './text.js';

class TrackBox extends HTMLElement {
  connectedCallback() {
    const id = this.attributes.id.value;
    const trackDetail = tracks[id];
    var clss = "";
    if (this.attributes.center) {
      clss = "custom-container-center"
    }
    this.innerHTML = `
    <div class="img-box b-${id} ${clss}">
      <a href="tracks.html#${id}">
        <img src=${trackDetail.img_src} alt="">
        <div class="btn-box">
          <h1>Round ${id}</h1>
          <p>${trackDetail.description}</p>
        </div>
      </a>
    </div>
`
  }
}


function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}


class CarouselIndicators extends HTMLElement {
  connectedCallback() {
    var model1 =`<ol class="carousel-indicators">`
    var model2 = `<ol class="carousel-indicators indicator-2">`

    const firstItem = `<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active indicator-li-1">01</li>`
    model1 += firstItem;
    model2 += firstItem;
    for (let i = 1; i < Object.keys(tracks).length; i++) {
      const no = addLeadingZeros(i+1, 2);
      const listItem = `<li data-target="#carouselExampleIndicators" data-slide-to=${i}>${no}</li>`
      model1 += listItem;
      model2 += listItem;
    }
    model1 += '</ol>';
    model2 += '</ol>';

    this.innerHTML = model1 + model2;
  }
}


class TrackCarousel extends HTMLElement {
  connectedCallback() {
    const id = this.attributes.id.value;
    const trackDetail = tracks[id];

    var model = `
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-10 move-right-sm">
            <div class="detail-box">
              <h1>
                Round <span>${id}</span>
              </h1>
              <p>
                ${trackDetail.description}
              </p>
              <div class="btn-box">
                <a class="btn-1" href=${trackDetail.leaderboard_link}>
                  Leaderboards
                </a>
                <a class="btn-2" href=${trackDetail.build_link}>
                  Build it Yourself
                </a>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-md-2">
            <div class="img-box">
              <img src=${trackDetail.img_src} alt="">
            </div>
          </div>
        </div>
      </div>
    </div>`;

    this.innerHTML = model;
  }
}
customElements.define('track-box', TrackBox);
customElements.define('track-carousel', TrackCarousel);
customElements.define('carousel-indicators', CarouselIndicators);