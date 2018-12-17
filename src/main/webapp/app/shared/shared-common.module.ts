import { NgModule } from '@angular/core';

import { ProjectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ProjectSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ProjectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProjectSharedCommonModule {}
