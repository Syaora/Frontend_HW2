var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbsArray();
  thumbnails.forEach(addThumbClickHandler);
}

function randomTacoCat() {
  'use strict';
  var random = Math.floor(Math.random() * 5);
  var thumbnails = getThumbsArray();
  thumbnails[random].setAttribute('data-image-url', 'img/tacocat.jpg');
}

function resetUrl(thumb) {
  'use strict';
  var origin = thumb.getAttribute('href');
  thumb.setAttribute('data-image-url', origin);
}

function foundMe(thumb) {
  'use strict';
  thumb.addEventListener('dblclick', function (event) {
    event.preventDefault();
    var thumbnails = getThumbsArray();
    thumbnails.forEach(resetUrl;
  });
}

randomTacoCat();
initializeEvents();
