import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule,JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { UploadModule } from '@progress/kendo-angular-upload';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {JqueryUiModule} from "../../shared/ui/jquery-ui/jquery-ui.module";
import {PermisoService} from "../../+common/service/permiso.service";
import {SmartadminValidationModule} from "../../shared/forms/validation/smartadmin-validation.module";
import {Ng2AutoCompleteModule} from "ng2-auto-complete";
import {Ng2CompleterModule} from "ng2-completer";
import {BusyModule} from "angular2-busy";
import {AdministrarEmpresaComponent} from "./administrar.empresa.component";
import {DepartamentoAreaDetailFormComponent} from "./departamento.area.detail.component";
import {SimpleNotificationsModule} from "angular2-notifications/src/simple-notifications.module";
import {UnidadNegocioDialogFormComponent} from "./unidad.negocio.dialog.component";
import {DepartamentoAreaDialogFormComponent} from "./departamento.area.dialog.component";

@NgModule({
  imports: [
      CommonModule,
      SmartadminValidationModule,
      DropDownsModule,
      SmartadminInputModule,
      GridModule,
      DialogModule,
      SmartadminModule,
      HttpModule,
      JsonpModule,
      UploadModule,
      ReactiveFormsModule,
      FormsModule,
      JqueryUiModule,
      Ng2AutoCompleteModule,
      Ng2CompleterModule,
      BusyModule,
      SimpleNotificationsModule

  ],
    declarations: [AdministrarEmpresaComponent,DepartamentoAreaDetailFormComponent,UnidadNegocioDialogFormComponent, DepartamentoAreaDialogFormComponent],
    providers: [
        PermisoService
    ],
    bootstrap: [AdministrarEmpresaComponent]
})
export class AdministrarEmpresaModule {


}
