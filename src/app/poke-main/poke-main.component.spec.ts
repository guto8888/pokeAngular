import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeMainComponent } from './poke-main.component';

describe('PokeMainComponent', () => {
  let component: PokeMainComponent;
  let fixture: ComponentFixture<PokeMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeMainComponent]
    });
    fixture = TestBed.createComponent(PokeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
