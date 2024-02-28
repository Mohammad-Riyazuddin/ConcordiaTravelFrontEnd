import react from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardGroup } from "reactstrap";
import '../csscomponents/recommendedCountryGroup.css';


const RecommendedCountryGroup = () => {
    return (
        <div>
            <div className="recommend">
                <h2>Discover your new favourite stay</h2>
            </div>
            <CardGroup className="card-group">
                <Card className="card-ac" style={{
                    width: '18rem',
                }}>
                    <CardBody>
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                        />
                        <CardTitle>CANADA</CardTitle>
                    </CardBody>
                </Card>
                <Card style={{
                    width: '18rem'
                }}>
                    <CardBody>
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                        />
                        <CardTitle>FRANCE</CardTitle>
                    </CardBody>
                </Card>
                <Card style={{
                    width: '18rem'
                }}>
                    <CardBody>
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                        />
                        <CardTitle>INDIA</CardTitle>
                    </CardBody>
                </Card>
                <Card style={{
                    width: '18rem'
                }}>
                    <CardBody>
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                        />
                        <CardTitle>DUBAI</CardTitle>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    );
}

export default RecommendedCountryGroup;