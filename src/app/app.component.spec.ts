import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuxStartshipService } from './servicces/aux-startship.service';
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;
  let app:AppComponent
  let AuxServiceTesting:AuxStartshipService
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[HttpClientTestingModule,RouterTestingModule,BrowserAnimationsModule],
      providers:[
        {provide:AuxStartshipService}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();

    AuxServiceTesting=TestBed.inject(AuxStartshipService)
  })

  it('should create the app', () => {
       expect(app).toBeTruthy();
  });


  it("app to be defined", () => {
      expect(app).toBeDefined();
});

  it(`should have as title 'Spring_8_Tasca'`, () => {
        expect(app.title).toEqual('Spring_8_Tasca');
  });

  // it('should render title', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('Spring_8_Tasca app is running!');
  // });
});
