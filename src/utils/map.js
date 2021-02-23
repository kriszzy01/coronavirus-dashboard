import L from "leaflet";
import { iconSizeByCases, commify, iconSizeByPercentage } from "./helpers";

const accessToken = process.env.REACT_APP_TOKEN;

export const tileLayer = `https://api.mapbox.com/styles/v1/kriszzy01/ckkcxmtt12ax117mn75yqjd4a/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`;
export const attribution =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

export function geoJsonToMarkers(geoJson, dataType, option) {
  return L.geoJSON(geoJson, {
    pointToLayer: markerCreator(dataType, option),
  });
}

function markerCreator(dataType, targetDataFunction) {
  return (feature, latLng) => {
    const markerProps = getMarkerProps(feature, dataType);
    const marker = L.marker(latLng, {
      icon: L.divIcon({
        className: `icon ${markerProps.class}`,
        iconSize:
          markerProps.class === "icon-ratio"
            ? iconSizeByPercentage(markerProps.size)
            : iconSizeByCases(markerProps.size),
      }),
    });

    marker.bindPopup(markerProps.html); //Add popup html markup
    marker.bindTooltip(markerProps.html); //Add tooltil to display on marker hover

    marker.on("click", ({ target: { _map: map, feature }, latlng }) => {
      targetDataFunction(feature.properties.country); //Dispatch event to set single country

      map.flyTo(latlng, 5); //Fly to a marker, zooming in with zoom level of 3
    }); //Handle Clicking a map

    return marker;
  };
}

function getMarkerProps(feature, dataType) {
  const {
    properties: { stats, active, tests, province, country },
  } = feature;

  switch (dataType) {
    case "Active":
      return {
        size: active,
        class: "icon-active",
        html: `
      <div>
          <h2>${province ? `${province},` : ""} ${country}</h2>
          <p>
            <span class="color-active">${commify(active)}</span> 
              Active Cases
          </p>
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
          <p>
            <span class="color-active">${commify(
              tests
            )}</span> Tests carried out
          </p>
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
          <p>
            <span class="color-deaths">
              ${((stats.deaths * 100) / stats.confirmed).toFixed(
                2
              )}</span>% Case-Fatality Ratio
          </p>
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
          <p>
            <span class="color-active">${commify(
              stats.confirmed
            )}</span> Cases</p>
          <p>
            <span class="color-deaths">${commify(
              stats.deaths
            )}</span> Deaths</p>
          <p>
            <span class="color-recovered">${commify(
              stats.recovered
            )}</span> Recovered</p>
      </div>
      `,
      };
  }
}
