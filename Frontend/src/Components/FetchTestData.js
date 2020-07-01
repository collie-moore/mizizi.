
import React, { Component } from "react";
import {Row, Col } from 'reactstrap';
//eslint-disable-next-line
import { Alert } from 'reactstrap';

export default class FetchTestData extends Component {

    render() {
       
        return (
            <div>
                <Row className='container2'>
                    <Col sm='12'>
                        <iframe className="myFrame" title="uniq" src='https://webchat.botframework.com/embed/mzizi1-bot?s=p3GWnEQYvtU.hzyWfpCY7xwBpFkriUiRIkLraFyB3J8WOTDjpOpJIt8'> </iframe>
                    </Col>
                </Row>
            </div>
        );
            }
    }
