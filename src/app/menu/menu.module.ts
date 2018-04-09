import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { MenuItem } from './menu-item';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [
    MenuService
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuModule { 

  private static singleton:MenuService = new MenuService();

  constructor() {
  };

  static forRoot(menuItems: MenuItem[]): ModuleWithProviders {
    console.log("forRoot()", menuItems, this.singleton);
    this.singleton.addMenuItems(menuItems);
    return {
      ngModule: this,
      providers: [
        { 
          provide: MenuService, 
          useValue: this.singleton
        }
      ]
    };
  }

}
