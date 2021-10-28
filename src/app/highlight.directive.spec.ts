import { HighlightDirective } from './highlight.directive';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => { 
    const mockElementRef : ElementRef = {
      nativeElement: {}
    }
    const directive = new HighlightDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
