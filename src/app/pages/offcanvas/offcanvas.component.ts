import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    this.elementRef.nativeElement.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', () => {
      this.elementRef.nativeElement.querySelector('.offcanvas-collapse').classList.toggle('open');
    });

  }

}
