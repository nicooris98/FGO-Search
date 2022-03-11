import { Component, OnInit } from '@angular/core'
import { sidebarMenu } from 'src/config/menu.config'
import {MenuModule} from 'primeng/menu';
import {MenuItem, MessageService} from 'primeng/api';

@Component({
  selector: 'home-menu',
  templateUrl: './home-menu.component.html'
})
export class HomeMenuComponent implements OnInit {

  items: MenuItem[] = []
  display: boolean = false

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.items = [...sidebarMenu]
  }
}
