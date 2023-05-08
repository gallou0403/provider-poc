import {NgModule} from "@angular/core";
import {LazyDialogTabAComponent} from "./lazy-dialog-tab-a.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        LazyDialogTabAComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: LazyDialogTabAComponent
            }
        ])
    ],
    exports: [
        LazyDialogTabAComponent
    ]
})
export class LazyDialogTabAModule {}
