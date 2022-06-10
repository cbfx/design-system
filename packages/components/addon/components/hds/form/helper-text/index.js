import Component from '@glimmer/component';
export const ID_PREFIX = 'helper-text-';

export default class HdsFormHelperTextIndexComponent extends Component {
  /**
   * Determines the unique ID to assign to the element
   * @method id
   * @return {(string|boolean)} The "id" attribute to apply to the element or false, if no controlId is provided
   */
  get id() {
    let { controlId } = this.args;
    if (controlId) {
      return `${ID_PREFIX}${controlId}`;
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

    // add a class based on the @contextualClass argument
    // notice: this will *not* be documented for public use
    // the reason for this is that the contextual component declarations don't pass attributes to the component
    if (this.args.contextualClass) {
      classes.push(this.args.contextualClass);
    }

    return classes.join(' ');
  }
}