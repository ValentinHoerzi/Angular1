export class ServiceDto {
  name: string;
  date: string;
  longitude: string;
  latitude: string;
  employeeId: number;

  constructor(
    name: string,
    date: string,
    longitude: string,
    latitude: string,
    employeeId: number
  ) {
    this.name = name;
    this.date = date;
    this.longitude = longitude;
    this.latitude = latitude;
    this.employeeId = employeeId;
  }
}
