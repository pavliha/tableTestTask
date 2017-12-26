import React from 'react'
import HeaderTable from "../components/HeaderTable";
import InvoiceTable from "../components/InvoiceTable";

import {Col, Input, Row, Table} from "reactstrap";

export default () =>
    <div>
        <Row>
            <Col xs={6}>
            </Col>
            <Col xs={6}>
                <HeaderTable/>
            </Col>
            <Col xs={12}>
                <InvoiceTable/>
            </Col>
        </Row>
    </div>


