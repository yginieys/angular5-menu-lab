import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuItems:MenuItem[];

  constructor(menuService:MenuService) { 
    console.debug("MenuComponent() : menuService=", menuService);
    this.menuItems = menuService.getMenuItems();
  }

  ngOnInit() {
  }

}
