import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';

import { Page2Component } from './page2.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [        
        {
          path: 'page2',
          component: Page2Component
        },
      ],
      { enableTracing: true } // <-- debugging purposes only
    ),
    MenuModule.forRoot(
      [
        {
          name: 'page2FromModule'
        }
      ]
    )
  ],
  exports: [
    Page2Component
  ],
  declarations: [Page2Component]
})
export class Page2Module { }
