export class ServiceRes {
  id: number;
  name: string;
  date: string;
  longitude: string;
  latitude: string;
  employeeId: number;

  constructor(
    id: number,
    name: string,
    date: string,
    longitude: string,
    latitude: string,
    employeeId: number
  ) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.longitude = longitude;
    this.latitude = latitude;
    this.employeeId = employeeId;
  }
}
