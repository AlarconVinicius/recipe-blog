import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdRecipeComponent } from './add-upd-recipe.component';

describe('AddUpdRecipeComponent', () => {
  let component: AddUpdRecipeComponent;
  let fixture: ComponentFixture<AddUpdRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
