import React from "react"
import {Form, Input, Table} from "reactstrap"
import moment from 'moment'

export default class InvoiceTable extends React.Component {
    emptyRow = {
        quantity: 0,
        price: 0,
    }
    state = {
        addRow: false,
        addRowValues: this.emptyRow,
        items: [{
            id: "Item ID",
            name: "Item Name",
            quantity: 21,
            price: 200,
            date: moment(new Date()).format("DD.MM.YYYY"),
        }]
    }

    render() {

        const {id, name, quantity, price, date} = this.state.addRowValues
        return <Form>
            <Table>
                <thead>
                <tr>
                    <th>Item ID</th>
                    <th>Item Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Expiry Date</th>
                </tr>
                </thead>
                <tbody>

                {this.state.items.map((item, index) =>
                    <tr key={index}>
                        <td><i className='fa fa-minus' onClick={this.deleteRow.bind(this, item.id)}/> {item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity * item.price}</td>
                        <td>{item.date}</td>
                    </tr>
                )}

                {this.state.addRow ?
                    <tr>
                        <td><Input list="browsers" value={id} onChange={this.fillRow.bind(this)} name="id"/>
                            <datalist id="browsers">
                                <option value="Internet Explorer"/>
                                <option value="Firefox"/>
                                <option value="Chrome"/>
                                <option value="Opera"/>
                                <option value="Safari"/>
                            </datalist>
                        </td>
                        <td>
                            <Input type='text'
                                   value={name}
                                   onChange={this.fillRow.bind(this)}
                                   name='name'/>
                        </td>
                        <td>
                            <Input type='number'
                                   value={quantity}
                                   onChange={this.fillRow.bind(this)}
                                   name='quantity'/>
                        </td>
                        <td>
                            <Input type='number'
                                   value={price}
                                   onChange={this.fillRow.bind(this)}
                                   name='price'/>
                        </td>
                        <td>
                            {quantity * price}
                        </td>
                        <td>
                            <Input type='date'
                                   name='date'
                                   value={date}
                                   onChange={this.fillRow.bind(this)}/>
                        </td>
                    </tr>
                    :
                    null
                }
                <tr>
                    <td><i className='fa fa-plus' onClick={this.showAddRow.bind(this)}/></td>
                </tr>
                </tbody>
            </Table>
        </Form>
    }


    fillRow(e) {
        this.setState({
            addRowValues: {
                ...this.state.addRowValues,
                [e.target.name]: e.target.value
            }
        })
    }


    deleteRow(id) {
        this.setState({items: this.state.items.filter(item => item.id !== id)})
    }

    showAddRow() {

        if (this.state.addRow) {

            const items = this.state.items

            items.push(this.state.addRowValues)
            debugger
            this.setState({
                items: items,
                addRow: false,
            })
        }
        this.setState({addRow: true})
    }
}
