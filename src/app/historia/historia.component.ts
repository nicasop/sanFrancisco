import { Component, OnInit } from '@angular/core';
import { Map, Marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})

// var map = L.map('map').setView([51.505, -0.09], 13);
export class HistoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const map = new Map('map').setView([-0.325422, -78.476354], 16);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    maxZoom: 19,
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var marker = new Marker([-0.325422, -78.476354]).addTo(map);
    marker.bindPopup('Ferreteria<br>San Francisco').openPopup();
  }

}