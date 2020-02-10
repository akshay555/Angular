import{NgModule} from '@angular/core';
import { CapatalizePipe  } from "./capatilize.pipe";

@NgModule({
    declarations:[CapatalizePipe],
    exports:[CapatalizePipe]
})

export class sharedModule{

}