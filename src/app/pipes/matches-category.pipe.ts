import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'matchesCategory',
    pure: false
})
export class FilterCategoryPipe implements PipeTransform {
    transform(items: any[], args): any {
        return items.filter(item => item.category === args.label);
    }
}
