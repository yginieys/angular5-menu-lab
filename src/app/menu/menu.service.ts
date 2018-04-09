import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';

@Injectable()
export class MenuService {

  private menuItems:MenuItem[] = [];

  constructor() { 
    console.log("new MenuService()", this);
  }

  public getMenuItems():MenuItem[] {
    return this.menuItems;
  }

  addMenuItems(menuItems:MenuItem[]):void {
    console.log("addMenuItems() ", menuItems);
    this.menuItems = this.menuItems.concat(menuItems);
  }

}
