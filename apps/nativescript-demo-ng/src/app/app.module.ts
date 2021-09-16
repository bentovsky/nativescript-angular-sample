import { ErrorHandler, Injectable, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, NativeScriptHttpClientModule, NativeDialogModule } from '@nativescript/angular';
import { NativeScriptMaterialBottomNavigationBarModule } from '@nativescript-community/ui-material-bottomnavigationbar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
@Injectable()
export class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log('### ErrorHandler Error: ', error);
    console.log('### ErrorHandler Stack: ', error.stack);
  }
}
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptMaterialBottomNavigationBarModule, NativeScriptModule, NativeScriptHttpClientModule, AppRoutingModule, NativeDialogModule],
  declarations: [AppComponent, WrapperComponent, Child1Component, Child2Component],
  providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
