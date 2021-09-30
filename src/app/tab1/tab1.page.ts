import { Component, OnInit } from '@angular/core';

import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  active = '';

  NAV = [
    {
      name: 'About',
      link: '/nav/about',
      icon: 'person-circle'
    },
    {
      name: 'Blog',
      link: '/nav/blog',
      icon: 'albums'
    },
    {
      name: 'Contact',
      link: '/nav/contact',
      icon: 'call'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    })
  }

  ngOnInit() { }

}