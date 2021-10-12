import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  query: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async submitOnEnterKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement;
      if (target.value !== '') {
        this.query = target.value
        this.router.navigateByUrl('/search/'+this.query);
      }
    }
  }

}
