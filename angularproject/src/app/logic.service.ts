import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  constructor(private http: HttpClient) {}

  printToConsole(arg: string) {
    console.log(arg);
  }

  getsth() :void{
    this.http.get('https://api.github.com/users/ValentinHoerzi')
    .subscribe((response)=> console.log(response));
  }
}
