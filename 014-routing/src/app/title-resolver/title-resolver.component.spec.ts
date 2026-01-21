import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleResolverComponent } from './title-resolver.component';

describe('TitleResolverComponent', () => {
  let component: TitleResolverComponent;
  let fixture: ComponentFixture<TitleResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleResolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
