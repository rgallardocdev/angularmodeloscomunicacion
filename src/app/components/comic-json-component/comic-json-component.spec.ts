import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicJsonComponent } from './comic-json-component';

describe('ComicJsonComponent', () => {
  let component: ComicJsonComponent;
  let fixture: ComponentFixture<ComicJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicJsonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicJsonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
