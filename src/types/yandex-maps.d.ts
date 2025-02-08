declare namespace ymaps {
  function ready(fn: () => void): void;

  class Map {
    constructor(element: string | HTMLElement, options: MapOptions);
    geoObjects: GeoObjectCollection;
  }

  class Placemark implements GeoObject {
    constructor(
      coord: number[],
      properties?: PlacemarkProperties,
      options?: PlacemarkOptions,
    );
  }

  // Добавьте другие необходимые типы по мере необходимости
  interface MapOptions {
    center: number[];
    zoom: number;
    controls?: string[];
  }

  interface PlacemarkProperties {
    hintContent?: string;
    balloonContent?: string;
  }

  interface PlacemarkOptions {
    iconLayout?: string;
    iconImageHref?: string;
    iconImageSize?: [number, number];
    iconImageOffset?: [number, number];
  }

  interface GeoObjectCollection {
    add(object: GeoObject): void;
  }

  interface GeoObject {}
}
