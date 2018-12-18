import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProjectAuthorModule } from './author/author.module';
import { ProjectRegionModule } from './region/region.module';
import { ProjectCountryModule } from './country/country.module';
import { ProjectLocationModule } from './location/location.module';
import { ProjectDepartmentModule } from './department/department.module';
import { ProjectTaskModule } from './task/task.module';
import { ProjectEmployeeModule } from './employee/employee.module';
import { ProjectJobModule } from './job/job.module';
import { ProjectJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ProjectAuthorModule,
        ProjectRegionModule,
        ProjectCountryModule,
        ProjectLocationModule,
        ProjectDepartmentModule,
        ProjectTaskModule,
        ProjectEmployeeModule,
        ProjectJobModule,
        ProjectJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectEntityModule {}
