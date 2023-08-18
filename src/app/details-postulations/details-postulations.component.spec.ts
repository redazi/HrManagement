import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPostulationsComponent } from './details-postulations.component';

describe('DetailsPostulationsComponent', () => {
  let component: DetailsPostulationsComponent;
  let fixture: ComponentFixture<DetailsPostulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPostulationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPostulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
