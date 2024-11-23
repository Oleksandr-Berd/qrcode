import * as SC from "./QrCardStyled"

import qrCode from "../../assets/images/image-qr-code.png"

const QrCard:React.FC = () => {
    return (
      <div>
        <div>
          <img src={qrCode} alt="qrCode" />
        </div>
        <h3>Improve your front-end skills by building projects</h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    );
}
 
export default QrCard;