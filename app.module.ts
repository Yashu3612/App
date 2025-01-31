import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// No need to declare the components here anymore
import { AppComponent } from './app.component'; // Standalone component
import { ContactComponent } from './contact/contact.component'; // Standalone component

@NgModule({
  imports: [
    BrowserModule,
    FormsModule    // We don't include AppComponent or ContactComponent here.
  ],
  providers: [],
})
export class AppModule {}



