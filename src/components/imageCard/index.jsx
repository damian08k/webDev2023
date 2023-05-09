import Image from "../image";
import Heading from "../heading";
import Text from "../text";
import "./index.css";
import { Button } from "../Button/Button";

const ImageCard = ({ image, heading, text, link }) => {
  return (
    <div className="imageCard">
      <Image src={image} alt={heading} className="imageCard__image" />
      <div className="imageCard__content">
        <Heading level={3}>{heading}</Heading>
        <Text className="imageCard__text"> {text} </Text>
        <Button
          mode="link"
          variant="dark"
          href={link}
          ariaLabel={`Read more about ${heading} feature`}
          fontWeight={700}
          textTransform="capitalize"
        >
          Read more
        </Button>
      </div>
    </div>
  );
};

export default ImageCard;
