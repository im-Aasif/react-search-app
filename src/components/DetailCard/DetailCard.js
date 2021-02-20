import { Media, Card } from 'react-bootstrap';

const DetailCard = (props) => {
    const item = props.item;
    return (
        <div className="p-3">
            <Card>
                <Card.Body>
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={item.image}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </Media.Body>
                    </Media>
                </Card.Body>
            </Card>

        </div>
    )
}

export default DetailCard;