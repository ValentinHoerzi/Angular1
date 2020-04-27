export class EmployeeDto {
  name: string;
  longitude: string;
  latitude: string;

  constructor(name: string, longitude: string, latitude: string) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
