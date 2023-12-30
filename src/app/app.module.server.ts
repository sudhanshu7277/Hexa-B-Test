import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
