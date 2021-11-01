import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<app-server></app-server>
    <h1>Äpple</h1>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
