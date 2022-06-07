import Component from '@glimmer/component';

export default class HdsFormLegendIndexComponent extends Component {
  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-form-legend'];

    // add typographic classes
    classes.push('hds-typography-body-200', 'hds-font-weight-semibold');

    // add a class based on the @_contextualClass argument
    // notice: this will *not* be documented for public use
    // the reason for this is that the contextual component declarations don't pass attributes to the component
    if (this.args._contextualClass) {
      classes.push(this.args._contextualClass);
    }

    return classes.join(' ');
  }
}
