import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

interface Props {
  width: string;
  height: string;
  ref?: React.RefObject<HTMLDivElement>;
}

const SeoulMap2 = React.forwardRef<HTMLDivElement, Props>(
  function SeoulMap({ width, height }: Props, ref) {
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
      mapboxgl.accessToken = "pk.eyJ1IjoiZW1wdHloZWFkIiwiYSI6ImNsaDdyZWgwcjAxZDIza2xvYWFpNWJqb3MifQ.a6Z-GofqDk1-4NYTGx6FbQ";

      if (!mapContainer.current) {
        return;
      }

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [126.977977, 37.566535],
        zoom: 10,
      });

      fetch(
        "https://raw.githubusercontent.com/cubensys/Korea_District/master/3_%EC%84%9C%EC%9A%B8%EC%8B%9C_%EC%9E%90%EC%B9%98%EA%B5%AC/%EC%84%9C%EC%9A%B8_%EC%9E%90%EC%B9%98%EA%B5%AC_%EA%B2%BD%EA%B3%84_2017.geojson"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch seoul data");
          }

          return response.json();
        })
        .then((data) => {
          map.addSource("seoul", {
            type: "geojson",
            data,
          });

          map.addLayer({
            id: "seoul-layer",
            type: "fill",
            source: "seoul",
            paint: {
                "fill-color": [
                "match",
                ["get", "name"],
                "Gangseo-gu", "#e31a1c",
                "Gangdong-gu", "#1f78b4",
                "Gangbuk-gu", "#33a02c",
                "Gangnam-gu", "#6a3d9a",
                "Gwanak-gu", "#b15928",
                "Gwangjin-gu", "#a6cee3",
                "Guro-gu", "#fb9a99",
                "Geumcheon-gu", "#fdbf6f",
                "Nowon-gu", "#ff7f00",
                "Dobong-gu", "#cab2d6",
                "Dongdaemun-gu", "#6b3d61",
                "Dongjak-gu", "#ffff99",
                "Mapo-gu", "#b2df8a",
                "Seodaemun-gu", "#33a02c",
                "Seocho-gu", "#fb9a99",
                "Seongdong-gu", "#fdbf6f",
                "Seongbuk-gu", "#ff7f00",
                "Songpa-gu", "#a6cee3",
                "Yangcheon-gu", "#1f78b4",
                "Yeongdeungpo-gu", "#b15928",
                "Yongsan-gu", "#e31a1c",
                "Eunpyeong-gu", "#6a3d9a",
                "Jongno-gu", "#b2df8a",
                "Jung-gu", "#ffff99",
                "Jungnang-gu", "#6b3d61",
                "#808080"
                ],
                "fill-opacity": 0.5
                },
                });
                })
                .catch((error) => {
                console.error(error)
                });
                return () => map.remove();
            }, []);
            
            return (
              <div style={{ width, height }} ref={ref}>
                <div ref={mapContainer} style={{ height: "100%" }} />
              </div>
            );
        }
    );
            
export default SeoulMap2;