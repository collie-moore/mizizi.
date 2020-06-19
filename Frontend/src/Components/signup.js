import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
const mysign = (props) => {
return(
<FormGroup>
    <Form>
        <Label>user Name</Label>
        <Input type="text" name="" placeholder="8 to 20 char"/>
    </Form>
    <Form>
    <Label>Phone number</Label>
    <Input type="number" len="10" placeholder="07123*****"/>
    </Form>
    <Form>
    <Label>Payment mode</Label>

    </Form>
</FormGroup>
);
};
export default mysign;