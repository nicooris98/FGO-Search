import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { ServantModel } from 'src/app/project/models/servant.model';
import { ServantsService } from 'src/app/project/services/servantsService.service';

@Component({
  selector: 'app-servants',
  templateUrl: './servants.component.html',
})
export class ServantsComponent {
  servants: Observable<ServantModel[]>;
  loading: boolean = true;

  constructor(private servantsService: ServantsService,
    private http: HttpClient) {}

  ngOnInit(): void {}

  async searchByName(name: string) {
    if (name !== '') {
      this.loading = true
      /* await this.servantsService
        .getServantsByName(name)
        .subscribe(data => {
            this.servants = data
            console.log(this.servants)
        }); */
        this.servants = await this.servantsService.getServantsByName(name)
        this.loading = false
    }
  }
}
