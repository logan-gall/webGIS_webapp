require(["esri/views/MapView", "esri/WebMap"], function (MapView, WebMap) {
  const webmapIds = [
    "f22953c568c646f08ccef7731c15f433",
    "02f0b4b239f9432a8bdf6d79a041808f",
    "ee43ea63aa534e43a7d0915a0a06fea5",
    "d4a2e2c8ea9f496187b7311f973421a6",
    "549810b791df4ec594493f5f6412cdff",
    "5218090e72e4488f98ed161ccf43b707"
  ];

  let currentIndex = 0;

  let webmap = new WebMap({
    portalItem: {
      id: webmapIds[currentIndex]
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });

  const button = document.getElementById("clickButton");
  button.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % webmapIds.length;

    // Load the next webmap
    webmap = new WebMap({
      portalItem: {
        id: webmapIds[currentIndex]
      }
    });

    view.map = webmap;
  });
});
