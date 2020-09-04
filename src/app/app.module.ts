import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductToShoppingListComponent } from './add-product-to-shopping-list/add-product-to-shopping-list.component';
import { ListProjectorComponent } from './list-projector/list-projector.component';
import { ListSaverComponent } from './list-saver/list-saver.component';
import { CreateListComponent } from './create-list/create-list.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { appRoutingModule } from './app.routing';
import { SaveListsToJsonComponent } from './save-lists-to-json/save-lists-to-json.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductToShoppingListComponent,
    ListProjectorComponent,
    ListSaverComponent,
    CreateListComponent,
    ScrollTopComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SaveListsToJsonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    appRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
