export class User {
  name: string;
  designation: string;
  address: string;
  phone: string[];

  constructor(
    name: string,
    designation: string,
    address: string,
    phoen: string[]
  ) {
    this.name = name;
    this.designation = designation;
    this.address = address;
    this.phone = phoen;
  }
}
