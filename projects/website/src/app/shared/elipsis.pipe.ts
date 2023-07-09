import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "elipsis",
})
export class ElipsisPipe implements PipeTransform {
  transform(value?: string, max: number = 30, ...args: unknown[]): unknown {
    return value ? (value?.length > max ? value.slice(0, max) + "..." : value) : "";
  }
}
