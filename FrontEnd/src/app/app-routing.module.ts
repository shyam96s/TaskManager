import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustpipeComponent } from './Components/custpipe/custpipe.component';
import { ActivityComponent } from './Components/ngswitch/activity.component';
import { ProductsComponent } from './Components/serviceComp/products.component';
import { PnfoundComponent } from './Components/pnfound/pnfound.component';
import { FormsComponent } from './Components/forms/forms.component';
import { TaskViewComponent } from './Components/task-view/task-view.component';
import {NewListComponent} from './pages/new-list/new-list.component';
import {NewTaskComponent} from './pages/new-task/new-task.component';



const routes: Routes = [
  
  {path: 'custpipe', component:CustpipeComponent},
  {path: 'activity', component:ActivityComponent},
  {path: 'products', component:ProductsComponent},
  {path:'forms', component: FormsComponent},
  {path:'', redirectTo :'lists', pathMatch:'full'},
  {path:'lists', component: TaskViewComponent},
  {path: 'lists/:listId', component : TaskViewComponent},
  {path: 'new-list', component : NewListComponent},
  {path: 'lists/:listId/new-task', component : NewTaskComponent},

  //{path: '**', component:PnfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
