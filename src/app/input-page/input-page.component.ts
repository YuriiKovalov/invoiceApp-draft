import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {

  json = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  displayInvoice(): void {
    this.router.navigate(['/invoice'], {
      queryParams: { dataid: '44b1e9c0-23f5-47ec-a197-e398b727c2f0' }
    });
  }
}
