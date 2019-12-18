import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'client-ghost-tile',
  templateUrl: 'client-ghost-tile.component.html',
  styleUrls: ['client-ghost-tile.component.scss']
})
export class ClientGhostTileComponent implements OnInit {
  @Input() heading: string;

  constructor() {}

  ngOnInit() {}
}
