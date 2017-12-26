import React from "react"
import {Input, Table} from "reactstrap"
import moment from 'moment'

export default () =>
    <Table>
        <tbody>
        <tr>
            <th className="align-middle">Transaction ID</th>
            <td className="align-middle"><Input type='text'/></td>
        </tr>
        <tr>
            <th className="align-middle">Date/Time</th>
            <td className="align-middle">{moment(new Date()).format("DD.mm.YYYY")}</td>
        </tr>
        <tr>
            <th className="align-middle">Vendor</th>
            <td><Input list="browsers" name="browser"/>
                <datalist id="browsers">
                    <option value="Internet Explorer"/>
                    <option value="Firefox"/>
                    <option value="Chrome"/>
                    <option value="Opera"/>
                    <option value="Safari"/>
                </datalist>
            </td>
        </tr>
        <tr>
            <th>Total</th>
        </tr>
        </tbody>
    </Table>