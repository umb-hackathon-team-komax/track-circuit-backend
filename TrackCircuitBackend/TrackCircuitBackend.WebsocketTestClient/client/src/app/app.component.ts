import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HubConnection } from '@aspnet/signalr';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private hubConnection: HubConnection;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/hub')
        .build();
  }

  ngOnInit() {
    this.hubConnection.start().then(() => {
      console.log('Connected');
    })
    this.received().subscribe(result => {
      console.log(result);
    })
  }

  public fetch(): void {
    this.hubConnection.invoke("fetch");
  }

  public received() {
    return new Observable(subscriber => {
      this.hubConnection.on("received", result => {
        subscriber.next(result);
      });
    })
  }

}
