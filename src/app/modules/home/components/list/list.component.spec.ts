// import { ComponentFixture, TestBed } from "@angular/core/testing";

// import { CounterComponent } from "./counter.component";
// import { DummyService } from "src/app/services/dummy.service";

// describe("CounterComponent", () => {
//   let component: CounterComponent;
//   let fixture: ComponentFixture<CounterComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [CounterComponent],
//     }).compileComponents();

//     fixture = TestBed.createComponent(CounterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it("should create", () => {
//     expect(component).toBeTruthy();
//   });

//   it("should render a random number between 0 and 1", () => {
//     const dummyService = fixture.debugElement.injector.get(DummyService);
//     const randomNum = dummyService.getRandomValue();

//     console.log(randomNum);

//     expect(randomNum).toBeLessThanOrEqual(1);
//     expect(randomNum).toBeGreaterThanOrEqual(0);
//   });
// });
