export function debugPosition() {
  if (navigator?.geolocation !== undefined) {
    navigator.geolocation.getCurrentPosition(
      (position) => console.log(position.coords, "DEBUG: Coordinates"),
      (error) => console.error(error),
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 27000,
      }
    );
  }
}
