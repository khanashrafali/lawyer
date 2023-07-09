import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
import { ElipsisPipe } from './elipsis.pipe';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [ElipsisPipe],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressBarModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatTreeModule,
    CdkTreeModule,
    MatExpansionModule,
  ],
  exports: [
    MatSnackBarModule,
    MatSelectModule,
    MatProgressBarModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ElipsisPipe,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatTreeModule,
    CdkTreeModule,
    MatExpansionModule,
  ],
})
export class MaterialModule {}
