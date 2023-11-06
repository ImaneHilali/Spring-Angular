import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsListComponent } from './stations-list/stations-list.component';
import { StationsService } from './stations.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarburantComponent } from './carburant/carburant.component';
import { HistoCarbComponent } from './histocarb/histocarb.component';

const routes: Routes = [
  { path: 'stations', component: StationsListComponent},
  { path: 'carburants', component: CarburantComponent},
  { path: 'histocarbs', component: HistoCarbComponent}


];  

@NgModule({
  declarations: [
    AppComponent,
    StationsListComponent,
    CarburantComponent,
    HistoCarbComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule, FormsModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [StationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
