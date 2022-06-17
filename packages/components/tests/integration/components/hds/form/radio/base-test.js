import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hds/form/radio/base', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the component', async function (assert) {
    await render(hbs`<Hds::Form::Radio::Base id="test-form-radio" />`);
    assert.dom('#test-form-radio').exists();
  });
  test('it should render with a CSS class that matches the component name', async function (assert) {
    await render(hbs`<Hds::Form::Radio::Base id="test-form-radio" />`);
    assert.dom('#test-form-radio').hasClass('hds-form-radio');
  });

  // INVALID

  test('it should render the correct CSS class if the @isInvalid prop is declared', async function (assert) {
    await render(
      hbs`<Hds::Form::Radio::Base id="test-form-radio" @isInvalid={{true}} />`
    );
    assert.dom('#test-form-radio').hasClass('hds-form-radio--is-invalid');
  });

  // ATTRIBUTES

  test('it should spread all the attributes passed to the component', async function (assert) {
    assert.expect(3);
    await render(
      hbs`<Hds::Form::Radio::Base id="test-form-radio" class="my-class" data-test1 data-test2="test" />`
    );
    assert.dom('#test-form-radio').hasClass('my-class');
    assert.dom('#test-form-radio').hasAttribute('data-test1');
    assert.dom('#test-form-radio').hasAttribute('data-test2', 'test');
  });
});
