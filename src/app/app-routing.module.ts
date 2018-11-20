import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './paginas/home/home.component';
import {LoginComponent} from './paginas/login/login.component';
import {UsuarioComponent} from './paginas/usuario/usuario.component';
import {FinancasComponent} from './paginas/financas/financas.component';
import {AdicionaLancamentoComponent} from './paginas/financas/adiciona-lancamento/adiciona-lancamento.component';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard]},
  {path: 'financas', component: FinancasComponent, canActivate: [AuthGuard]},
  {path: 'financas/adicionar', component: AdicionaLancamentoComponent, canActivate: [AuthGuard]},
  {path: 'financas/:id', component: AdicionaLancamentoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
