import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/serviceComp/products.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProductService } from './Services/product.service';
import { ActivityComponent } from './Components/ngswitch/activity.component';
import {HttpClientModule} from '@angular/common/http';
import { CustpipeComponent } from './Components/custpipe/custpipe.component';
import { AgePipePipe } from './pipes/age-pipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PnfoundComponent } from './Components/pnfound/pnfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { FormsComponent } from './Components/forms/forms.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule, MatButton} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/Radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
//import {MatNativeDateModule} from '@angular/material/datepicker'
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DataSource} from '@angular/cdk/table';
import { CdkTableModule} from '@angular/cdk/table';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CommonModule} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon';
import {Routes, RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list'
import { TaskViewComponent } from './Components/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';


const appRoutes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'products', component: ProductsComponent  },
  { path: 'activity', component: ActivityComponent },
  {path : 'custpipe', component: CustpipeComponent }
];

 @NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ActivityComponent,
    CustpipeComponent,
    AgePipePipe,
    FilterPipe,
    PnfoundComponent,
    FormsComponent,
    SidenavComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSortModule,
    MatGridListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )

    
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
