import React from "react";
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import CategoryInput from "./CategoryInput";

export default ({onSubmit,onCancel}) => <form className='card fixed-bottom card-expense p-3 animated slideInUp'
                                      onSubmit={onSubmit}>
    <CategoryInput/>


    <Input type='text' defaultValue="" className='mt-3' name='name' placeholder='Описание'/>
    <InputGroup className='mt-3'>
        <Input type='number' required placeholder='Сумма' name='amount' defaultValue=""/>
        <InputGroupAddon>грн.</InputGroupAddon>
    </InputGroup>


    <Button color='primary' type='submit' className='mt-3'>Добавить</Button>
    <Button color='danger' className='mt-3' onClick={onCancel}>
        <i className="fa fa-close" aria-hidden="true"/>
    </Button>
</form>
      
