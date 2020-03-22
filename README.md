# React Accessible Form

React Accessible Form handles makes layout and accessibility easy when writing forms.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/erictooth/react-accessible-form/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react-accessible-form.svg?style=flat-square)](https://www.npmjs.com/package/react-accessible-form) ![test coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg?style=flat-square) ![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square) ![bundle size](https://badgen.net/bundlephobia/minzip/react-smart-promise@latest)

Try the other libaries in the series! [React Stateful Tabs](https://github.com/erictooth/react-stateful-tabs), [React Smart Promise](https://github.com/erictooth/react-smart-promise), [React Use Pagination](https://github.com/erictooth/react-use-pagination)

## Example

```jsx
<Form.Group layout="aligned" required>
    <Form.Label>Email Addresses</Form.Label>
    <Form.Control type="email" />
    <small>Separated by semicolon (;)</small>
</Form.Group>
```

Without react-accessible-form:

```jsx
<div className="form-group form-group--aligned">
    <div className="form-group-section">
        <label for="email_field" className="form-label--required">
            Email Addresses
        </label>
    </div>
    <div className="form-group-section">
        <input type="email" class="form-control" id="email_field" required />
        <small>Separated by semicolon (;)</small>
    </div>
</div>
```

## Features

-   Optionally generates a unique `id` for the label’s `htmlFor` and input’s `id` props and links them
-   Applies BEM-formatted `classNames` to all of the components to make theming straightforward
-   Allows usage of any custom controls with `as` prop on `Form.Control`
-   Zero-overhead integration with form state libraries like [Formik](https://github.com/jaredpalmer/formik) and [React-Final-Form](https://github.com/final-form/react-final-form)
-   Optional set of base styles that help with aligned form layouts

## `Form` Props

### as
Type: `React.ElementType`
Required: `false`
Default: `"form"`

Changes the underlying element of the `Form` component.

### disabled
Type: `boolean`
Required: `false`
Default: `false`

Sets the disabled prop on all children `Form.Control` components.

### layout
Type: `"stacked" | "aligned"`
Required: `false`
Default: `"stacked"`

Propagates down to all of the children `Form.Group` components. `stacked` is the default, which is to set all of the children to `display: block`. `aligned` splits all of `Form.Group`’s children into two groups: "label", and "rest" so that all of the form’s labels will align to the same width.

## `Form.Group` Props

### id
Type: `string`
Required: `false`
Default: `UUIDv4()`

The `id` to set on the `Form.Control` and associated `htmlFor` to set on the `Form.Label`

### required
Type: `boolean`
Required: `false`
Default: `false`

Set classNames on the label to indicate a required field, and set the `required` prop on the `Form.Control`

### disabled
Type: `boolean`
Required: `false`
Default: `false`

Set classNames on the label to indicate a disabled field, and set the `disabled` prop on the `Form.Control`

## `Form.Control` Props

### as
Type: `React.ElementType`
Required: `false`
Default: `"input"`

#### Examples

##### Built-in element

```jsx
<Form.Control as="select">
    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
</Form.Control>
```

##### Custom element

```jsx
<Form.Control as={ReactSelect} options={[{value: "AL", label: "Alabama"}]} />
```

##### Overriding props

```jsx
<Form.Control as={({className, ...props}) => <ReactSelect className="custom" {...props} />} />
```
