  var map;

  DG.then(function () {
    map = DG.map('map', {
      center: [42.911610, 74.612846],
      zoom: 17
    });
    var myIcon = L.icon({
      iconUrl: 'assets/img/marker.svg',
      iconSize: [55, 74],
    });
    DG.marker([42.911610, 74.612846], {
      icon: myIcon
    }).addTo(map).bindPopup('г.Бишкек, ул. 155');

  });
