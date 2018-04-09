import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';


import { Page1Component } from './page1.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [        
        {
          path: 'page1',
          component: Page1Component
        },
      ],
      { enableTracing: true } // <-- debugging purposes only
    ),
    MenuModule.forRoot(
      [
        {
          name: 'page1FromModule'
        }
      ]
    )
  ],
  exports: [
    Page1Component
  ],
  declarations: [Page1Component]
})
export class Page1Module { }
