import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'patientFilter'})
export class patientFilterPipe implements PipeTransform {
  transform(items: any[], criteria: boolean): any {
    if(criteria === null){
      return items;
      
    } else
    return items.filter(item =>{
      return item.completed === criteria;
    });
  }
}
