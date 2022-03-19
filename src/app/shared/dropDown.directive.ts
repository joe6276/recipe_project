import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector:'[dropdown]'
})

export class Dropdowndirective{

@HostBinding('class.open') open=false;

@HostListener('click') clickme(){
    this.open=!this.open
}

}