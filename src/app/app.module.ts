import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { HeaderComponent } from './header/header.component';
import { MayusculasComponent } from './mayusculas/mayusculas.component';
import { NumerosComponent } from './numeros/numeros.component';
import { OrdenadoComponent } from './ordenado/ordenado.component';
import { PersonalizadoComponent } from './personalizado/personalizado.component';
import { TestPipe } from './test.pipe';
import { FilterpostPipe } from './filterpost.pipe';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component:  ContactoComponent},
  { path: 'acercade', component:  AcercadeComponent},
  { path: 'mayusculas', component:  MayusculasComponent},
  { path: 'numeros', component:  NumerosComponent},
  { path: 'ordenado', component:  OrdenadoComponent},
  { path: 'personalizado', component:  PersonalizadoComponent},
  { path: '**', component: InicioComponent}
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    AcercadeComponent,
    HeaderComponent,
    MayusculasComponent,
    NumerosComponent,
    OrdenadoComponent,
    PersonalizadoComponent,
    TestPipe,
    FilterpostPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
