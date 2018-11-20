import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatNativeDateModule,
  MatSidenavModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {HomeComponent} from './paginas/home/home.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import ptBr from '@angular/common/locales/pt';
import {DatePipe, registerLocaleData} from '@angular/common';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {LoginComponent} from './paginas/login/login.component';
import {FormsModule} from '@angular/forms';
import {UsuarioComponent} from './paginas/usuario/usuario.component';
import {FinancasComponent} from './paginas/financas/financas.component';
import {AdicionaLancamentoComponent} from './paginas/financas/adiciona-lancamento/adiciona-lancamento.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { LoadingComponent } from './shared/components/loading/loading.component';
import {SharedModule} from './shared/shared.module';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    AdicionaLancamentoComponent,
    FinancasComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-Br' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
