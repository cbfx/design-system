import Component from '@glimmer/component';
export const ID_PREFIX = 'helper-text-';

export default class HdsFormHelperTextIndexComponent extends Component {
  /**
   * Determines the unique ID to assign to the element
   * @method id
   * @return {(string|boolean)} The "id" attribute to apply to the element or false, if no fieldId is provided
   */
  get id() {
    let { fieldId } = this.args;
    if (fieldId) {
      return `${ID_PREFIX}${fieldId}`;
    }
    return false;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-form-helper-text'];

    // add typographic classes
    classes.push('hds-typography-body-100', 'hds-font-weight-regular');

    return classes.join(' ');
  }
}
