import { Injectable } from '@angular/core';
import { Patient } from 'src/app/patientvisits.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  PATIENTS$: any;
  apiUrl= "https://jsonplaceholder.typicode.com/todos"
  constructor(private _http : HttpClient) { }
  getPatients() :Observable<any>{
    //return this.PATIENTS = Patient.slice(0);
    this._http.get(this.apiUrl).subscribe(patients => {
      this.PATIENTS$ = patients;
    });
    return this._http.get(this.apiUrl);
  }

  getPatient(id: number): Observable<Patient> {
    console.log("Trung" + this.PATIENTS$);
    return of(this.PATIENTS$.find(p => p.id === id));
    // TODO: send the message _after_ fetching the hero
}
}
