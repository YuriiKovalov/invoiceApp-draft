import { Component } from '@angular/core';
import { MyMonitoringService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoice-app';

  constructor(private myMonitoringService: MyMonitoringService) {
  }
}
