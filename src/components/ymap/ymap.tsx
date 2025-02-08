"use client";

import { useEffect } from "react";
import "./ymap.css";

const { NEXT_PUBLIC_YANDEX_MAP_TOKEN: mapApiKey } = process.env;

const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });
};

interface YMapProps {
  coordiantes: [number, number];
  className?: string;
}

const YMap: React.FC<YMapProps> = ({ coordiantes, className }) => {
  useEffect(() => {
    const initMap = async () => {
      try {
        await loadScript(
          `https://api-maps.yandex.ru/2.1/?apikey=${mapApiKey}&lang=ru_RU`,
        );

        window.ymaps.ready(() => {
          const map = new window.ymaps.Map("map", {
            center: coordiantes,
            zoom: 13,
            controls: ["fullscreenControl"],
          });

          const marker = new window.ymaps.Placemark(coordiantes, {
            hintContent: "Наш офис",
            balloonContent: "Приходите к нам!",
          });

          map.geoObjects.add(marker);
        });
      } catch (error) {
        console.error("Error loading Yandex Maps:", error);
      }
    };

    initMap();

    return () => {
      const mapContainer = document.getElementById("map");
      if (mapContainer) mapContainer.innerHTML = "";

      const scripts = document.querySelectorAll(
        'script[src^="https://api-maps.yandex.ru"]',
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <div
      id="map"
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default YMap;
