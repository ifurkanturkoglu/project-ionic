import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full'
  },   
  {
    path: 'mainpage',
    loadChildren: () => import('./modules/pages/mainpage/mainpage.module').then( m => m.MainpagePageModule)
  },
  {
    path: 'profilepage',
    loadChildren: () => import('./modules/pages/profilepage/profilepage.module').then( m => m.ProfilepagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
