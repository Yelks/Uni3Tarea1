import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayusculasComponent } from './mayusculas.component';

describe('MayusculasComponent', () => {
  let component: MayusculasComponent;
  let fixture: ComponentFixture<MayusculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayusculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayusculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
