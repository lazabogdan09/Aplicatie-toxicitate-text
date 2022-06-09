import { Injectable } from '@angular/core';
import * as toxicity from '@tensorflow-models/toxicity';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToxicityService {
  toxicityModel;
  threshold = 0.85;

  private loaderSource = new BehaviorSubject(null);
  loading$ = this.loaderSource.asObservable();

  setLoader(value) {
    this.loaderSource.next(value);
  }
  constructor() {
    this.getToxicityModel();
  }

  getToxicityModel() {
    toxicity.load(this.threshold, []).then(model => {
      this.toxicityModel = model;
    });
  }
}
