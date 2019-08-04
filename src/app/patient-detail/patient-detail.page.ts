import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {PatientService} from '../patient/service/patient.service';
import { Patient } from 'src/app/patientvisits.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.page.html',
  styleUrls: ['./patient-detail.page.scss'],
})
export class PatientDetailPage implements OnInit {
  patientt: Patient;
  constructor(
    private route : ActivatedRoute,
    private patientService : PatientService,
    ) {
  }

  ngOnInit() {
    this.getPatient();
  }

  getPatient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("id " + id);
    this.patientService.getPatient(id)
      .subscribe(patientt => this.patientt = patientt)
  }


}
