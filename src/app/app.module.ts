import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { MetodoDePagamentoComponent } from './pages/metodo-de-pagamento/metodo-de-pagamento.component';
import { BancoComponent } from './pages/banco/banco.component';
import { RecipeComponent } from './pages/admin-pages/recipe/recipe.component';
import { AddUpdRecipeComponent } from './pages/admin-pages/add-upd-recipe/add-upd-recipe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AlertsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    
    DashboardComponent,
    RelatorioComponent,
    CategoriaComponent,
    MetodoDePagamentoComponent,
    BancoComponent,
    RecipeComponent,
    AddUpdRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
