import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styles: [``]
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  langs: any = { 'de': 'German', 'en': 'English', 'es': 'Spanish', 'fr': 'French', 'pt': 'Portuguese', 'ru': 'Russian' };
  currentLang: string = 'en';
  constructor(public translateService: TranslateService){
    // Register the supported langauges
    this.translateService.addLangs(Object.keys(this.langs));
    // Mention the default language of your site
    this.translateService.setDefaultLang('en');
  }
  ngAfterViewInit(): void {
    
  }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }
  switchLang(e: any) {
     // Inform @ngx-translate about language change
    this.translateService.use(e.target.value);
    this.currentLang = e.target.value;
  }
}