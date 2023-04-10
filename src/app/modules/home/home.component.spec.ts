import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";

import { HomeAdapter, HomeAdapterMock } from "./adapters/home.adapter";

import { CounterComponent } from "./components/list/list.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, CounterComponent],
      providers: [{ provide: HomeAdapter, useClass: HomeAdapterMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
