import Component from '@glimmer/component';
import { guid } from '../utils/guid';
import { ID_PREFIX as ERROR_ID_PREFIX } from '../error';
import { ID_PREFIX as HELPER_TEXT_ID_PREFIX } from '../helper-text';

export default class HdsFormRadioIndexComponent extends Component {
  // UNCOMMENT THIS IF YOU NEED A CONSTRUCTOR
  // constructor() {
  //   super(...arguments);
  //   // ADD YOUR ASSERTIONS HERE
  // }

  /**
   * Calculates the unique ID to assign to the form control
   */
  get id() {
    return guid(this);
  }

  /**
   * Get the array of IDs for elements that relate to this form control.
   * @method ariaDescribedBy
   * @return {string} The "aria-describedby" attribute to apply to the component.
   */
  get ariaDescribedBy() {
    let describedBy = [];
    describedBy.push(`${HELPER_TEXT_ID_PREFIX}${this.id}`);
    describedBy.push(`${ERROR_ID_PREFIX}${this.id}`);
    return describedBy.join(' ');
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-form-radio'];

    // add a class based on the @xxx argument
    // classes.push(`hds-form-radio--[variant]-${this.xxx}`);

    // add a class based on the @native argument
    if (this.args.native) {
      classes.push('hds-form-radio--use-native');
    }

    return classes.join(' ');
  }
}
