//@flow
import { Form } from "./Form.js";
import { FormControl } from "./FormControl.js";
import { FormGroup } from "./FormGroup.js";
import { FormLabel } from "./FormLabel.js";

//$FlowFixMe
Form.Group = FormGroup;
//$FlowFixMe
Form.Label = FormLabel;
//$FlowFixMe
Form.Control = FormControl;
export default Form;
