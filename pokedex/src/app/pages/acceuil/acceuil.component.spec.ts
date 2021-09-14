/***********************************************************/
/*Auteur : DELAVAL Kevin                                   */
/*Projet : Pokédex - Angular + Tailwind css                */
/*Date de la création du fichier : 14/09/2021              */
/***********************************************************/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilComponent } from './acceuil.component';

describe('AcceuilComponent', () => {
  let component: AcceuilComponent;
  let fixture: ComponentFixture<AcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
