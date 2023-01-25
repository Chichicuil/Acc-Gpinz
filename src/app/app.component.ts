import { Component, VERSION } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RickService } from './services/master.service';
import { Subscription } from 'rxjs';
import { RickCharacters } from './types/rick';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rickSubscription?: Subscription;
  rickCharacters?: RickCharacters;
  constructor(private http: HttpClient, private rickService: RickService) {}

  ngOnInit(): void {
    this.rickSubscription = this.rickService
      .getCharacters()
      .subscribe((result) => {
        this.rickCharacters = result;
        console.log(this.rickCharacters, 'characters');
      });
  }

  ngOnDestroy(): void {
    if (this.rickSubscription) {
      this.rickSubscription.unsubscribe();
    }
  }
}
