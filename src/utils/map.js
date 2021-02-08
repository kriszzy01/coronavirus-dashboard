import L from "leaflet";
import { iconSizeByCases, commify, iconSizeByPercentage } from "./helpers";

export function geoJsonToMarkers(geoJson, dataType) {
  return L.geoJSON(geoJson, {
    pointToLayer: markerCreator(dataType),
  });
}

function markerCreator(dataType) {
  return (feature, latLng) => {
    const markerProps = getMarkerProps(feature, dataType);

    return L.marker(latLng, {
      icon: L.divIcon({
        className: `icon ${markerProps.class}`,
        iconSize:
          markerProps.class === "icon-ratio"
            ? iconSizeByPercentage(markerProps.size)
            : iconSizeByCases(markerProps.size),
      }),
    }).bindPopup(markerProps.html);
  };
}

function getMarkerProps(feature, dataType) {
  const {
    properties: { stats, active, tests, province, country },
  } = feature;

  switch (dataType) {
    case "Active Cases":
      return {
        size: active,
        class: "icon-active",
        html: `
      <div>
          <h2>${province ? `${province},` : ""} ${country}</h2>
          <p>Active Cases: ${commify(active)}</p>
      </div>
      `,
      };

    case "Tests":
      return {
        size: tests / 25,
        class: "icon-tests",
        html: `
      <div>
          <h2>${province ? `${province},` : ""} ${country}</h2>
          <p>Tests: ${commify(tests)}</p>
      </div>
      `,
      };

    case "Case-Fatality Ratio":
      return {
        size: (stats.deaths * 100) / stats.confirmed,
        class: "icon-ratio",
        html: `
      <div>
          <h2>${province ? `${province},` : ""} ${country}</h2>
          <p>Case-Fatality Ratio: ${(
            (stats.deaths * 100) /
            stats.confirmed
          ).toFixed(2)}%</p>
      </div>
      `,
      };

    default:
      return {
        size: stats.confirmed,
        class: "",
        html: `
      <div>
          <h2>${province ? `${province},` : ""} ${country}</h2>
          <p>Cases: ${commify(stats.confirmed)}</p>
          <p>Deaths: ${commify(stats.deaths)}</p>
          <p>Recovered: ${commify(stats.recovered)}</p>
      </div>
      `,
      };
  }
}
