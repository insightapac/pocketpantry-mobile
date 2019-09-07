import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'add-item', loadChildren: './modals/add-item/add-item.module#AddItemPageModule' },
  { path: 'recipes/:myid', loadChildren: './recipes/recipes.module#RecipesPageModule' },
  { path: 'select-menu', loadChildren: './select-menu/select-menu.module#SelectMenuPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
