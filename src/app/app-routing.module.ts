import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { MetodoDePagamentoComponent } from './pages/metodo-de-pagamento/metodo-de-pagamento.component';
import { BancoComponent } from './pages/banco/banco.component';
import { RecipeComponent } from './pages/admin-pages/recipe/recipe.component';
import { AddUpdRecipeComponent } from './pages/admin-pages/add-upd-recipe/add-upd-recipe.component';

const routes: Routes = [
  { path: 'alerts', component: AlertsComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'tables-data', component: TablesDataComponent },
  { path: 'tables-general', component: TablesGeneralComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'relatorio', component: RelatorioComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'metodo-de-pagamento', component: MetodoDePagamentoComponent },
  { path: 'banco', component: BancoComponent },
  { path: 'receitas', component: RecipeComponent },
  { path: 'receitas/adicionar-editar', component: AddUpdRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
