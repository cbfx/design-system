import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ComponentsTableController extends Controller {
  // TODO think about query param support;
  // how do you reset query params??
  queryParams = ['sortBy', 'sortOrder'];

  // Will this cause problems if there are other sortable tables?
  @tracked sortBy = 'color';
  @tracked sortOrder = 'asc';

  // @tracked sortBy;
  // @tracked sortOrder;

  get customSortMethod() {
    if (this.sortBy === 'color') {
      let myCustomDataArray = [
        'critical',
        'warning',
        'success',
        'highlight',
        'neutral',
      ];

      return (a, b) => {
        const aIndex = myCustomDataArray.indexOf(a['color']);
        const bIndex = myCustomDataArray.indexOf(b['color']);
        if (aIndex < bIndex) {
          return this.sortOrder === 'asc' ? -1 : 1;
        } else if (aIndex > bIndex) {
          return this.sortOrder === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
      };
    } else {
      return `${this.sortBy}:${this.sortOrder}`;
    }
  }

  @action
  customOnSort(sortBy, sortOrder) {
    // console.log('customOnSort', sortBy, sortOrder);
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
  }
}
