import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddBrandComponent } from "./add-brand/add-brand.component";
import { BrandListComponent } from "./brand-list/brand-list.component";
import { UpdateBrandComponent } from "./update-brand/update-brand.component";

const routes: Routes = [
  { path: "", component: BrandListComponent },
  { path: "add", component: AddBrandComponent },
  { path: "update/:brandId", component: UpdateBrandComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandsRoutingModule {}
