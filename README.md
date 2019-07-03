# React Accessible Form &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/erictooth/react-accessible-form/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react-accessible-form.svg?style=flat-square)](https://www.npmjs.com/package/react-accessible-form) ![test coverage](https://img.shields.io/badge/coverage-84%25-green.svg?style=flat-square) ![flow coverage](https://img.shields.io/badge/flow--coverage-100%25-brightgreen.svg?style=flat-square) ![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

React Accessible Form handles makes layout and accessibility easy when writing forms.

## Example

Before

```jsx
<div className="form-group form-group--aligned">
    <div className="form-group-section">
        <label for="email_field" className="form-label--required">
            Email Addresses
        </label>
    </div>
    <div className="form-group-section">
        <input type="email" class="form-control" id="email_field" required />
        <span className="form-text">Separated by semicolon (;)</span>
    </div>
</div>
```

After

```jsx
<Form.Group layout="aligned" required>
    <Form.Label>Email Addresses</Form.Label>
    <Form.Control type="email" />
    <Form.Text>Separated by semicolon (;)</Form.Text>
</Form.Group>
```

## Features

-   Generates a unique `id` for the label’s `htmlFor` and input’s `id` props and links them
-   Applies `classNames` in a predictable way that reduces boilerplate and provides maximum flexibility
-   Allows usage of any custom inputs with `render` prop on `Form.Control`
-   Zero-overhead integration with form state libraries like [Formik](https://github.com/jaredpalmer/formik) and [React-Final-Form](https://github.com/final-form/react-final-form)
-   Optional tiny set of base styles that help with aligned form layouts

## `Form` Props

### `layout?: "stacked" | "aligned"`

Propagates down to all of the children `Form.Group` components. `stacked` is the default, which is to set all of the children to `display: block`. `aligned` splits all of `Form.Group`’s children into two groups: "label", and "rest" so that all of the form’s labels will align to the same width.

## `Form.Group` Props

### `required?: boolean`

Set classNames on the label to indicate a required field, and set the `required` prop on the `Form.Control`

### `disabled?: boolean`

Set classNames on the label to indicate a disabled field, and set the `disabled` prop on the `Form.Control`

## Custom Inputs

The default behavior of `Form.Control` is to configure an `input` element and render it. If you want to use something else, like a `select`, `textarea`, or a third-party library component, you can render your own component without losing the benefits of React Accessible Form:

```jsx
{
    /* If the controls map to standard HTML attribute names, you can spread the props directly */
}
<Form.Control render={props => <textarea {...props} />} />;

{
    /* Otherwise, you can destructure the props and apply however is necessary */
}
<Form.Control
    render={({ className, disabled, id, required }) => (
        <SomeCustomInputComponent
            className={className}
            isDisabled={disabled}
            htmlId={id}
            isRequired={required}
        />
    )}
/>;
```
