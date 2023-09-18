import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDataComponent } from './poke-data.component';

describe('PokeDataComponent', () => {
  let component: PokeDataComponent;
  let fixture: ComponentFixture<PokeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeDataComponent]
    });
    fixture = TestBed.createComponent(PokeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
