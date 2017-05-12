import { TestBed, async } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent
      ],
    }).compileComponents();
  }));

  it('should create the heroesComponent', async(() => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const heroesComponent = fixture.debugElement.componentInstance;
    expect(heroesComponent).toBeTruthy();
  }));

  it(`should have as title 'heroesComponent works!'`, async(() => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const heroesComponent = fixture.debugElement.componentInstance;
    expect(heroesComponent.title).toEqual('heroesComponent works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('heroesComponent works!');
  }));
});
