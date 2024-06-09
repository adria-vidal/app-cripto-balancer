import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: []
})
export class FooterComponent implements OnInit {
  ngOnInit() {
    feather.replace();
  }
}
