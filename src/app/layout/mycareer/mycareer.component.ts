import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycareer',
  templateUrl: './mycareer.component.html',
  styleUrls: ['./mycareer.component.css']
})
export class MycareerComponent implements OnInit {

  taskList = [
    'Enhance and develop front and back end web application for Qubit Software solution.',
    'Develop Frontend, Backend, and Apps UI using Angular and Materials',
    'Design and Implement in-house network architecture and IPTV solution.',
    'Develop and Customize smart TV and digital signage apps of Samsung and LG device based on operating system Tizen and Procentric.',
    'Participating in software testing for LG Procentric operating system (LG R&D Korea).',
    'Develop Internal-External and Partner API for system integration.',
    'Develop Central Service Management system to analyse, manage, monitor and control remote devices. As well as developing cloud base centralize system for managing multiple sites.',
    'Develop Content Management System to manage the physical file and metadata deliver to Smart Interactive TV and Smart digital signage.',
    'Develop Content Delivery Network to deliver physical file to remote sites.',
    'Development of Integration module with hotel Property Management System (PMS) and Hospital Information System (HIS).'
  ];

  gsc = [
    'System migration (Moving legacy stand-alone system to Web Base application)',
    'Centralize management system to manage remote devices and physical content delivery.',
    'Implement Content delivery network module.',
    'Fully customize digital signage application using Samsung Tizen operating System.',
    'End-to-end Data integration module to integrate with Cinema Management System and transform data to digital signage display.',
    'Develop reporting system.',
  ];

  regen = [
    'IPTV solution integration with Hospital Information System.',
    'End-to-end messaging platform for Operator and Patient using smart TV apps.',
    'Transforming hand writing Hospital Patient Boards into fully customize Digital Patient Boards (both front and back end).',
    'Development of hospital Patient Appointment System.',
  ];

  samasama = [
    'In-house advertising integrated with Qubit IPTV solution.',
    'Flight Schedule apps development integrated with IPTV solution.',
    'IPTV solution integrated with Video On Demand content provider.',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openWebsite() {
    const url = 'https://www.qubit.asia/';
    window.open(url, '_blank');
  }

}
