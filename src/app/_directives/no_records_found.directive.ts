import { Directive, ElementRef, Renderer,Input } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Directive({
    selector: '[invalidmessage]'
  })
  export class NoRecordFoundDirective implements OnInit, OnDestroy{
    @Input() msg: string;

    constructor(
      private _elementRef: ElementRef,
      private _renderer: Renderer,
    ) { }

    ngOnInit() {


    }

    private setVisible() {

    }

    match(error: string){

    }



    ngOnDestroy(){

    }
  }