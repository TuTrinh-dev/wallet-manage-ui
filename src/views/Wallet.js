import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Row,
    Col,
    CardSubtitle,
    Table, Button
} from "reactstrap";

function Wallet(props) {
    return (
        <div className="content">
            <Row>
                <Col xs="12">
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col sm="6">
                                    <h5>My Wallet</h5>
                                    <CardTitle tag="h2">Wallet Name</CardTitle>
                                </Col>
                                <Col sm="6">
                                    <Button
                                        tag="label"
                                        color="info"
                                        size="sm"
                                    >
                                    ADD WALLET
                                    </Button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Table className="tablesorter" responsive>
                                <thead className="text-primary">
                                    <tr>
                                        <th>Wallet name</th>
                                        <th>Currency</th>
                                        <th>Current banlance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Wallet 1</td>
                                        <td>Việt nam đồng</td>
                                        <td>500.000</td>
                                    </tr>
                                    <tr>
                                        <td>Wallet 2</td>
                                        <td>Việt nam đồng</td>
                                        <td>1.000.000</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Wallet;
