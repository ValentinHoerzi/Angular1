export class EmployeeRes {
  id:number;
  name: string;
  longitude: string;
  latitude: string;

  constructor(id:number,name: string, longitude: string, latitude: string) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
