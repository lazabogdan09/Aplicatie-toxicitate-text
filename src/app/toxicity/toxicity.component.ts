import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToxicityService } from './toxicity.service';

@Component({
  selector: 'app-toxicity',
  templateUrl: './toxicity.component.html',
  styleUrls: ['./toxicity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToxicityComponent implements OnInit {
  message: FormControl;
  data: any;
  loading = false;
/*  predict: any;*/

  constructor(
    private readonly fb: FormBuilder,
    private readonly changeDetector: ChangeDetectorRef,
    private readonly toxicityService: ToxicityService
  ) {}

  ngOnInit() {
    this.message = this.fb.control('', Validators.required);
  }

  constructChartData(chartData) {
    this.data = {
      labels: chartData.map(data => data.label),
      datasets: [
        {
          label: 'Toxicity Predictions',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: chartData.map(data => +data.match)
        }
      ]
    };
    this.changeDetector.detectChanges();
  }

  check() {
    this.message.markAsTouched();
    if (this.message.valid) {
      this.loading = true;
      this.toxicityService.toxicityModel
        .classify(this.message.value)
        .then(predictions => {
          const mappedData = predictions.map(data => {
            return {
              label: data.label,
              match: data.results[0].match
            };
          });
/*          if (predictions === 0) {
            this.predict = false;
          } else {
            this.predict = predictions;
          }*/
          this.loading = false;
          this.constructChartData(mappedData);
        });
    }
  }
}
